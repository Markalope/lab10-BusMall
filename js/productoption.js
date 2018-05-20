'use strict';
/* exported productOption */

const productData = window.localStorage.getItem('productOption');

window.onbeforeunload = () => {
    window.localStorage.setItem('productOption', JSON.stringify(productOption));
};

let productOption;

if(productData && productData !== 'undefined') {
    productOption = JSON.parse(productData);
}
else {

    productOption = [
        {
            id: 1,
            name: 'R2-D2 Roller Bag',
            image: 'img/bag.jpg',
            viewed: 2,
            votes: 7
        },
        {
            id: 2,
            name: 'Banana Slicer',
            image: 'img/banana.jpg',
            viewed: 8,
            votes: 3
        },
        {
            id: 3,
            name: 'Bathroom Tablet Stand',
            image: 'img/bathroom.jpg',
            viewed: 4,
            votes: 1
        },
        {
            id: 4,
            name: 'Open Toe Rain Boots',
            image: 'img/boots.jpg',
            viewed: 6,
            votes: 2
        },
        {
            id: 5,
            name: 'All-in-One Breakfast Center',
            image: 'img/breakfast.jpg',
            viewed: 8,
            votes: 2
        },
        {
            id: 6,
            name: 'Italian Meatball Bubble Gum',
            image: 'img/bubblegum.jpg',
            viewed: 8,
            votes: 2
        },
        {
            id: 7,
            name: 'Bubble Seat Chair',
            image: 'img/chair.jpg',
            viewed: 6,
            votes: 1
        },
        {
            id: 8,
            name: 'Raging Cthulhu Figure',
            image: 'img/cthulhu.jpg',
            viewed: 8,
            votes: 2
        },
        {
            id: 9,
            name: 'Dog Duckbill',
            image: 'img/dog-duck.jpg',
            viewed: 10,
            votes: 4
        },
        {
            id: 10,
            name: 'Dragon Meat',
            image: 'img/dragon.jpg',
            viewed: 6,
            votes: 1
        },
        {
            id: 11,
            name: 'Utensil Pen Caps',
            image: 'img/pen.jpg',
            viewed: 6,
            votes: 2
        },
        {
            id: 12,
            name: 'Pet Sweep',
            image: 'img/pet-sweep.jpg',
            viewed: 5,
            votes: 2
        },
        {
            id: 13,
            name: 'Pizza Scissors',
            image: 'img/scissors.jpg',
            viewed: 8,
            votes: 3
        },
        {
            id: 14,
            name: 'Shark Sleeping Bag',
            image: 'img/shark.jpg',
            viewed: 4,
            votes: 1
        },
        {
            id: 15,
            name: 'img/Baby Sweeper Onesie',
            image: 'sweep.jpg',
            viewed: 6,
            votes: 2
        },
        {
            id: 16,
            name: 'Tauntaun Sleeping Bag',
            image: 'img/tauntaun.jpg',
            viewed: 4,
            votes: 1
        },
        {
            id: 17,
            name: 'Unicorn Meat',
            image: 'img/unicorn.jpg',
            viewed: 8,
            votes: 3
        },
        {
            id: 18,
            name: 'USB Twitching Tentacle',
            image: 'img/usb.gif',
            viewed: 8,
            votes: 2
        },
        {
            id: 19,
            name: 'Impossible Watering Can',
            image: 'img/water-can.jpg',
            viewed: 6,
            votes: 2
        },
        {
            id: 20,
            name: 'Impossible Wine Glass',
            image: 'img/wine-glass.jpg',
            viewed: 8,
            votes: 1
        }
    ];
}