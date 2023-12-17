// Import JavaScript modules
import Home from "./components/home";
import { enableNavClicks } from "./components/navClicks";
import logo from './assets/images/fat_cat_logo_2_alpha.png';
import darkThemeIcon from './assets/icons/dark_mode_moon.svg';
import darkThemeIconFilled from './assets/icons/dark_mode_moon_filled.svg';

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

// Get the HTML element with the id 'theme-switch-container'. This should be a container element where the SVG will be inserted.
const iconElement = document.getElementById('theme-switch-container');

// Check if the user prefers dark mode.
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// If the user prefers dark mode, add the 'dark-theme' class to the document element and set the SVG to the dark theme icon.
if (prefersDarkMode) {
    document.documentElement.classList.add('dark-theme');
    iconElement.innerHTML = darkThemeIconFilled;
} else {
    iconElement.innerHTML = darkThemeIcon;
}

// Get the SVG element. This is the first (and should be the only) child of the container element.
const svgElement = iconElement.firstChild;

// Set the fill color of the SVG.
svgElement.style.fill = prefersDarkMode ? 'white' : 'black';

// Add a click event listener to the SVG.
iconElement.addEventListener('click', () => {
    if (!document.documentElement.classList.contains('dark-theme')) {
        document.documentElement.classList.add('dark-theme');
        iconElement.innerHTML = darkThemeIconFilled;
        const svgElement = iconElement.firstChild; // Update the svgElement reference
        svgElement.style.fill = 'white'; // Update the fill color to 'white'
    } else {
        document.documentElement.classList.remove('dark-theme');
        iconElement.innerHTML = darkThemeIcon;
        const svgElement = iconElement.firstChild; // Update the svgElement reference
        svgElement.style.fill = 'black';
    }
});

// Enable navigation clicks
enableNavClicks();

// Load the home page
const homePage = new Home();
homePage.loadHomePage();
homePage.addEventListeners();