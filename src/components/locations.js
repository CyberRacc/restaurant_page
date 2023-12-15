import locationsList from "./locationStorage";

export default class Locations {
    constructor() {
        this.locations = [];
    }
    content = document.getElementById('content');

    // Add location to array
    addLocationToArray(location) {
        this.locations.push(location);
    }

    // Initialise locations
    initialiseLocations() {
        this.locations = []; // Clear the locations array

        console.log("Initialising locations...");
        
        // Locations Australia
        this.addLocationToArray(new locationsList("Australia", "Melbourne", "123 Fake Street", "123456789", "melbourne@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Australia", "Sydney", "123 Fake Street", "123456789", "sydney@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Australia", "Perth", "123 Fake Street", "123456789", "perth@fatcatcafe.com", "9am - 6pm"));

        // Locations Canada
        this.addLocationToArray(new locationsList("Canada", "Toronto", "123 Fake Street", "123456789", "toronto@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Canada", "Vancouver", "123 Fake Street", "123456789", "vancouver@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Canada", "Montreal", "123 Fake Street", "123456789", "montreal@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Canada", "Calgary", "123 Fake Street", "123456789", "calgary@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("Canada", "Ottawa", "123 Fake Street", "123456789", "ottawa@fatcatcafe.com", "9am - 6pm"));

        // Locations USA
        this.addLocationToArray(new locationsList("USA", "New York", "123 Fake Street", "123456789", "newyork@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("USA", "Los Angeles", "123 Fake Street", "123456789", "losangeles@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("USA", "Chicago", "123 Fake Street", "123456789", "chicago@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("USA", "San Francisco", "123 Fake Street", "123456789", "sanfrancisco@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("USA", "Seattle", "123 Fake Street", "123456789", "seattle@fatcatcafe.com", "9am - 6pm"));

        // Locations UK
        this.addLocationToArray(new locationsList("UK", "London", "123 Fake Street", "123456789", "london@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("UK", "Manchester", "123 Fake Street", "123456789", "manchester@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("UK", "Birmingham", "123 Fake Street", "123456789", "birmingham@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("UK", "Glasgow", "123 Fake Street", "123456789", "glasgow@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("UK", "Edinburgh", "123 Fake Street", "123456789", "edinburgh@fatcatcafe.com", "9am - 6pm"));
        this.addLocationToArray(new locationsList("UK", "Cardiff", "123 Fake Street", "123456789", "cardiff@fatcatcafe.com", "9am - 6pm"));

        console.table(this.locations);
        console.log("Locations initialised.");
    }

    createLocationsPage() {

        console.log("Loading locations page...");

        // Clear the content element
        this.content.innerHTML = '';

        // Create elements
        const locationsContainer = document.createElement('div');
        
        // Add classes & IDs
        locationsContainer.id = 'locations-container';

        // Append elements
        this.content.appendChild(locationsContainer);
        this.initialiseLocations();
    }

    updateLocations() {
        console.log("Updating locations...");

        const locationsContainer = document.getElementById('locations-container');
        locationsContainer.innerHTML = '';

        // Create a location card for each location in the locations array above.
        this.locations.forEach(location => {        
            // Create elements
            const locationCard = document.createElement('div');
            const locationName = document.createElement('h2');
            const locationAddress = document.createElement('p');
            const locationPhone = document.createElement('p');
            const locationEmail = document.createElement('p');
            const locationHours = document.createElement('p');

            // Add classes
            locationCard.classList.add('location-card');

            // Append elements
            locationsContainer.appendChild(locationCard);
            locationCard.appendChild(locationName);
            locationCard.appendChild(locationAddress);
            locationCard.appendChild(locationPhone);
            locationCard.appendChild(locationEmail);
            locationCard.appendChild(locationHours);

            // Set content
            locationName.textContent = `Location: ${location.name}`;
            locationAddress.textContent = `Address: ${location.address}`;
            locationPhone.textContent = `Phone: ${location.phone}`;
            locationEmail.textContent = `Email: ${location.email}`;
            locationHours.textContent = `Hours: ${location.hours}`;
        });
    }


}