// custom-select

const select = document.querySelector('.select'),
  selectButton = select.querySelector('.form__info-user-button'),
  selectChoices = document.querySelectorAll('.select__list-item button'),
  input = select.querySelector('input'),
  selectList = select.querySelector('.select__list')

//Открытие и закрытие меню
const openMenu = () => {
  if (selectList.classList.contains('open')) {
    selectList.classList.remove('open')
    select.classList.remove('open')
    return
  }

  selectList.classList.add('open')
  select.classList.add('open')
}
//Закрытие меню
const closeMenu = () => {
  if (selectList.classList.contains('open')) {
    selectList.classList.remove('open')
    select.classList.remove('open')
    return
  }
}

//Устанавливаем выбранное значение
const setOption = (e) => {
  if (!selectList.classList.contains('open')) return

  const targetElement = e.target
  selectButton.textContent = targetElement.textContent
  input.setAttribute('data-text', targetElement.textContent)
  closeMenu()
}

function resetOptions() {
  selectButton.textContent = 'Выберите тип системы'
  input.setAttribute('data-text', '')
  console.log(selectButton, input)
}

const initSelectMenu = () => {
  //Клик по основной кнопке
  selectButton.addEventListener('click', () => {
    openMenu()
  })

  //Закрытие вне таргета
  document.addEventListener('click', (e) => {
    if (e.target.closest('form') && e.target !== selectButton) {
      if (selectList.classList.contains('open')) {
        closeMenu()
      }
    }
  })

  //Выбор текста меню
  selectChoices.forEach((button) => {
    button.addEventListener('click', (e) => {
      setOption(e)
    })
  })
}

export { initSelectMenu }
