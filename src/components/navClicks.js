const content = document.getElementById('content');

export const enableNavClicks = () => {
    const navButtons = document.querySelectorAll('.nav-element');

    navButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            console.log(e);
            // Call page update to the relevant page.
        });
    });

}

