#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
let fails = 0;
function ok(cond, msg) {
  if (!cond) { console.error('FAIL', msg); fails++; }
  else console.log(' ok ', msg);
}
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]);
scripts.forEach(s => ok(fs.existsSync(path.join(root, s)), 'script ' + s));
const maps = [
  'europe-1190.jpg', 'france-1180.png', 'hyw-1435.png', 'constantinople-1453.png',
  'lepanto-1571.jpg', 'blenheim-1704.png', 'vienna-1683.jpg', 'austerlitz-1805.jpg',
  'waterloo-1815.png', 'leipzig-1813.jpg'
];
maps.forEach(m => ok(fs.existsSync(path.join(root, 'maps', m)), 'map ' + m));
const weeks = fs.readdirSync(path.join(root, 'js/data')).filter(f => /^w\d+\.js$/.test(f));
ok(weeks.length === 12, '12 week files (' + weeks.length + ')');
process.exit(fails ? 1 : 0);
