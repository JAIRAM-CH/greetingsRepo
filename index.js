export function greet(name) {
  return `Hello  ${name}, Welcome Sample greetings Package!`;
}

export function sum(numbersarray) {
  if (!Array.isArray(numbersarray)) {
    return "Entered a invalid Input";
  } else {
    const value = numbersarray.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
    return `TOTAL = ${value}`;
  }
}
