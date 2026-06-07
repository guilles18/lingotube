const fs = require('fs');
const babel = require('@babel/core');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (match && match[1]) {
    const code = match[1];
    try {
        babel.transformSync(code, {
            presets: ['@babel/preset-react'],
            filename: 'script.js'
        });
        console.log("No Babel syntax errors found.");
    } catch (e) {
        console.error("Babel Syntax Error:", e.message);
    }
} else {
    console.log("Could not find babel script block.");
}
