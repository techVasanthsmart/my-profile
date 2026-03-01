#!/usr/bin/env node

/**
 * Schema Validation Script
 * 
 * Run this script to verify all JSON-LD schemas are present in your built pages.
 * Usage: npm run validate-schemas
 * 
 * This script:
 * 1. Builds the project
 * 2. Checks that .next/static files exist
 * 3. Validates schema presence in key pages
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkSchemaInFile(filePath, schemaType) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Look for JSON-LD schema marker
    if (!content.includes('application/ld+json')) {
      return { found: false, reason: 'No JSON-LD script tag found' };
    }
    
    // Check for specific schema type
    if (content.includes(`"@type":"${schemaType}"`) || 
        content.includes(`"@type": "${schemaType}"`)) {
      return { found: true };
    }
    
    return { found: false, reason: `${schemaType} schema not found` };
  } catch (error) {
    return { found: false, reason: `File not readable: ${error.message}` };
  }
}

function validatePages() {
  const pages = [
    {
      name: 'Homepage',
      file: '.next/server/app/page.html',
      schemas: ['Person', 'WebSite'],
      required: true,
    },
    {
      name: '/about',
      file: '.next/server/app/about/page.html',
      schemas: ['Article', 'Person'],
      required: true,
    },
    {
      name: '/blog (index)',
      file: '.next/server/app/blog/page.html',
      schemas: ['BreadcrumbList'],
      required: true,
    },
    {
      name: '/blog/[slug]',
      file: '.next/server/app/blog/what-is-rag/page.html',
      schemas: ['Article', 'Person'],
      required: true,
    },
    {
      name: '/comparisons (index)',
      file: '.next/server/app/comparisons/page.html',
      schemas: ['BreadcrumbList'],
      required: true,
    },
    {
      name: '/comparisons/[slug]',
      file: '.next/server/app/comparisons/rag-vs-finetuning/page.html',
      schemas: ['Article'],
      required: true,
    },
    {
      name: '/case-studies/docmind',
      file: '.next/server/app/case-studies/docmind/page.html',
      schemas: ['Article', 'Person'],
      required: true,
    },
    {
      name: '/projects/[slug]',
      file: '.next/server/app/projects/task-flow/page.html',
      schemas: ['WebApplication'],
      required: true,
    },
    {
      name: '/services/full-stack-development',
      file: '.next/server/app/services/full-stack-development/page.html',
      schemas: ['Article', 'BreadcrumbList'],
      required: true,
    },
    {
      name: '/faq',
      file: '.next/server/app/faq/page.html',
      schemas: ['FAQPage'],
      required: true,
    },
    {
      name: '/glossary',
      file: '.next/server/app/glossary/page.html',
      schemas: ['DefinedTermSet'],
      required: false,
    },
    {
      name: '/resources',
      file: '.next/server/app/resources/page.html',
      schemas: ['Article'],
      required: true,
    },
    {
      name: '/uses',
      file: '.next/server/app/uses/page.html',
      schemas: ['Article'],
      required: true,
    },
  ];

  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: [],
  };

  log(colors.cyan, '\n📋 Schema Validation Results\n');
  log(colors.blue, '─'.repeat(60));

  for (const page of pages) {
    const filePath = path.join(process.cwd(), page.file);
    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
      log(colors.yellow, `⚠️  ${page.name}: File not found (page not built yet)`);
      results.warnings++;
      results.details.push({
        page: page.name,
        status: 'not-found',
        message: 'Page file does not exist. Run: npm run build',
      });
      continue;
    }

    let pageValid = true;
    const missingSche​mas = [];

    for (const schema of page.schemas) {
      const result = checkSchemaInFile(filePath, schema);
      if (!result.found) {
        pageValid = false;
        missingSche​mas.push(schema);
      }
    }

    if (pageValid) {
      log(colors.green, `✅ ${page.name}: All schemas present`);
      results.passed++;
      results.details.push({
        page: page.name,
        status: 'pass',
        schemas: page.schemas,
      });
    } else {
      const isRequired = page.required;
      const symbol = isRequired ? '❌' : '⚠️ ';
      const logFunc = isRequired ? log : log;
      logFunc(colors.red, `${symbol} ${page.name}: Missing ${missingSche​mas.join(', ')}`);
      
      if (isRequired) {
        results.failed++;
      } else {
        results.warnings++;
      }

      results.details.push({
        page: page.name,
        status: 'fail',
        missing: missingSche​mas,
        required: isRequired,
      });
    }
  }

  log(colors.blue, '─'.repeat(60));
  log(colors.reset, '');

  // Summary
  log(colors.green, `✅ Passed: ${results.passed}`);
  log(colors.red, `❌ Failed: ${results.failed}`);
  log(colors.yellow, `⚠️  Warnings: ${results.warnings}`);

  const totalRequired = pages.filter(p => p.required).length;
  const passedRequired = results.passed;

  log(colors.reset, `\nRequired pages: ${passedRequired}/${totalRequired}`);

  // Detailed failures
  if (results.failed > 0) {
    log(colors.red, '\n❌ CRITICAL ISSUES:');
    results.details
      .filter(d => d.status === 'fail' && d.required)
      .forEach(d => {
        log(colors.red, `\n  ${d.page}`);
        log(colors.red, `  Missing: ${d.missing.join(', ')}`);
        log(colors.red, `  Fix: Check src/app/**/page.tsx and ensure SchemaInjector is imported and used`);
      });
  }

  if (results.warnings > 0 && results.failed === 0) {
    log(colors.yellow, '\n⚠️  WARNINGS (Non-critical):');
    results.details
      .filter(d => d.status === 'fail' && !d.required)
      .forEach(d => {
        log(colors.yellow, `\n  ${d.page}`);
        log(colors.yellow, `  Missing: ${d.missing.join(', ')}`);
      });
  }

  // Next steps
  log(colors.cyan, '\n📋 NEXT STEPS:');
  if (results.failed > 0) {
    log(colors.cyan, '  1. Fix the CRITICAL ISSUES above');
    log(colors.cyan, '  2. Run: npm run build');
    log(colors.cyan, '  3. Run this script again to verify');
  } else if (results.warnings > 0) {
    log(colors.cyan, '  1. (Optional) Address the warnings');
    log(colors.cyan, '  2. Deploy to Vercel');
    log(colors.cyan, '  3. Test pages in Google Rich Results Test: https://search.google.com/test/rich-results');
  } else {
    log(colors.cyan, '  1. Continue with deployment');
    log(colors.cyan, '  2. Run: git push origin main');
    log(colors.cyan, '  3. Monitor Search Console: https://search.google.com/search-console/');
  }

  log(colors.reset, '');

  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
}

function main() {
  log(colors.blue, '🔍 Starting Schema Validation...\n');

  // Check if .next directory exists
  const nextDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(nextDir)) {
    log(colors.yellow, '⚠️  .next directory not found');
    log(colors.cyan, '📦 Building project... This may take a minute.\n');

    try {
      execSync('npm run build', { stdio: 'inherit' });
      log(colors.green, '\n✅ Build complete!\n');
    } catch (error) {
      log(colors.red, `\n❌ Build failed: ${error.message}`);
      process.exit(1);
    }
  }

  validatePages();
}

main();
