let baseA = 0
let baseB = 0
let height = 0
let area = 0

document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  baseA = document.getElementById('input').value
  baseB = document.getElementById('input2').value
  height = document.getElementById('input3').value
  area = (parseInt(baseA) + parseInt(baseB)) / 2 * parseInt(height)
  alert(area)
}
