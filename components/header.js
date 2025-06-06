window.addEventListener("DOMContentLoaded", function () {
  const header = ` <nav class="bg-primary-500">
      <div class="container max-w-7xl py-4 px-8 mx-auto">
        <div class="flex justify-between gap-8">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="#">
              <img
                src="img/logo.png"
                alt="logo"
                class="max-w-12 hover:scale-110 transition-transform duration-500"
            /></a>
          </div>
          <!-- Mega-Menu -->
          <div class="hidden items-center space-x-8 md:flex" id="desktop-menu">
            <a
              href="#"
              class="font-semibold text-slate-300 hover:text-slate-100"
              >Profile</a
            >
            <a
              href="#"
              class="font-semibold text-slate-300 hover:text-slate-100"
              >Project</a
            >
            <a
              href="#"
              class="font-semibold text-slate-300 hover:text-slate-100"
              >Home</a
            >
            <a
              href="#"
              class="font-semibold text-slate-300 hover:text-slate-100"
              >Contact</a
            >
          </div>
          <!-- Tombol Login -->
          <div class="hidden md:flex space-x-4 items-center">
            <button
              class="bg-accent-500 rounded-lg font-semibold text-slate-100 py-2 px-5 shadow-sm hover:bg-primary-500"
            >
              <a href="#">Masuk</a>
            </button>
            <button
              class="bg-primary-500 rounded-lg font-semibold text-slate-100 py-2 px-5 shadow-sm hover:bg-primary-900"
            >
              <a href="#">Daftar</a>
            </button>
          </div>
          <!-- Mobile Button -->
          <div class="flex md:hidden items-center" id="mobile-button">
            <i class="fa-solid fa-bars fa-2x text-white"></i>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div class="mobile-menu hidden md:hidden" id="mobile-menu">
        <ul>
          <li>
            <a
              href="#"
              class="block bg-accent-500 text-slate-50 py-3 px-4 font-semibold"
              >Profile</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block bg-accent-500 text-slate-50 py-3 px-4 font-semibold"
              >Project</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block bg-accent-500 text-slate-50 py-3 px-4 font-semibold"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block bg-accent-500 text-slate-50 py-3 px-4 font-semibold"
              >Contact</a
            >
          </li>
          <li class="border-b-gray-50">
            <a href="#" class="text-white font-semibold block py-3 px-4 mt-2"
              >Masuk</a
            >
          </li>
          <li class="border-b-gray-50">
            <a href="#" class="text-white font-semibold block py-3 px-4 mt-2"
              >Daftar</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- header end --> `;

  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = header;
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
  }
});
