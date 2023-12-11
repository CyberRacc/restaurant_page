import { loadHomePage } from "./home";

const content = document.getElementById('content');

export const enableNavClicks = () => {
    const navButtons = document.querySelectorAll('.nav-element');

    // Below code is broken.
    // Only the Menu button is working.

    navButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            console.log(e);
            // Call page update to the relevant page.
            if (e.id = "menu") {
                content.innerHTML = '';
                console.log("Loading Menu...");
                // createMenu();
                return;
            } else if (e.id = "bookings") {
                console.log("Bookings not yet implemented.");
                // createBookings()
                return;
            } else if (e.id = "home") {
                console.log("Creating Home...");
                loadHomePage();
                return;
            } else {
                console.log("Invalid Selection");
                return;
            }
        });
    });
}

