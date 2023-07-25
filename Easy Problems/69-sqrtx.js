const sqrtx = (x) => {
  // Skip silly cases
  if (x == 0 || x == 1) return x;

  let iterations = (x < 10000) ? 10 : 21;

  let lastGuess = 1;

  // Newthon's method - tinkering with n. of iterations until things work as expected
  for (let i = 1; i < iterations; i += 1) {
    lastGuess = (1/2 * (lastGuess + (x/lastGuess)));
  }

  return Math.floor(lastGuess);
}

console.log(sqrtx(8))