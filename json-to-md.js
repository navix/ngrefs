const fs = require('fs-extra');


const json = require('./src.json');

let result = '';

for (const n in json) {
  result += `### \`${n}\`\r\n\r\n`;
  const item = json[n];
  if (item.alias) {
    result += `* **Псевдоним**: \`${item.alias}\`\r\n`;
  }
  if (item.type) {
    result += `* **Тип**: \`${item.type}\`\r\n`;
  }
  if (item.format) {
    result += `* **Формат**: \`${item.format}\`\r\n`;
  }
  if (item.enum) {
    result += `* **Значения**: \`${item.enum.join(',')}\`\r\n`;
  }
  if (item.default) {
    result += `* **По-умолчанию**: \`${item.default}\`\r\n`;
  }
  if (item.description) {
    result += `\r\n${item.description}\r\n\r\n\r\n`;
  }
}

console.log(result);

fs.outputFileSync('./res.md', result, function(err) {
  if (err) {
    return console.log(err);
  }
});
