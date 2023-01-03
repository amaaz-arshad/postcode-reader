const UkPostCodeAreas = require("./postcode-areas");
const postcodesArr = require("./postcodes-arr");
const fs = require("fs");

function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

let output = "switch (postCodeArea) { \n";

for (const str of postcodesArr) {
  let strbreak = str.split("(");
  let country = strbreak.shift();

  for (let i = 0; i < strbreak.length; i++) {
    strbreak[i] = strbreak[i].slice(0, -1);
  }

  let found = getObjKey(UkPostCodeAreas, country);

  if (found) {
    country = `UkPostCodeAreas.${found}`;
  } else {
    country = `\"${country}\"`;
  }

  output += `case ${country}:\n`;
  output += "return (\n";

  for (let i = 0; i < strbreak.length; i++) {
    if (i != strbreak.length - 1) {
      if (!strbreak[i].includes("-")) {
        output += `postCodeDistrictNumber === ${strbreak[i]} ||\n`;
      } else {
        let splitter = strbreak[i].split("-");
        output += `isBetween(postCodeDistrictNumber, ${splitter[0]}, ${splitter[1]}) ||\n`;
      }
    } else {
      if (!strbreak[i].includes("-")) {
        output += `postCodeDistrictNumber === ${strbreak[i]}\n`;
      } else {
        let splitter = strbreak[i].split("-");
        output += `isBetween(postCodeDistrictNumber, ${splitter[0]}, ${splitter[1]})\n`;
      }
    }
  }

  output += ");\n";
}
output += "default:\n return false;\n } \n";

fs.writeFile("output.js", output, (err) => {
  if (err) {
    throw err;
  }
  console.log("File is written successfully.");
});
