
const productsArray = [
    {
        id: "price_1Mqhv3IqV8JHGIHu4NXBgzSL",
        title: "Peanut Butter Biscuits",
        price: "8.99",
        description: "Crunchy Treats with All Natural Peanut Butter!"
    },
    {
        id: "price_1MqhubIqV8JHGIHukoEB7mPp",
        title: "Banana Biscuits",
        price: "8.99",
        description: "Crunchy treats with the delicious taste of ripe bananas!"
    },
    {
        id: "price_1MrOePIqV8JHGIHuoKnknyof",
        title: "Pork Treat",
        price: "12.99",
        description: "Chewy nibbles made with pasture raised pork!"

    },
    {
        id: "price_1MrOgIIqV8JHGIHuyBKXbNMu",
        title: "Apple Pupcakes",
        price: "16.99",
        description: "Our pupcakes are baked with love and apples, topped with a cream cheese icing!"
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id )
    if (productData === undefined) {
        console.log("product data does not exist" + id);
        return undefined;
    }
    return productData;
}


export { productsArray, getProductData} ;