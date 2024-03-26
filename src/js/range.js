const textInputElement = document.querySelector('#rangeValue')
const rangeInputElement = document.querySelector('#myRange')

const updateTextInput = () => {
  textInputElement.value = rangeInputElement.value
}

const updateRangeInput = () => {
  rangeInputElement.value = textInputElement.value
}

const initRange = () => {
  textInputElement.value = rangeInputElement.value
  textInputElement.addEventListener('input', updateRangeInput)
  rangeInputElement.addEventListener('input', updateTextInput)
}

export { initRange }
