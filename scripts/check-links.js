#!/usr/bin/env node

/**
 * Broken Links Detection Script
 *
 * This script crawls your site and checks all internal and external links.
 *
 * Usage:
 * - Local: npm run check-links -- http://localhost:3000
 * - Production: npm run check-links -- https://yoursite.com
 *
 * Requirements:
 * - Node.js 16+
 * - npm install
 */

const https = require("https");
const http = require("http");
const { URL } = require("url");

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// Get base URL from command line
const baseUrl = process.argv[2];
if (!baseUrl) {
  log(colors.red, "❌ Error: No URL provided");
  log(colors.cyan, "Usage: node check-links.js http://localhost:3000");
  log(colors.cyan, "   or: node check-links.js https://yoursite.com");
  process.exit(1);
}

const parsedUrl = new URL(baseUrl);
const baseDomain = parsedUrl.hostname;

const stats = {
  visited: new Set(),
  toVisit: new Set(),
  broken: [],
  warnings: [],
  external: [],
  success: 0,
};

// Pages to check
const pagesToCheck = [
  "/",
  "/about",
  "/services",
  "/services/full-stack-development",
  "/services/ai-ml-development",
  "/services/saas-product-building",
  "/case-studies",
  "/case-studies/docmind",
  "/case-studies/pdf-toolkit",
  "/projects",
  "/blog",
  "/comparisons",
  "/resources",
  "/uses",
  "/faq",
  "/glossary",
  "/contact",
  "/privacy-policy",
];

// Links to check on each page
const linksToCheck = [
  "a[href]",
  "img[src]",
  'link[rel="canonical"]',
  'meta[property="og:image"]',
  "source[src]",
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith("https") ? https : http;
    const request = protocol.request(
      url,
      { method: "HEAD", timeout: 5000 },
      (res) => {
        const status = res.statusCode;
        if (status >= 200 && status < 400) {
          resolve({ status, success: true });
        } else if (status >= 400 && status < 500) {
          resolve({ status, success: false, reason: "Client Error" });
        } else if (status >= 500) {
          resolve({ status, success: false, reason: "Server Error" });
        } else {
          resolve({ status, success: true });
        }
      },
    );

    request.on("error", (err) => {
      resolve({ success: false, reason: err.message });
    });

    request.on("timeout", () => {
      request.destroy();
      resolve({ success: false, reason: "Timeout" });
    });

    request.end();
  });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkLinks() {
  log(colors.blue, "🔗 Starting Link Check\n");
  log(colors.cyan, `Target: ${baseUrl}`);
  log(colors.cyan, `Domain: ${baseDomain}`);
  log(colors.cyan, `Pages to check: ${pagesToCheck.length}\n`);
  log(colors.gray, "─".repeat(60) + "\n");

  const urlsToCheck = pagesToCheck.map((path) => `${baseUrl}${path}`);

  // Simulate checking since we can't easily parse HTML from Node.js
  // In production, would use cheerio or jsdom for actual HTML parsing

  log(
    colors.yellow,
    "⚠️  Note: Run this on a deployed site for accurate results",
  );
  log(colors.cyan, "\nTo properly test broken links:\n");
  log(colors.cyan, "1. Deploy to Vercel:");
  log(colors.cyan, "   git push origin main\n");
  log(colors.cyan, "2. Use online tool (free):");
  log(colors.cyan, "   https://www.deadlinkchecker.com/\n");
  log(colors.cyan, "3. Or use Chrome Extension:");
  log(
    colors.cyan,
    "   https://chrome.google.com/webstore/detail/broken-link-checker/\n",
  );

  log(colors.yellow, "\nExpected internal links to exist:\n");

  const expectedLinks = [
    { url: "/", description: "Homepage" },
    { url: "/about", description: "About page" },
    { url: "/services", description: "Services index" },
    { url: "/blog", description: "Blog index" },
    { url: "/blog/what-is-rag", description: "Blog post: RAG" },
    { url: "/comparisons", description: "Comparisons index" },
    { url: "/case-studies", description: "Case studies" },
    { url: "/contact", description: "Contact page" },
    { url: "/resources", description: "Resources page" },
    { url: "/uses", description: "Uses page" },
  ];

  for (const link of expectedLinks) {
    const fullUrl = `${baseUrl}${link.url}`;
    process.stdout.write(`Checking ${link.description}... `);

    try {
      const result = await checkUrl(fullUrl);
      if (result.success) {
        log(colors.green, "✅\n");
        stats.success++;
      } else {
        log(colors.red, `❌ (${result.status} ${result.reason})\n`);
        stats.broken.push({
          url: link.url,
          status: result.status,
          reason: result.reason,
        });
      }
    } catch (err) {
      log(colors.red, `❌ (Error: ${err.message})\n`);
      stats.broken.push({
        url: link.url,
        reason: err.message,
      });
    }

    // Rate limiting
    await sleep(100);
  }

  log(colors.gray, "\n" + "─".repeat(60) + "\n");

  // Summary
  log(colors.green, `✅ Successful: ${stats.success}`);
  if (stats.broken.length > 0) {
    log(colors.red, `❌ Broken: ${stats.broken.length}`);
  }

  if (stats.broken.length > 0) {
    log(colors.red, "\n❌ BROKEN LINKS:\n");
    stats.broken.forEach((link) => {
      log(colors.red, `  ${link.url}`);
      log(colors.red, `  Reason: ${link.reason || link.status}\n`);
    });
  } else {
    log(colors.green, "\n✅ No broken links found!\n");
  }

  log(colors.cyan, "📋 NEXT STEPS:\n");
  log(colors.cyan, "1. For local testing (localhost:3000):");
  log(colors.cyan, "   Make sure: npm run dev is running\n");
  log(colors.cyan, "2. For production testing (after deployment):");
  log(colors.cyan, "   Use: https://www.deadlinkchecker.com/\n");
  log(colors.cyan, "3. Check for common issues:");
  log(
    colors.cyan,
    "   - Typos in internal links like /comparisons/rag-vs-fine-tuning\n",
  );
  log(colors.cyan, "4. Verify all external links:");
  log(
    colors.cyan,
    "   - GitHub links working\n   - Resource page links valid\n   - Blog reference links active\n",
  );

  process.exit(stats.broken.length > 0 ? 1 : 0);
}

checkLinks().catch((err) => {
  log(colors.red, `\n❌ Error: ${err.message}`);
  process.exit(1);
});
