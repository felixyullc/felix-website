const currentYear = () => {
  const year = new Date().getFullYear();
  const current_year = document.getElementById("current-year");
  current_year.textContent = year;
};

const myBackground = () => {
  const buttons = document.querySelectorAll(".my-background button");

  const activateButton = (e) => {
    const button = e.currentTarget;
    const controls = button.getAttribute("aria-controls");
    const getDd = document.getElementById(controls);
    getDd.classList.toggle("active");
    const active = getDd.classList.contains("active");
    button.setAttribute("aria-expanded", active);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", activateButton);
  });
};

const ActiveMenu = () => {
  const links = document.querySelectorAll(".nav-menu a");

  // Normalize current path by removing trailing slash (unless it's root '/')
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  links.forEach((link) => {
    // Get the link's pathname and normalize trailing slashes
    const linkPath = link.pathname.replace(/\/$/, "") || "/";

    // Compare paths instead of full URLs
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

export { currentYear, myBackground, ActiveMenu };
