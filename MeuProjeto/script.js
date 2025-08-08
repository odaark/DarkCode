const toggle = document.getElementById('toggle-theme');
const body = document.body;

// Verifica o tema salvo ao carregar a página
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggle.classList.add('active');
}

// Quando o botão é clicado
toggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  toggle.classList.toggle('active');

  // Salva no localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
