export const loadHomePage = () => {
    
    console.log("Loading home page...");

    const content = document.getElementById(`content`);

    const heading = document.createElement('h1');
    heading.textContent = 'Fat Cat Cafe'

    const headingLogo = document.createElement('img');
    headingLogo.src = './fat_cat_logo.png';
    headingLogo.alt = 'logo of a large round cat with text saying fat cat';

    const tagline = document.createElement('p');
    tagline.textContent = 'Welcome to Fat Cat! Wanna stuff your face with great food? Visit one of our locations.'

    const btnViewLocations = document.createElement('button');
    btnViewLocations.textContent = 'View Locations';
    btnViewLocations.id = 'btn-view-locations'

    const btnViewMenu = document.createElement('button');
    btnViewMenu.textContent = 'View menu';
    btnViewMenu.id = 'btn-view-locations'

    content.appendChild(heading);
    content.appendChild(headingLogo);
    content.appendChild(tagline);
    content.appendChild(btnViewLocations);
    content.appendChild(btnViewMenu);

    console.log("Home page loaded!")
};
