// order button
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert("You must be hungry! We are not a real restaurant yet! 🍕 ");
    });
  });
// modal
const modal = document.getElementById("aboutModal");
const btn = document.querySelector(".about-btn");
const span = document.querySelector(".close");

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};