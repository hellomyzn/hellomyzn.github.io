const fs = require("fs");
const path = require("path");

/**
 * HTML内の縦長画像に Tailwind の sm:w-2/3 を追加する
 * @param {string} html HTML文字列
 * @returns {string} 修正済みHTML
 */
function addSmWidthToVerticalImages(html) {
  return html.replace(/<img\s+[^>]*src="([^"]+)"[^>]*>/g, (match, src) => {
    const imagePath = path.join(__dirname, "../public", src);
    if (!fs.existsSync(imagePath)) return match;

    const buffer = fs.readFileSync(imagePath);
    let width, height;

    if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) break;
        const marker = buffer[offset + 1];
        const len = buffer.readUInt16BE(offset + 2);
        if (marker === 0xc0 || marker === 0xc2) {
          height = buffer.readUInt16BE(offset + 5);
          width = buffer.readUInt16BE(offset + 7);
          break;
        }
        offset += 2 + len;
      }
    } else if (src.endsWith(".png")) {
      width = buffer.readUInt32BE(16);
      height = buffer.readUInt32BE(20);
    } else {
      return match;
    }

    if (height && width && height > width) {
      if (match.includes('class="')) {
        return match.replace(/class="([^"]*)"/, `class="$1 sm:w-2/3 m-auto"`);
      } else {
        return match.replace(/<img/, `<img class="sm:w-2/3 m-auto"`);
      }
    }
    return match;
  });
}

module.exports = { addSmWidthToVerticalImages };
