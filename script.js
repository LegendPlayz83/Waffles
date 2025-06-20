// ------------------------
// 1. Launching Rocket (index.html)
// ------------------------
function launchCake() {
  const cake = document.getElementById('cake');
  if (!cake) return;

  cake.style.display = 'block';
  cake.style.transform = 'translateX(100vw) rotate(720deg)';

  setTimeout(() => {
    cake.style.display = 'none';
    cake.style.transform = 'translateX(0)';
  }, 3000);
}

// ------------------------
// 2. Theme Toggle (All Pages)
// ------------------------
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('bg-white');
      document.body.classList.toggle('bg-gray-900');
      document.body.classList.toggle('text-gray-900');
      document.body.classList.toggle('text-white');

      themeToggle.textContent =
        themeToggle.textContent === 'wb_sunny' ? 'nightlight_round' : 'wb_sunny';
    });
  }

  // ------------------------
  // The following are for desserts.html
  // ------------------------

  // 3. Show/Hide Dessert Fact
  document.querySelectorAll('.show-fact-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const fact = btn.nextElementSibling;
      fact.classList.toggle('hidden');
    });
  });

  // 4. Highlight Favorite Dessert
  document.querySelectorAll('.favorite-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.dessert-card');
      card.classList.toggle('ring-4');
      card.classList.toggle('ring-yellow-400');
    });
  });

  // 5. Search Filter for Dessert Cards
  const searchBox = document.getElementById('searchBox');
  if (searchBox) {
    searchBox.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.dessert-card').forEach((card) => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
      });
    });
  }
});
