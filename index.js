const UkPostCodeAreas = require("./postcode-areas");
const postcodesArr = require("./postcodes-arr");
const fs = require("fs");
const mr = require("multi-integer-range");

function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

let postcodes = [];
try {
  const data = fs.readFileSync("postcodes.txt", "utf8");
  postcodes = data.split("\r\n");
} catch (err) {
  console.error(err);
}

for (let i = 0; i < postcodes.length; i++) {
  let regex = /^([a-zA-Z]{1,2}[0-9]{1,2}[a-zA-Z]{1})$/;
  if (postcodes[i].match(regex)) {
    postcodes[i] = postcodes[i].slice(0, -1);
  }
}

let uniquePostcodes = [];
let letters = [];
let uniqueLetters = {};

for (const item of postcodes) {
  let letter = item.replace(/[0-9]/g, "");
  letters.push(letter);

  if (!uniquePostcodes.includes(item)) {
    uniquePostcodes.push(item);
  }
}

for (const item of letters) {
  if (!uniqueLetters[item]) {
    uniqueLetters[item] = "";
  }
}

for (const postcode of uniquePostcodes) {
  let letter = postcode.split(/[0-9]+/g);
  let number = postcode.split(/[a-zA-Z]+/g);
  uniqueLetters[letter[0]] += number;
}

for (const item in uniqueLetters) {
  let numbers = uniqueLetters[item].slice(1).split(",").map(Number);
  numbers = numbers.sort((a, b) => a - b);
  numbers = mr.normalize(numbers);
  uniqueLetters[item] = numbers;
}

// CONVERSION TO CODE
let output = "switch (postCodeArea) { \n";

for (const item in uniqueLetters) {
  let country = item;
  let numArr = uniqueLetters[item];
  let found = getObjKey(UkPostCodeAreas, country);

  if (found) {
    country = `UkPostCodeAreas.${found}`;
  } else {
    country = `\"${country}\"`;
  }

  output += `case ${country}:\n`;
  output += "return (\n";

  for (let i = 0; i < numArr.length; i++) {
    if (i != numArr.length - 1) {
      if (numArr[i][0] == numArr[i][1]) {
        output += `postCodeDistrictNumber === ${numArr[i][0]} ||\n`;
      } else {
        output += `isBetween(postCodeDistrictNumber, ${numArr[i][0]}, ${numArr[i][1]}) ||\n`;
      }
    } else {
      if (numArr[i][0] == numArr[i][1]) {
        output += `postCodeDistrictNumber === ${numArr[i][0]} \n`;
      } else {
        output += `isBetween(postCodeDistrictNumber, ${numArr[i][0]}, ${numArr[i][1]}) \n`;
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
