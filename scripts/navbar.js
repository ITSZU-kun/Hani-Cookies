function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

fetch('components/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });
