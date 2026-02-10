export const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    const error = new Error("Invalid fibonacci input");
    error.status = 400;
    throw error;
  }

  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const filterPrimes = (arr) => {
  if (!Array.isArray(arr)) {
    const error = new Error("Prime input must be array");
    error.status = 400;
    throw error;
  }

  return arr.filter(isPrime);
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

export const computeHCF = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    const error = new Error("Invalid HCF input");
    error.status = 400;
    throw error;
  }

  return arr.reduce(gcd);
};

export const computeLCM = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    const error = new Error("Invalid LCM input");
    error.status = 400;
    throw error;
  }

  const lcm = (a, b) => (a * b) / gcd(a, b);
  return arr.reduce(lcm);
};
