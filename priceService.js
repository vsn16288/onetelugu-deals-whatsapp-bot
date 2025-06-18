function getPrices(productName) {
    const encodedName = encodeURIComponent(productName.toLowerCase());
    return [
        {
            platform: 'Amazon',
            price: 68999,
            link: `https://www.amazon.in/s?k=${encodedName}&tag=${process.env.AMAZON_TAG}`
        },
        {
            platform: 'Flipkart',
            price: 67499,
            link: `https://www.flipkart.com/search?q=${encodedName}&affid=${process.env.FLIPKART_ID}`
        }
    ];
}

module.exports = { getPrices };
