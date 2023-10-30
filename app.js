let theme = 0;
let themeStorage = localStorage.getItem("theme");

if (themeStorage) {
  document.body.classList.add(themeStorage);
} else {
  document.body.classList.add("light");
}

function changeTheme() {
  theme %= 2;
  if (++theme === 1) {
    document.body.classList.replace("light", "dark");
    themeStorage = "dark";
  } else {
    document.body.classList.replace("dark", "light");
    themeStorage = "light";
  }
  localStorage.setItem("theme", themeStorage);
}
