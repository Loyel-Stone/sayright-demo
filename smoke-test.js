const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const data = JSON.parse(fs.readFileSync('data_db.json', 'utf8'));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const exampleCount = (html.match(/class="example-group-btn"/g) || []).length;

assert(exampleCount === 53, `Expected 53 Chinglish examples, found ${exampleCount}`);
assert(Array.isArray(data) && data.length === 5000, `Expected 5000 reference sentences, found ${data.length}`);
assert(!/\/api\/(fix|test-key|key-status)/.test(html), 'Static demo must not call backend AI endpoints');
assert(!/id="apiKeyInput"|id="apiKeyTestBtn"|USER_KEY_LS/.test(html), 'Static demo must not expose API Key UI');
assert(html.includes('公开演示版仅支持内置示例'), 'Missing custom sentence static-demo warning');
assert(html.includes("'copy-corrected'"), 'Missing copy corrected action');
assert(html.includes("'copy-natural'"), 'Missing copy natural action');
assert(html.includes("'copy-scenario'"), 'Missing copy scenario action');
assert(html.includes("'copy-alternatives'"), 'Missing copy alternatives action');
assert(html.includes('id="copyFullBtn"'), 'Missing copy full result action');

console.log('Smoke test passed');
