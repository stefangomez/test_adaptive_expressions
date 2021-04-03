import { ExpressionParser } from "adaptive-expressions";

const parser = new ExpressionParser();
const testExpressions = [
  "count + 111",
  "count >= 100 || count <= 5 ? 'outlier' : 'normal'",
  "bigNum >= 100 || bigNum <= 5 ? 'outlier' : 'normal'",
  "name == 'stefan' ? yesVal : noVal",
  "name == 'arun' ? yesVal : noVal",
  "nestedObj.num * arrNestedObj[1].num",
];
const scope = {
  name: "stefan",
  count: 6,
  bigNum: 999,
  yesVal: "heck yeah",
  noVal: "no way",
  nestedObj: { num: 11, qwer: { num: 10 } },
  arrNestedObj: [{ num: 1 }, { num: 2 }],
};
console.log("scope: ", scope);
testExpressions.forEach((exp) => {
  console.log("\nexpression: ", exp);
  const result = parser.parse(exp).tryEvaluate(scope);

  console.log("result: ", result);
});
