const toggle = document.getElementById("darkmode-toggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

toggle.onchange = (e) => {
  if (e.target.checked) {
    sun.style.display = "none";
    moon.style.display = "block";
    return (document.body.className = "dark");
  }
  sun.style.display = "block";
  moon.style.display = "none";
  return (document.body.className = "");
};
