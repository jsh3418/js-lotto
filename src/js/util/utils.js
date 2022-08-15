export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const showElement = (element) => {
  element.classList.remove("d-none");
};
