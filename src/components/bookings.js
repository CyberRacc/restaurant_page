content = document.getElementById('content');

export class Bookings {

    createBookingPage() {
        const bookingsPage = document.createElement('div');
        bookingsPage.id = 'bookings-page';
        bookingsPage.classList.add('page');

        const bookingsTitle = document.createElement('h1');
        bookingsTitle.id = 'bookings-title';
        bookingsTitle.textContent = 'Bookings';

        bookingsPage.appendChild(bookingsTitle);
        content.appendChild(bookingsPage);
    }
}