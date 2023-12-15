// Import JavaScript modules
import Home from "./components/home";
import { enableNavClicks } from "./components/navClicks";
import logo from './assets/images/fat_cat_logo_2_alpha.png';

// Import styles
import './styles/global_style.css';
import './styles/footer.css';
import './styles/header_nav.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/booking.css';
import './styles/locations.css';

// Set the logo image source
const logoElement = document.getElementById('logo');
if (logoElement) {
    logoElement.src = logo;
} else {
    console.error('Logo element not found');
}

document.getElementById('theme-switch').addEventListener('change', (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }
});

// Enable navigation clicks
enableNavClicks();

// Load the home page
const homePage = new Home();
homePage.loadHomePage();
homePage.addEventListeners();