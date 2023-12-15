import MenuItem from './cafeMenuItems.js';

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
        this.addItemToArray(new MenuItem("Donut", "Donut is good!", 6.50, '/src/assets/images/fat_cat_donut.png'));
        this.addItemToArray(new MenuItem("Ring Donut", "Cute ring donut", 6.00, '/src/assets/images/fat_cat_ring_donut.png'));
        this.addItemToArray(new MenuItem("Cookie", "Cookie is nice!", 4.00, '/src/assets/images/fat_cat_cookie.png'));
        this.addItemToArray(new MenuItem("Coffee", "Nice hot, cat coffee!", 8.00, '/src/assets/images/fat_cat_coffee.png'));
        this.addItemToArray(new MenuItem("Cupcake", "Cake of cup", 6.50, '/src/assets/images/fat_cat_cupcake.png'));
        this.addItemToArray(new MenuItem("Hot Chocolate", "Soothing hot chocolate with extra chocolate", 7.50, '/src/assets/images/fat_cat_hot_chocolate.png'));
        this.addItemToArray(new MenuItem("Macaroon", "Lovely macaroon with cute cats!", 4.50, '/src/assets/images/fat_cat_macaroon.png'));
        this.addItemToArray(new MenuItem("Pancakes", "Succulent, fresh pancakes to brighten your day!", 11.00, '/src/assets/images/fat_cat_pancakes.png'));
        this.addItemToArray(new MenuItem("Pudding", "Soft, creamy custard pudding with rich double cream!", 10.50, '/src/assets/images/fat_cat_pudding.png'));
        this.addItemToArray(new MenuItem("Burger", "Succulent beef-free burger with a cat bun! Comes with a drink.", 10.00, '/src/assets/images/fat_cat_burger.png'));
        this.addItemToArray(new MenuItem("Christmas Hot Chocolate", "Rich, creamy hot chocolate with cinnamon!", 8.50, '/src/assets/images/fat_cat_christmas_hot_chocolate.png'));
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
            const itemDescContainer = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const desc = document.createElement('p');
            const price = document.createElement('p');

            // Add classes
            menuItem.classList.add('menu-item');
            itemDescContainer.classList.add('menu-item-desc');

            // Append elements
            menuItem.appendChild(image);
            menuItem.appendChild(itemDescContainer);
            itemDescContainer.appendChild(title);
            itemDescContainer.appendChild(desc);
            itemDescContainer.appendChild(price);
            menu.appendChild(menuItem);

            // Set content
            image.src = item.imgSrc;
            title.textContent = item.title;
            desc.textContent = item.desc;
            price.textContent = item.price.toString();
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