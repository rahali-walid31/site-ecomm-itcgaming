const checkbox = document.getElementById('checkbox')
const modeLabel = document.getElementById('mode-label')

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    checkbox.checked = true
    modeLabel.textContent = 'Dark Mode'
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        modeLabel.textContent = 'Dark Mode'
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        modeLabel.textContent = 'Light Mode'
    }
})