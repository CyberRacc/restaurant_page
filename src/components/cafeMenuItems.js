class MenuItem {
    constructor(title, desc, price) {
        this.title = "Fat Cat" + title;
        this.desc = desc;
        this.price = "£" + price;
    }
}

const createMenuItems = () => {
    let donut = new MenuItem("Donut", "Donut is good!", 6.50);
    let ringDonut = new MenuItem("Ring Donut", "Cute ring donut", 6.00)
    let cookie = new MenuItem("Cookie", "Cookie is nice!", 4.00);
    let coffee = new MenuItem("Coffee", "Nice hot, cat coffee!", 8.00);
    let cupcake = new MenuItem("Cupcake", "Cake of cup", 6.50)
    let hotChocolate = new MenuItem("Hot Chocolate", "Soothing hot chocolate with extra chocolate", 7.50);
    let macaroon = new MenuItem("Macaroon", "Lovely macaroon with cute cats!", 4.50);
    let pancakes = new MenuItem("Pancakes", "Succulent, fresh pancakes to brighten your day!", 11.00);
    let pudding = new MenuItem("Pudding", "Soft, creamy custard pudding with rich double cream!", 10.50);
    let burger = new MenuItem("Burger", "Succulent beef-free burger with a cat bun! Comes with a drink.", 10.00);
    let christmasHotChoc = new MenuItem("Christmas Hot Chocolate", "Rich, creamy hot chocolate with cinnamon!", 8.50);
}