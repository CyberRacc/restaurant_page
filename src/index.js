// Import JavaScript modules
import Home from "./components/home";
import { enableNavClicks } from "./components/navClicks";
import logo from './assets/images/fat_cat_logo.png';

// Import styles
import './styles/global_style.css';
import './styles/footer.css';
import './styles/header_nav.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/booking.css';

// Set the logo image source
const logoElement = document.getElementById('logo');
if (logoElement) {
    logoElement.src = logo;
} else {
    console.error('Logo element not found');
}

// Enable navigation clicks
enableNavClicks();

// Load the home page
const homePage = new Home();
homePage.loadHomePage();