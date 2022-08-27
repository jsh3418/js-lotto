export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const disabledElement = (element) => {
  element.disabled = true;
};

export const enabledElement = (element) => {
  element.disabled = false;
};

export const showElement = (element) => {
  element.classList.remove("d-none");
};

export const hideElement = (element) => {
  element.classList.add("d-none");
};

export const clearInput = (element) => {
  element.value = "";
};

export const clearInputs = (inputs) => {
  Array.from(inputs).forEach((input) => {
    input.value = "";
  });
};
