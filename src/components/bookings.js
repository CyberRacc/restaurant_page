export default class Bookings {

    content = document.getElementById('content');

    createBookingPage() {
        const bookingsPage = document.createElement('div');
        bookingsPage.id = 'bookings-page';
        bookingsPage.classList.add('page');

        const bookingsTitle = document.createElement('h1');
        bookingsTitle.id = 'bookings-title';
        bookingsTitle.textContent = 'Bookings';

        bookingsPage.appendChild(bookingsTitle);
        content.appendChild(bookingsPage);

        // Create booking form
        const bookingForm = document.createElement('form');
        bookingForm.id = 'booking-form';
        bookingsPage.appendChild(bookingForm);

        // Create booking form fields
        const bookingName = document.createElement('input');
        bookingName.id = 'booking-name';
        bookingName.type = 'text';
        bookingName.placeholder = 'Name';
        bookingName.required = true;
        bookingForm.appendChild(bookingName);

        const bookingEmail = document.createElement('input');
        bookingEmail.id = 'booking-email';
        bookingEmail.type = 'email';    
        bookingEmail.placeholder = 'Email';
        bookingEmail.required = true;
        bookingEmail.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}';
        bookingForm.appendChild(bookingEmail);

        console.log(bookingEmail.pattern) // TODO: Fix email validation

        const bookingDate = document.createElement('input');
        bookingDate.id = 'booking-date';
        bookingDate.type = 'date';
        bookingDate.required = true;
        bookingDate.min = new Date().toISOString().split('T')[0]; // Set minimum date to current date
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 1); // Add 1 month to current date
        bookingDate.max = maxDate.toISOString().split('T')[0]; // Set maximum date to 1 month from current date
        bookingForm.appendChild(bookingDate);

        const bookingTime = document.createElement('input');
        bookingTime.id = 'booking-time';
        bookingTime.type = 'time';
        bookingTime.required = true;
        bookingTime.min = '09:00'; // Set minimum time to 9am
        bookingTime.max = '22:00'; // Set maximum time to 10pm
        bookingForm.appendChild(bookingTime);

        const bookingSubmit = document.createElement('input');
        bookingSubmit.id = 'booking-submit';
        bookingSubmit.type = 'submit';
        bookingSubmit.value = 'Book';
        bookingForm.appendChild(bookingSubmit);

        // Create booking form event listener
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createBooking();
        });
    }

    createBooking() {
        const bookingName = document.getElementById('booking-name').value;
        const bookingEmail = document.getElementById('booking-email').value;
        const bookingDate = document.getElementById('booking-date').value;
        const bookingTime = document.getElementById('booking-time').value;

        const booking = {
            name: bookingName,
            email: bookingEmail,
            date: bookingDate,
            time: bookingTime
        }

        console.log(booking);

        this.createBookingCard(booking);
    }

    createBookingCard(booking) {
        const bookingsPage = document.getElementById('bookings-page');

        const bookingCard = document.createElement('div');
        bookingCard.classList.add('booking-card');

        const bookingName = document.createElement('h2');
        bookingName.textContent = booking.name;

        const bookingEmail = document.createElement('p');
        bookingEmail.textContent = booking.email;

        const bookingDate = document.createElement('p');
        bookingDate.textContent = booking.date;

        const bookingTime = document.createElement('p');
        bookingTime.textContent = booking.time;

        bookingCard.appendChild(bookingName);
        bookingCard.appendChild(bookingEmail);
        bookingCard.appendChild(bookingDate);
        bookingCard.appendChild(bookingTime);

        bookingsPage.appendChild(bookingCard);
    }

    updateBookings() {
        console.log("Updating bookings...");
    }

    // Method for creating the bookings container.
    createBookings = () => {
        console.log("Creating bookings...");
        // Create elements
        const bookings = document.createElement('div');
        const bookingsTitle = document.createElement('h1');
        const bookingsGrid = document.createElement('div');
        const bookingCard = document.createElement('div');
        const bookingCardName = document.createElement('h2');
        const bookingCardEmail = document.createElement('p');
        const bookingCardDate = document.createElement('p');
        const bookingCardTime = document.createElement('p');

        // Add classes & IDs
        bookings.id = 'bookings';
        bookingsTitle.id = 'bookings-title';
        bookingsGrid.id = 'bookings-grid';
        bookingCard.classList.add('booking-card');

        // Append elements
        content.appendChild(bookings);
        bookings.appendChild(bookingsTitle);
        bookings.appendChild(bookingsGrid);
        bookingsGrid.appendChild(bookingCard);
        bookingCard.appendChild(bookingCardName);
        bookingCard.appendChild(bookingCardEmail);
        bookingCard.appendChild(bookingCardDate);
        bookingCard.appendChild(bookingCardTime);
    }

    // Create booking confirmation page
    createBookingConfirmation = () => {
        console.log("Creating booking confirmation...");
        // Create elements
        const bookingConfirmation = document.createElement('div');
        const bookingConfirmationTitle = document.createElement('h1');
        const bookingConfirmationMessage = document.createElement('p');

        // Add classes & IDs
        bookingConfirmation.id = 'booking-confirmation';
        bookingConfirmationTitle.id = 'booking-confirmation-title';

        // Append elements
        content.appendChild(bookingConfirmation);
        bookingConfirmation.appendChild(bookingConfirmationTitle);
        bookingConfirmation.appendChild(bookingConfirmationMessage);

        // Set text content
        bookingConfirmationTitle.textContent = 'Booking Confirmation';
        bookingConfirmationMessage.textContent = 'Your booking has been confirmed!';
    }
}