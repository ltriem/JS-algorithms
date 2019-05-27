const pow = (a, b) => a ** b;
const partialApply = (pow, b) => a => pow(a, b);
const f1 = partialApply(pow, 2);
const f2 = partialApply((a, b) => a * b, 5);
export default partialApply;