/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');
const mod = require('module');

// Intercept chunk resolution on Windows to handle chunks/ and vendor-chunks/
const origResolveFilename = mod._resolveFilename;
mod._resolveFilename = function(request, parent, isMain, options) {
  if (typeof request === 'string' && (request.startsWith('./') || request.startsWith('.\\'))) {
    if (parent && parent.filename && parent.filename.includes('webpack-runtime')) {
      const parentDir = path.dirname(parent.filename);
      const direct = path.resolve(parentDir, request);
      if (!fs.existsSync(direct)) {
        const inChunks = path.resolve(parentDir, 'chunks', request);
        if (fs.existsSync(inChunks)) {
          return inChunks;
        }
        const inVendor = path.resolve(parentDir, 'vendor-chunks', request);
        if (fs.existsSync(inVendor)) {
          return inVendor;
        }
      }
    }
  }
  return origResolveFilename.call(mod, request, parent, isMain, options);
};

const origRequire = mod.prototype.require;
mod.prototype.require = function(request) {
  if (typeof request === 'string' && (request.startsWith('./') || request.startsWith('.\\'))) {
    if (this && this.filename && this.filename.includes('webpack-runtime')) {
      const parentDir = path.dirname(this.filename);
      const direct = path.resolve(parentDir, request);
      if (!fs.existsSync(direct)) {
        const inChunks = path.resolve(parentDir, 'chunks', request);
        if (fs.existsSync(inChunks)) {
          return origRequire.call(this, inChunks);
        }
        const inVendor = path.resolve(parentDir, 'vendor-chunks', request);
        if (fs.existsSync(inVendor)) {
          return origRequire.call(this, inVendor);
        }
      }
    }
  }
  return origRequire.call(this, request);
};

const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
