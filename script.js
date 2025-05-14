function abrirModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = src;
}
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
document.getElementById("toggle-tema").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
