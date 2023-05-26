const romanMap = [
  {
    roman: "I",
    number: 1,
  },
  {
    roman: "IV",
    number: 4,
  },
  {
    roman: "V",
    number: 5,
  },
  {
    roman: "IX",
    number: 9,
  },
  {
    roman: "X",
    number: 10,
  },
  {
    roman: "XL",
    number: 40,
  },
  {
    roman: "L",
    number: 50,
  },
  {
    roman: "XC",
    number: 90,
  },
  {
    roman: "C",
    number: 100,
  },
  {
    roman: "CD",
    number: 400,
  },
  {
    roman: "D",
    number: 500,
  },
  {
    roman: "CM",
    number: 900,
  },
  {
    roman: "M",
    number: 1000,
  },
];

const romanParticular = [
  {
    roman: "IV",
    number: 4,
  },
  {
    roman: "IX",
    number: 9,
  },
  {
    roman: "XL",
    number: 40,
  },
  {
    roman: "XC",
    number: 90,
  },
  {
    roman: "CD",
    number: 400,
  },
  {
    roman: "CM",
    number: 900,
  },
];

var romanToInt = function (s) {
  let result = 0;
  let indexSkip = -1;
  let charArr = [];

  for (let i = 0; i < s.length; i++) {
    if (indexSkip == i) {
      continue;
    } else {
      const sumChar = `${s[i]}${s[i + 1]}`;
      if (sumChar.length == 2) {
        const isRomanParticular = romanParticular.find(
          (v) => v.roman === sumChar
        );

        if (isRomanParticular != undefined) {
          charArr.push(sumChar);
          indexSkip = i + 1;
        } else {
          charArr.push(s[i]);
        }
      } else {
        charArr.push(s[i]);
      }
    }
  }

  for (let char of charArr) {
    const romanMatch = romanMap.find((v) => v.roman == char);
    result += romanMatch.number;
  }

  return result;
};

const result1 = romanToInt("III");
const result2 = romanToInt("LVIII");
const result3 = romanToInt("MCMXCIV");

console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);
