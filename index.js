const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {

    const suffix = this.dataset.sizing || '';
    console.log(this.value + suffix);
    document.body.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', handleUpdate))