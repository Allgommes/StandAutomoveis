// Exemplo de funcionalidade básica
document.addEventListener("DOMContentLoaded", () => {
    const carros = document.querySelectorAll(".carro");

    carros.forEach(carro => {
        carro.addEventListener("click", () => {
            alert("Carro selecionado para mais detalhes!");
        });
    });
});
