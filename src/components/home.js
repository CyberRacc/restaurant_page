export default class Home {
    
    // This method creates the home page content
    createHomePage() {
        console.log("Loading home page...");

        // Get the content element
        const content = document.getElementById(`content`);

        // Create the page container
        const homeContainer = document.createElement('div');
        homeContainer.id = 'home-container';

        // Create the heading container
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('heading-container');

        // Create the heading logo
        const headingLogo = document.createElement('img');
        headingLogo.src = '/src/assets/images/fat_cat_logo.png';
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

        // Append elements to the heading container
        headingContainer.appendChild(headingLogo);
        headingContainer.appendChild(heading);

        // Append elements to the content element
        content.appendChild(headingContainer);
        content.appendChild(tagline);
        content.appendChild(btnViewLocations);
        content.appendChild(btnViewMenu);
        content.appendChild(homeContainer);

        // Append elements to the heading container
        headingContainer.appendChild(headingLogo);
        headingContainer.appendChild(heading);
        headingContainer.appendChild(tagline);

        // Append elements to the page container
        homeContainer.appendChild(headingContainer);
        homeContainer.appendChild(btnViewLocations);
        homeContainer.appendChild(btnViewMenu);
        

        console.log("Home page loaded!");
    }

    // This is a method within your class
    loadHomePage() {
        // When this method is called, it calls the createHomePage method on the same instance of the class
        // 'this' refers to the instance of the class that the method is being called on
        this.createHomePage();
    }


}