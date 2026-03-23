const fs = require('fs');
const yaml = require('js-yaml');

try {
  let doc = yaml.load(fs.readFileSync('C:\\Users\\Kamesh R\\.gemini\\antigravity\\brain\\966f0c5f-4374-45bd-b64c-a14ecea9aa29\\.system_generated\\steps\\27\\output.txt', 'utf8'));
  let res = { styles: {}, colors: {} };
  
  function traverse(obj) {
    if (!obj || typeof obj !== 'object') return;
    for (let k in obj) {
      if (k.startsWith('style_')) {
        res.styles[k] = obj[k];
      } else if (k.startsWith('fill_') || k.startsWith('stroke_')) {
        let v = obj[k];
        if (Array.isArray(v) && typeof v[0] === 'string' && (v[0].startsWith('#') || v[0].startsWith('rgba'))) {
          res.colors[k] = v[0];
        } else if (v && Array.isArray(v.colors) && v.colors.length > 0 && typeof v.colors[0] === 'string') {
          res.colors[k] = v.colors[0];
        } else if (v && Array.isArray(v) && v[0]?.type === 'IMAGE') {
           // wait, background image
           res.colors[k] = v[0];
        }
      }
      traverse(obj[k]);
    }
  }
  
  traverse(doc);
  fs.writeFileSync('figma_styles.json', JSON.stringify(res, null, 2));
  console.log('Success');
} catch (e) {
  console.log(e);
}
