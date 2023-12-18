// Desc: This file contains the functions that are called when the nav buttons are clicked.

// Import JavaScript modules
import Home from "./home";
import Bookings from "./bookings";
import Menu from "./menu";
import Locations from "./locations";


const content = document.getElementById('content');
const homePage = new Home();
const bookingsPage = new Bookings();
const menuPage = new Menu();
const locationsPage = new Locations();

export const enableNavClicks = () => {
    // Get all nav buttons
    const navButtons = document.querySelectorAll('.nav-element');

    // Add event listeners to each nav button
    navButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            // Call page update to the relevant page.
            switch (button.id) {
                case "menu":
                    document.title = "Fat Cat Cafe | Menu";
                    content.innerHTML = '';

                    menuPage.initialiseItems();
                    menuPage.createMenu();
                    menuPage.updateMenu();
                    break;
                case "bookings":
                    document.title = "Fat Cat Cafe | Bookings";
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Loading Bookings...");
                    bookingsPage.createBookingPage();
                    break;
                case "home":
                    document.title = "Fat Cat Cafe | Home";
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Creating Home...");
                    homePage.loadHomePage();
                    homePage.addEventListeners();
                    break;
                case "locations":
                    document.title = "Fat Cat Cafe | Locations";
                    // Clear the content
                    content.innerHTML = '';
                    locationsPage.createLocationsPage();
                    locationsPage.initialiseLocations();
                    locationsPage.updateLocations();
                    break;
                default:
                    // If button.id doesn't match any of the above cases.
                    console.log("Invalid Selection");
            }
        });
    });
}

