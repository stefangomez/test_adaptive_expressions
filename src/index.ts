import { ExpressionParser } from "adaptive-expressions";

const parser = new ExpressionParser();
const testExpressions = [
  "count + 111",
  "count >= 100 || count <= 5 ? 'outlier' : 'normal'",
  "name == 'stefan' ? yesVal : noVal",
  "name == 'arun' ? yesVal : noVal",
];

testExpressions.forEach((exp) => {
  console.log("\nexpression: ", exp);
  const result = parser.parse(exp).tryEvaluate({
    name: "stefan",
    count: 6,
    yesVal: "heck yeah",
    noVal: "no way",
    obj: { asdf: 11 },
    arr: [{ asdf: 1 }, { asdf: 2 }],
  });

  console.log("result: ", result);
});
