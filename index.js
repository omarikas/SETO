document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.center').addEventListener('click', function() {
        this.style.display = 'none';
        document.querySelector('.rotating-text').style.display="block"
    });
});