document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

//clicar no botão, abre o modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

//clicar no X, fecha o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//clicar fora do modal, também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}