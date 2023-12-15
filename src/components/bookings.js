export default class Bookings {

    content = document.getElementById('content');

    createBookingPage() {
        // Create elements
        const bookingsPage = document.createElement('div');
        const bookingsTitle = document.createElement('h1');
        const bookTableButton = document.createElement('button');
        const bookingFormDialog = document.createElement('dialog');
        const bookingForm = document.createElement('form');
        const bookingName = document.createElement('input');
        const bookingEmail = document.createElement('input');
        const bookingDate = document.createElement('input');
        const bookingTime = document.createElement('input');
        const bookingSubmit = document.createElement('input');
        const bookingCancel = document.createElement('button');

        // Set attributes
        bookingsPage.id = 'bookings-page';
        bookingsPage.classList.add('page');
        bookingsTitle.id = 'bookings-title';
        bookingsTitle.textContent = 'Bookings';
        bookTableButton.id = 'book-table-button';
        bookTableButton.textContent = 'Book a Table';
        bookingFormDialog.id = 'booking-form-dialog';
        bookingForm.id = 'booking-form';
        bookingName.id = 'booking-name';
        bookingName.type = 'text';
        bookingName.placeholder = 'Name';
        bookingName.required = true;
        bookingName.pattern = '[\\p{L} ]+';
        bookingName.title = "Please enter only letters and spaces.";
        bookingEmail.id = 'booking-email';
        bookingEmail.type = 'email';
        bookingEmail.placeholder = 'Email';
        bookingEmail.required = true;
        bookingEmail.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}';
        bookingDate.id = 'booking-date';
        bookingDate.type = 'date';
        bookingDate.required = true;
        bookingDate.min = new Date().toISOString().split('T')[0];
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 1);
        bookingDate.max = maxDate.toISOString().split('T')[0];
        bookingTime.id = 'booking-time';
        bookingTime.type = 'time';
        bookingTime.required = true;
        bookingTime.min = '09:00';
        bookingTime.max = '22:00';
        bookingSubmit.id = 'booking-submit';
        bookingSubmit.type = 'submit';
        bookingSubmit.value = 'Book';
        bookingCancel.id = 'booking-cancel';

        // Create labels
        const bookingNameLabel = document.createElement('label');
        bookingNameLabel.textContent = 'Name';
        bookingNameLabel.htmlFor = 'booking-name';
        const bookingEmailLabel = document.createElement('label');
        bookingEmailLabel.textContent = 'Email';
        bookingEmailLabel.htmlFor = 'booking-email';
        const bookingDateLabel = document.createElement('label');
        bookingDateLabel.textContent = 'Date';
        bookingDateLabel.htmlFor = 'booking-date';
        const bookingTimeLabel = document.createElement('label');
        bookingTimeLabel.textContent = 'Time';
        bookingTimeLabel.htmlFor = 'booking-time';
        bookingCancel.textContent = 'Cancel';

        // Append elements
        bookingsPage.appendChild(bookingsTitle);
        bookingsPage.appendChild(bookTableButton);
        bookingsPage.appendChild(bookingFormDialog);
        bookingFormDialog.appendChild(bookingForm);
        bookingForm.appendChild(bookingNameLabel);
        bookingForm.appendChild(bookingName);
        bookingForm.appendChild(bookingEmailLabel);
        bookingForm.appendChild(bookingEmail);
        bookingForm.appendChild(bookingDateLabel);
        bookingForm.appendChild(bookingDate);
        bookingForm.appendChild(bookingTimeLabel);
        bookingForm.appendChild(bookingTime);
        bookingForm.appendChild(bookingSubmit);
        content.appendChild(bookingsPage);
        bookingForm.appendChild(bookingCancel);

        // Open booking form dialog on button click
        bookTableButton.addEventListener('click', () => {
            bookingFormDialog.showModal();
        });

        // Close booking form dialog on form submission
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createBooking();
            bookingFormDialog.close();
        });

        // Close booking form dialog on cancel button click
        bookingCancel.addEventListener('click', () => {
            bookingFormDialog.close();

            // Clear form
            bookingName.value = '';
            bookingEmail.value = '';
            bookingDate.value = '';
            bookingTime.value = '';
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