/* eslint-disable no-new-func */
export function evaluateSubmission(code, testCases) {
  if (!code || code === '' || !code.includes('return')) return false;

  const functionDefinition = extractFunctionFromCode(code);
  const userFunction = new Function(wrapFunctionBody(functionDefinition));

  return testCases.every((testCase) => evaluateTestCase(testCase, userFunction));
}

function extractFunctionFromCode(code) {
  const regex = /^function\s\w+\(.*\)\s*\{(.|\n)*\}\n/gm;
  return regex.exec(code)[0];
}

function wrapFunctionBody(functionBody) {
  return `{ return ${functionBody}}`;
}

function evaluateTestCase(testCase, evaluatedFunction) {
  const functionReturn = evaluatedFunction.call(null)
    .call(null, ...Object.values(testCase.input));
  return functionReturn.toString() === testCase.output.resultado.toString();
}
