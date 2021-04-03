import { ExpressionParser } from "adaptive-expressions";

const parser = new ExpressionParser();
const testExpressions = [
  "count + 111",
  "count >= 100 || count <= 5 ? 'outlier' : 'normal'",
  "bigNum >= 100 || bigNum <= 5 ? 'outlier' : 'normal'",
  "name == 'stefan' ? yesVal : noVal",
  "name == 'arun' ? yesVal : noVal",
  "nestedObj.num * arrNestedObj[1].num",
  "count > 5 && bigNum == 999 && name == 'stefan'",
  "count > 5 && bigNum == 998 && name == 'stefan'",
  "(count > 5 && bigNum == 998) || count == 7",
  "(count > 5 && bigNum == 998) || count >= 5",
  "((count > 5 && bigNum == 998) || count >= 5) && name != 'stefan'",
  "count(arrNestedObj)",
  "contains(name, 'ste')",
  "contains(arr, 'hello')",
  "contains(arr, 'worll')",
  "last(arr)",
  "last(arrNestedObj)",
  "utcNow()",
  "concat(year(utcNow()), '-yay') == '2021-yay'",
  "undefinedVar.asdf > 10",
  "undefinedVar.asdf + 10",
];
const scope = {
  name: "stefan",
  count: 6,
  bigNum: 999,
  yesVal: "heck yeah",
  noVal: "no way",
  nestedObj: { num: 11, qwer: { num: 10 } },
  arrNestedObj: [{ num: 1 }, { num: 2 }],
  arr: ["hello", "world"],
};
console.log("scope: ", scope);
testExpressions.forEach((exp) => {
  console.log("\nexpression: ", exp);
  const result = parser.parse(exp).tryEvaluate(scope);

  console.log("result: ", result);
});
