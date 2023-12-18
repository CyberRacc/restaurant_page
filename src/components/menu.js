import MenuItem from './cafeMenuItems.js';
import donutImage from '../assets/images/fat_cat_donut.png';
import ringDonutImage from '../assets/images/fat_cat_ring_donut.png';
import cookieImage from '../assets/images/fat_cat_cookie.png';
import coffeeImage from '../assets/images/fat_cat_coffee.png';
import cupcakeImage from '../assets/images/fat_cat_cupcake.png';
import hotChocolateImage from '../assets/images/fat_cat_hot_chocolate.png';
import macaroonImage from '../assets/images/fat_cat_macaroon.png';
import pancakesImage from '../assets/images/fat_cat_pancakes.png';
import puddingImage from '../assets/images/fat_cat_pudding.png';
import burgerImage from '../assets/images/fat_cat_burger.png';
import christmasHotChocolateImage from '../assets/images/fat_cat_christmas_hot_chocolate.png';

export default class Menu {
    constructor() {
        this.items = [];
    }

    content = document.getElementById('content');

    addItemToArray(item) {
        this.items.push(item);
    }

    initialiseItems() {
        this.items = []; // Clear the items array
        this.addItemToArray(new MenuItem("Donut", "Donut is good!", 6.50, donutImage));
        this.addItemToArray(new MenuItem("Ring Donut", "Cute ring donut", 6.00, ringDonutImage));
        this.addItemToArray(new MenuItem("Cookie", "Cookie is nice!", 4.00, cookieImage));
        this.addItemToArray(new MenuItem("Coffee", "Nice hot, cat coffee!", 8.00, coffeeImage));
        this.addItemToArray(new MenuItem("Cupcake", "Cake of cup", 6.50, cupcakeImage));
        this.addItemToArray(new MenuItem("Hot Chocolate", "Soothing hot chocolate with extra chocolate", 7.50, hotChocolateImage));
        this.addItemToArray(new MenuItem("Macaroon", "Lovely macaroon with cute cats!", 4.50, macaroonImage));
        this.addItemToArray(new MenuItem("Pancakes", "Succulent, fresh pancakes to brighten your day!", 11.00, pancakesImage));
        this.addItemToArray(new MenuItem("Pudding", "Soft, creamy custard pudding with rich double cream!", 10.50, puddingImage));
        this.addItemToArray(new MenuItem("Burger", "Succulent beef-free burger with a cat bun! Comes with a drink.", 10.00, burgerImage));
        this.addItemToArray(new MenuItem("Christmas Hot Chocolate", "Rich, creamy hot chocolate with cinnamon!", 8.50, christmasHotChocolateImage));
    }

    updateMenu() {
        console.log("Updating menu...");
        // Clear existing items
        const menu = document.getElementById('menu-grid');
        console.table(this.items)

        // Create a menu box for each item in the items array above.
        this.items.forEach(item => {        
            // Create elements
            const menuItem = document.createElement('div');
            const imageContainer = document.createElement('div');
            const itemDescContainer = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const price = document.createElement('p');

            // Add classes
            menuItem.classList.add('menu-item');
            imageContainer.classList.add('image-container');
            itemDescContainer.classList.add('menu-item-desc');
            price.classList.add('price-display');

            // Append elements
            menuItem.appendChild(imageContainer);
            menuItem.appendChild(itemDescContainer);
            imageContainer.appendChild(image);
            itemDescContainer.appendChild(title);
            itemDescContainer.appendChild(price);
            menu.appendChild(menuItem);

            // Set content
            image.src = item.imgSrc;
            title.textContent = item.title;
            price.textContent = `£${item.price.toFixed(2)}`;
        });
    }

    // Method for creating the menu container.
    createMenu = () => {
        console.log("Creating menu...");
        // Create elements
        const menu = document.createElement('div');
        const menuGrid = document.createElement('div');

        // Add classes & IDs
        menuGrid.id = 'menu-grid';
        menu.classList.add('page-container');

        // Append elements
        content.appendChild(menu)
        menu.appendChild(menuGrid);
    }
}