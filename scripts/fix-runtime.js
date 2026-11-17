const fs = require('fs');
const path = require('path');

// 1. Ensure .next/server/app-paths-manifest.json has all routes
const appPathsManifestPath = '.next/server/app-paths-manifest.json';
const appDir = '.next/server/app';

if (fs.existsSync(appDir)) {
  const manifest = fs.existsSync(appPathsManifestPath) 
    ? JSON.parse(fs.readFileSync(appPathsManifestPath, 'utf8')) 
    : {};

  function scan(dir, relPath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        scan(path.join(dir, entry.name), relPath ? `${relPath}/${entry.name}` : entry.name);
      } else if (entry.name === 'page.js') {
        const routeKey = relPath ? `/${relPath}/page` : '/page';
        const routeValue = relPath ? `app/${relPath}/page.js` : 'app/page.js';
        manifest[routeKey] = routeValue;
      }
    }
  }

  scan(appDir);
  fs.writeFileSync(appPathsManifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Synchronized app-paths-manifest.json:', Object.keys(manifest));
}

// 2. Patch __webpack_require__.u in .next/server/webpack-runtime.js
const runtimePath = '.next/server/webpack-runtime.js';
if (fs.existsSync(runtimePath)) {
  let code = fs.readFileSync(runtimePath, 'utf8');
  code = code.replace(
    /__webpack_require__\.u\s*=\s*\(chunkId\)\s*=>\s*\{[\s\S]*?\};/,
    `__webpack_require__.u = (chunkId) => {
      const fs = require('fs');
      const path = require('path');
      const base = __dirname;
      if (fs.existsSync(path.join(base, 'chunks', chunkId + '.js'))) return 'chunks/' + chunkId + '.js';
      if (fs.existsSync(path.join(base, 'vendor-chunks', chunkId + '.js'))) return 'vendor-chunks/' + chunkId + '.js';
      if (fs.existsSync(path.join(base, chunkId + '.js'))) return '' + chunkId + '.js';
      return 'chunks/' + chunkId + '.js';
    };`
  );
  fs.writeFileSync(runtimePath, code, 'utf8');
  console.log('Patched __webpack_require__.u dynamically in webpack-runtime.js');
}

// 3. Mirror all chunks from .next/server/chunks into .next/server root
const chunksDir = '.next/server/chunks';
const serverDir = '.next/server';
if (fs.existsSync(chunksDir)) {
  const chunkFiles = fs.readdirSync(chunksDir);
  let copied = 0;
  for (const file of chunkFiles) {
    if (file.endsWith('.js')) {
      const src = path.join(chunksDir, file);
      const dest = path.join(serverDir, file);
      if (!fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
        fs.copyFileSync(src, dest);
        copied++;
      }
    }
  }
  if (copied > 0) {
    console.log(`Mirrored ${copied} chunks from .next/server/chunks to .next/server root`);
  }
}

// 4. Mirror vendor chunks if present
const vendorChunksDir = '.next/server/vendor-chunks';
if (fs.existsSync(vendorChunksDir)) {
  const vendorFiles = fs.readdirSync(vendorChunksDir);
  for (const file of vendorFiles) {
    if (file.endsWith('.js')) {
      const src = path.join(vendorChunksDir, file);
      const dest = path.join(serverDir, file);
      if (!fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
        fs.copyFileSync(src, dest);
      }
    }
  }
}
