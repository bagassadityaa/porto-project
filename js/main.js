const mobileButton = document.getElementById("mobile-button");
const mobileMenu = document.getElementById("mobile-menu");

const toggleMobileButton = () => {
  mobileMenu.classList.toggle("hidden");
  const icon = mobileButton.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.className = "fa-solid fa-bars fa-2x text-white";
  } else {
    icon.className = "fa-solid fa-times fa-2x text-white";
  }
};

mobileButton.addEventListener("click", toggleMobileButton);
