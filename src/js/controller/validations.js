export const isValidRange = (element, min, max) => {
  const isValidWinningNumbers = Array.from(element).every((number) => {
    return min <= number.value && number.value <= max;
  });

  return isValidWinningNumbers;
};

export const isDuplicateNumbers = (elements) => {
  let numbers = [];
  elements.forEach((element) => {
    numbers.push(element.value);
  });
  const removeDuplicates = new Set(numbers);
  return numbers.length !== removeDuplicates.size;
};
