let isDark = true;
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-black');
  document.body.classList.toggle('text-white');
  isDark = !isDark;
  toggleBtn.textContent = isDark ? 'wb_sunny' : 'dark_mode';
});

// Launch Rocket
function launchRocket() {
  const rocket = document.getElementById('rocket');
  rocket.style.display = 'block';
  rocket.style.transform = 'translateX(120vw)';
  setTimeout(() => {
    rocket.style.display = 'none';
    rocket.style.transform = 'translateX(0)';
  }, 3000);
}