export const range = (from: number, to: number): number[] => {
  const nums = [];
  for (from; from < to; from++) {
    nums.push(from);
  }
  return nums;
};

export const randomFromRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
