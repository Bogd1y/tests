const shops = [
    {
        name: 'McDon',
        id: 1,
        products: [
            {
                productName: 'Burger',
                id: 1,
                price: 10,
                image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg'
            },
            {
                productName: 'BigBurger',
                id: 2,
                price: 20,
                image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg'
            },
            {
                productName: 'VeryBigBigBurger',
                id: 3,
                price: 30,
                image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg'
            },
            {
                productName: 'VeryBigBigBurger',
                id: 4,
                price: 30,
                image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg'
            }
        ]
            
        
    },
    {
        name: 'KKF',
        id: 2,
        products: [
            {
                productName: 'Chicken',
                id: 5,
                price: 100,
                image: 'https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-chiken-%D0%B8%D0%B4%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-195588706.jpg'
            },
            {
                productName: 'BigChicken',
                id: 6,
                price: 200,
                image: 'https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-chiken-%D0%B8%D0%B4%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-195588706.jpg'
            },
            {
                productName: 'VeryBigBigChicken',
                id: 7,
                price: 300,
                image: 'https://preview.redd.it/2y0u6hj3cle61.png?auto=webp&s=9e60a802aa0af06cc636faf0da97a00f2c4b299a'
            },
            {
                productName: 'VeryBigBigChicken',
                id: 8,
                price: 300,
                image: 'https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-chiken-%D0%B8%D0%B4%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-195588706.jpg'
            }
        ]
    },
    {
        name: 'FruitJ',
        id: 3,
        products: [
            {
                productName: 'Apple',
                id: 9,
                price: 5,
                image: 'https://i.kym-cdn.com/entries/icons/original/000/038/071/wapple_hd.jpg'
            },
            {
                productName: 'Banana',
                id: 10,
                price: 10,
                image: 'https://uploads.dailydot.com/430/21/bananaduck.jpg?auto=compress&fm=pjpg'
            },
            {
                productName: 'Orange',
                id: 11,
                price: 15,
                image: 'https://yt3.ggpht.com/scREhVzSvBFaXhNCDCSLNS04F4ykuizVDrKnqojjmhyJCAvoPZRXdvJi4NDOgm81NJWKUa5WbA=s900-c-k-c0x00ffffff-no-rj'
            },
            {
                productName: 'Avocado',
                id: 12,
                price: 20,
                image: 'https://solidstarts.com/wp-content/uploads/introducing-avocado-to-babies.jpg'
            },
        ]
    }
]

let arr = shops.map(i => i.products)
export const allProducts = []
for (let i = 0; i < arr.length; i++) {
    allProducts.push(...arr[i])
}


export default shops