document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const delBtn = document.querySelector('#del')
    const mnozBtn = document.querySelector('#mnoz')
    const clearBlockBtn = document.querySelector('.clear')
    const output = document.querySelector('#output')
  
    function getInputValues() {
      const value1 = +num1.value
      const value2 = +num2.value
  
      return [value1, value2]
    }
  
  
    function addHandler() {
      const values = getInputValues()
      // console.log(values)
      const result = values[0] + values[1]
      displayResult(result.toFixed(1))
    }
  
    function subHandler() {
      const values = getInputValues()
      const result = values[0] - values[1]
      displayResult(result.toFixed(1))
    }

    function delHandler() {
        const values = getInputValues()
        const result = values[0] / values[1]
        displayResult(result.toFixed(1))
    }

    function mnozHandler() {
        const values = getInputValues()
        const result = values[0] * values[1]
        displayResult(result.toFixed(1))
    }
  
    function displayResult(result) {
      output.closest('.card').style.display = 'flex'
      output.innerHTML = `Результат = ${result}`
      console.trace()
    }

    function clearBlock() {
        output.closest('.card').style.display = 'none'
        num1.value = ''
        num2.value = ''
    }
  
  
    // console.log('Test', addBtn)
  
    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)
    mnozBtn.addEventListener('click', mnozHandler)
    delBtn.addEventListener('click', delHandler)
    clearBlockBtn.addEventListener('click',clearBlock)
  
  })
  
  
//   setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//   }, 5000)