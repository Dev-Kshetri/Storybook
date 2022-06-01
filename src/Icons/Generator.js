const path = require("path");
const fs = require("fs");

const normalize = (fullName) => {
  const fileName = fullName.split(".")[0];
  const [firstChunk, ...otherChunks] = fileName.split("-");
  const chunks = otherChunks.length === 0 ? [firstChunk] : otherChunks;
  const [firstSubChunk, ...subChunks] = chunks;
  let normalizedChunks;
  if (!isNaN(Number(firstSubChunk[0]))) {
    // is a number
    normalizedChunks = ["_" + firstSubChunk, ...subChunks];
  } else {
    normalizedChunks = chunks;
  }
  const normalizedName = normalizedChunks.reduce((name, chunk) => {
    const [firstLetter, ...letters] = chunk;
    return [name, firstLetter.toUpperCase(), ...letters].join("");
  }, "");
  return normalizedName;
};
const file = [];
const nameStore = [];
function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    file.push(
      `export { default as ${
        normalize(exportName) + "Icon"
      } } from './${basename}'`
    );
  });
  return file.join("\n");
}
console.log("NAMESTORE_IS_FOLLOWING:", nameStore);

module.exports = defaultIndexTemplate;
