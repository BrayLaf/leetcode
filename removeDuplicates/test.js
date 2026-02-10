const removeDuplicates = require("./solution");

const cases = [
  {
    name: "basic duplicates",
    input: [1, 1, 2],
    expectedNums: [1, 2],
  },
  {
    name: "multiple duplicates",
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedNums: [0, 1, 2, 3, 4],
  },
  {
    name: "no duplicates",
    input: [1, 2, 3, 4],
    expectedNums: [1, 2, 3, 4],
  },
  {
    name: "all duplicates",
    input: [2, 2, 2, 2],
    expectedNums: [2],
  },
];

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

let failures = 0;

for (const testCase of cases) {
  const nums = [...testCase.input];
  const result = removeDuplicates(nums);
  const k = result;
  const expectedK = testCase.expectedNums.length;

  const kOk = typeof k === "number" && k === expectedK;
  let prefixOk = false;
  if (kOk) {
    const actualPrefix = nums.slice(0, k);
    prefixOk = arraysEqual(actualPrefix, testCase.expectedNums);
  }

  const status = kOk && prefixOk ? "PASS" : "FAIL";
  if (status === "FAIL") failures += 1;

  console.log(`\n[${status}] ${testCase.name}`);
  console.log(" input:", testCase.input);
  console.log(" return value:", result);
  console.log(" array after:", nums);
  console.log(" expected k:", expectedK, "actual k:", k);
  console.log(" expected prefix:", testCase.expectedNums, "actual prefix:", nums.slice(0, Math.max(0, k || 0)));
}

if (failures > 0) {
  console.log(`\n${failures} test(s) failed.`);
  process.exit(1);
}

console.log("\nAll tests passed.");
