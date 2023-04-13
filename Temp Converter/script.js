document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
 let farenheit = document.getElementById('fahrenheit').value;
 let celsius = document.getElementById('celsius').value;
}

function clearForm() {
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
}
