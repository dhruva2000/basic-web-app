export default function QueryProcessor(query: string): string {
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  const largestNumber = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  const squareAndCube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/)
  function isSquare(n: number): boolean {
    return Math.sqrt(n) % 1 === 0;
  };
  function isCube(n: number): boolean {
    return Math.cbrt(n) % 1 === 0;
  };
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return ("ppreddy");
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return ("michael is the hottest ta");
  }
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  if (largestNumber) {
    const first: number = parseInt(largestNumber[1]);
    const second: number = parseInt(largestNumber[2]);
    const third: number = parseInt(largestNumber[3]);
    return Math.max(first, second, third).toString();
  }
  var result: string = "";
  if (squareAndCube) {
    const first: number = parseInt(squareAndCube[1]);
    const second: number = parseInt(squareAndCube[2]);
    const third: number = parseInt(squareAndCube[3]);
    const fourth: number = parseInt(squareAndCube[4]);
    const fifth: number = parseInt(squareAndCube[5]);
    const sixth: number = parseInt(squareAndCube[6]);
    const seventh: number = parseInt(squareAndCube[7]);
    if (isSquare(first) && isCube(first)) {
      result += first.toString() + ", ";
    }
    if (isSquare(second) && isCube(second)) {
      result += first.toString() + ", ";
    }
    if (isSquare(third) && isCube(third)) {
      result += first.toString() + ", ";
    }
    if (isSquare(fourth) && isCube(fourth)) {
      result += first.toString() + ", ";
    }
    if (isSquare(fifth) && isCube(fifth)) {
      result += first.toString() + ", ";
    }
    if (isSquare(sixth) && isCube(sixth)) {
      result += first.toString() + ", ";
    }
    if (isSquare(seventh) && isCube(seventh)) {
      result += first.toString() + ", ";
    }
    if (result.endsWith(", ")) {
      result = result.slice(0, -2);
    }
    return result;
}
  return ("Sorry, I don't understand your question.");
}