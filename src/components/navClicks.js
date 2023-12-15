// Desc: This file contains the functions that are called when the nav buttons are clicked.

// Import JavaScript modules
import Home from "./home";
import Bookings from "./bookings";
import Menu from "./menu";


const content = document.getElementById('content');
const homePage = new Home();
const bookingsPage = new Bookings();
const menuPage = new Menu();

export const enableNavClicks = () => {
    // Get all nav buttons
    const navButtons = document.querySelectorAll('.nav-element');

    // Add event listeners to each nav button
    navButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            // Call page update to the relevant page.
            switch (button.id) {
                case "menu":
                    content.innerHTML = '';

                    menuPage.initialiseItems();
                    menuPage.createMenu();
                    menuPage.updateMenu();
                    break;
                case "bookings":
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Loading Bookings...");
                    bookingsPage.createBookingPage();
                    break;
                case "home":
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Creating Home...");
                    homePage.loadHomePage();
                    break;
                default:
                    // If button.id doesn't match any of the above cases.
                    console.log("Invalid Selection");
            }
        });
    });
}

