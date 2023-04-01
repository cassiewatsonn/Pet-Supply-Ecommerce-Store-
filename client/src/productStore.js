//Product array for ProductCard.js 
const productsArray = [
    {
        id: "price_1Mqhv3IqV8JHGIHu4NXBgzSL",
        title: "Peanut Butter Biscuits",
        price: "8.99",
        description: "Crunchy treats with all natural Peanut Butter!",
        image: "images/pb-biscuits.jpg"
    },
  
    {
        id: "price_1MrtN6IqV8JHGIHugl1qjK15",
        title: "All In One",
        price: "10.99",
        description: "An assortment of all our dog biscuits in one bag!",
        image: "images/all-in-one.jpg"
    },
    {
        id: "price_1MqhubIqV8JHGIHukoEB7mPp",
        title: "Banana Biscuits",
        price: "8.99",
        description: "Crunchy treats with the delicious taste of bananas!",
        image: "images/banana.jpg"
    },
    {
        id: "price_1MrtR5IqV8JHGIHu2pw2ANUU",
        title: "Chicken & Beef Bones",
        price: "10.99",
        description: "Bone shaped treats flavoured with real chicken & beef.  Sure to be a favourite!",
        image: "images/chicken-beef.jpg"
    },
    {
        id: "price_1MrOePIqV8JHGIHuoKnknyof",
        title: "Pumpkin Treats",
        price: "12.99",
        description: "Pumpkin flavoured bones drizzled with orange & white pumpkin icing!",
        image: "images/pumpkin.jpg"
    },
    {
        id: "price_1MrtVdIqV8JHGIHuSPRUatfi",
        title: "Cheese Bones",
        price: "9.99",
        description: "Bone shaped biscuits with real Canadian cheddar cheese baked in!",
        image: "images/cheesebones.jpg"
    },
    {
        id: "price_1MrtAGIqV8JHGIHu8OmGxeBu",
        title: "Raspberry Lollipup",
        price: "6.99",
        description: "A raspberry lollipup swirled with vanilla yogurt to make a sweet, crunchy treat for your pup!",
        image: "images/lollipup.jpg"
    },
    {
        id: "price_1MrtFLIqV8JHGIHux0m7LTcP",
        title: "Peanut Butter Pupcakes",
        price: "19.99",
        description: "Six of our peanut butter cupcakes topped with one of our peanut butter biscuits in a matching icing!",
        image: "images/peanutbutter-pupcake.jpg"
    },
    {
        id: "price_1MrOgIIqV8JHGIHuyBKXbNMu",
        title: "Raspberry Pupcakes",
        price: "19.99",
        description: "Six of our pupcakes are baked with love and raspberry, topped with a raspberry cream cheese icing!",
        image: "images/raspberry-pupcake.jpg"
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if (productData === undefined) {
        console.log("product data does not exist" + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };