const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  console.log(this.value);
}

inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate));
