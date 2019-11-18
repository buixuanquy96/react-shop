import FeTa from '../images/fetaCheese.jpg'
import Meat from '../images/coldCuts.jpg'
import Vegetables from '../images/vegetables.jpg'

var initialState = [
    {
        id: 1,
        name: 'Iphone',
        image: FeTa,
        description: 'USA',
        price: 500,
        invertory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'SamSung',
        image: Meat,
        description: 'Korea',
        price: 400,
        invertory: 20,
        rating: 3
    },
    {
        id: 3,
        name: 'Xiaomi',
        image: Vegetables,
        description: 'China',
        price: 300,
        invertory: 30,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;