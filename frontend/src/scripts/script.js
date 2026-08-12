import { currentYear, myBackground, ActiveMenu } from "./modules/dom.js";
import { initBurgerMenu } from "./components/burgerMenu.js";
import { initCal } from "./components/cal.js";

// currentYear()
initBurgerMenu();
myBackground();
ActiveMenu();
initCal("catch-up");
initCal("private-coaching-clients");
initCal("exec-coaching-clients");
