import Home from "./home";
import { Bookings } from "./bookings";

const content = document.getElementById('content');
const homePage = new Home();
const bookingsPage = new Bookings();

export const enableNavClicks = () => {
    const navButtons = document.querySelectorAll('.nav-element');

    navButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            console.log(e);
            // Call page update to the relevant page.
            switch (button.id) {
                case "menu":
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Loading Menu...");
                    // createMenu();
                    // 'break' is used to exit the switch statement after a matching case is found.
                    // 'return' is not necessary here because we're not trying to stop the execution of the entire function,
                    // just the switch statement. If this was an 'if' statement and we wanted to stop the execution of the function
                    // after a matching condition was found, we would use 'return'.
                    break;
                case "bookings":
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Loading Bookings...");
                    bookingsPage.createBookings();
                    break; // Same explanation as above
                case "home":
                    // Clear the content
                    content.innerHTML = '';
                    console.log("Creating Home...");
                    homePage.loadHomePage();
                    break; // Same explanation as above
                default:
                    // If button.id doesn't match any of the above cases, log "Invalid Selection"
                    console.log("Invalid Selection");
            }
        });
    });
}

