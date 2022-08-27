export const isValidRange = (element, min, max) => {
  const isValidWinningNumbers = Array.from(element).every((number) => {
    return min <= number.value && number.value <= max;
  });

  return isValidWinningNumbers;
};
