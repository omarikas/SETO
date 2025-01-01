document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.center').addEventListener('click', function() {
        this.style.display = 'none';
        document.querySelector('.rotating-text').style.display="block"

        document.querySelector('#i2025').style.display="block"
    });
});