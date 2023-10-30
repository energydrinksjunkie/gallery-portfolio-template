let theme = 0;

function changeTheme() {
  theme %= 2;
  if (++theme === 1) document.body.classList.replace("light", "dark");
  else document.body.classList.replace("dark", "light");
}
