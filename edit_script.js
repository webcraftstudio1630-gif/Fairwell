const fs = require('fs');
const file = 'src/data/friendsData.ts';
let content = fs.readFileSync(file, 'utf8');

const imports = `import pic1 from './Friend images/pic 1.jpeg';\nimport pic2 from './Friend images/WhatsApp Image 2026-05-18 at 10.42.55 PM.jpeg';\n\n`;

if (!content.includes('import pic1')) {
  content = imports + content;
}

let count = 0;
content = content.replace(/photo: "[^"]+"/g, () => {
    count++;
    return 'photo: ' + (count % 2 === 0 ? 'pic2' : 'pic1');
});

let lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('C:\\\\Users\\\\ganes') || lines[i].includes('C:\\Users\\ganes')) {
    lines[i] = '  pic1';
  }
}
content = lines.join('\n');

fs.writeFileSync(file, content);
console.log('Done!');
