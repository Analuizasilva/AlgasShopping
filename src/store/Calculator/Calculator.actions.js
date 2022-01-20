export function sum(a, b) {
  return {
    type: "Sum",
    payload: [a, b],
  };
}

export function subtract(a, b) {
  return {
    type: "Subtract",
    payload: [a, b],
  };
}
