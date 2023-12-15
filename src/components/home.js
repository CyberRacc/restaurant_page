import Menu from "./menu";
import Locations from "./locations";

export default class Home {
    
    createHomePage() {
        // Get the content element
        const content = document.getElementById(`content`);

        // Create the page container
        const homeContainer = document.createElement('div');
        homeContainer.id = 'home-container';

        // Create the heading container
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('heading-container');

        // Create the logo and heading container
        const logoHeadingContainer = document.createElement('div');
        logoHeadingContainer.classList.add('logo-heading-container');

        // Create the heading logo
        const headingLogo = document.createElement('img');
        headingLogo.src = '/src/assets/images/fat_cat_logo_2_alpha.png';
        headingLogo.alt = 'logo of a large round cat with text saying fat cat';
        headingLogo.classList.add('heading-logo');

        // Create the heading
        const heading = document.createElement('h1');
        heading.textContent = 'Fat Cat Cafe';
        heading.classList.add('heading');

        // Create the tagline
        const tagline = document.createElement('p');
        tagline.textContent = 'Welcome to Fat Cat Cafe! Indulge in our delicious food at any of our convenient locations.';
        tagline.classList.add('tagline');

        // Create the "View Locations" button
        const btnViewLocations = document.createElement('button');
        btnViewLocations.textContent = 'View Locations';
        btnViewLocations.id = 'btn-view-locations';
        btnViewLocations.classList.add('btn-view-locations');

        // Create the "View Menu" button
        const btnViewMenu = document.createElement('button');
        btnViewMenu.textContent = 'View menu';
        btnViewMenu.id = 'btn-view-menu';
        btnViewMenu.classList.add('btn-view-menu');

        // Create the button container
        const btnContainer = document.createElement('div');
        btnContainer.id = 'btn-container';
        btnContainer.appendChild(btnViewLocations);
        btnContainer.appendChild(btnViewMenu);

        // Append elements to the logo and heading container
        logoHeadingContainer.appendChild(headingLogo);
        logoHeadingContainer.appendChild(heading);

        // Append elements to the heading container
        headingContainer.appendChild(logoHeadingContainer);
        headingContainer.appendChild(tagline);

        // Append elements to the content element
        content.appendChild(headingContainer);
        content.appendChild(btnViewLocations);
        content.appendChild(btnViewMenu);
        content.appendChild(homeContainer);

        // Append elements to the page container
        homeContainer.appendChild(headingContainer);
        homeContainer.appendChild(btnViewLocations);
        homeContainer.appendChild(btnViewMenu);
        

        console.log("Home page loaded!");
    }

    loadHomePage() {
        // When this method is called, it calls the createHomePage method on the same instance of the class
        // 'this' refers to the instance of the class that the method is being called on
        document.title = "Fat Cat Cafe | Home";
        this.createHomePage();
    }

    // Add event listeners to menu and locations buttons
    addEventListeners() {
        const btnViewMenu = document.getElementById('btn-view-menu');
        const btnViewLocations = document.getElementById('btn-view-locations');

        btnViewMenu.addEventListener('click', () => {
            const menu = new Menu();
            menu.createMenu();
        });

        btnViewLocations.addEventListener('click', () => {
            const locations = new Locations();
            locations.createLocationsPage();
            locations.initialiseLocations();
            locations.updateLocations();
        });
    }
}