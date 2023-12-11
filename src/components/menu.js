const content = document.getElementById('content');

import './cafeMenuItems';

class Menu {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.updateMenu();
    }

    updateMenu() {
        // Clear existing items
        const menu = document.getElementById('menu-grid');
        menu.innerHTML = '';

        // Maybe a foreach loop here?
        // Create a menu box for each item in the items array above.
        this.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const title = document.createElement('h3');
            title.textContent = item.title;
            menuItem.appendChild(title);

            const desc = document.createElement('p');
            desc.textContent = item.desc;
            menuItem.appendChild(desc);

            const price = document.createElement('p');
            price.textContent = item.price;
            menuItem.appendChild(price);

            menu.appendChild(menuItem);
        });
    }

    // Method for creating the menu container.
    createMenu = () => {
        // Create elements
        const menu = document.createElement('div');
        const menuGrid = document.createElement('div');
        const menuItem = document.createElement('div');
        const menuItemImageContainer = document.createElement('div');
        const menuItemImage = document.createElement('img');
        const menuItemDesc = document.createElement('div');
        const menuItemDescTitle = document.createElement('h2');
        const menuItemDescPara = document.createElement('p');

        // Add classes & IDs
        menuGrid.id = 'menu-grid';

        menu.classList.add('page-container');
        menuItem.classList.add('menu-item');
        menuItemImageContainer.classList.add('menu-item-image');

        menuItemImage.src = '/src/assets/images/';

        content.appendChild(menu)
    }
}

// Create Menu instance
const menu = new Menu();
menu.createMenu();

// Create MenuItem instances
let donut = new MenuItem("Donut", "Donut is good!", 6.50);
let ringDonut = new MenuItem("Ring Donut", "Cute ring donut", 6.00);
let cookie = new MenuItem("Cookie", "Cookie is nice!", 4.00);
let coffee = new MenuItem("Coffee", "Nice hot, cat coffee!", 8.00);
let cupcake = new MenuItem("Cupcake", "Cake of cup", 6.50);
let hotChocolate = new MenuItem("Hot Chocolate", "Soothing hot chocolate with extra chocolate", 7.50);
let macaroon = new MenuItem("Macaroon", "Lovely macaroon with cute cats!", 4.50);
let pancakes = new MenuItem("Pancakes", "Succulent, fresh pancakes to brighten your day!", 11.00);
let pudding = new MenuItem("Pudding", "Soft, creamy custard pudding with rich double cream!", 10.50);
let burger = new MenuItem("Burger", "Succulent beef-free burger with a cat bun! Comes with a drink.", 10.00);
let christmasHotChoc = new MenuItem("Christmas Hot Chocolate", "Rich, creamy hot chocolate with cinnamon!", 8.50);

// Add items to the menu
menu.addItem(donut);
menu.addItem(ringDonut);
menu.addItem(cookie);
menu.addItem(coffee);
menu.addItem(cupcake);
menu.addItem(hotChocolate);
menu.addItem(macaroon);
menu.addItem(pancakes);
menu.addItem(pudding);
menu.addItem(burger);
menu.addItem(christmasHotChoc);
