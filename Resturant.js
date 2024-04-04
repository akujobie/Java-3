const menu = [
    {
        id: 1,
        title: "Chicken Wings",
        category: "Breakfast",
        price: 7.99,
        description: `Our chicken wings are juicy and flavorful, perfect for any occasion. `,
        img: "/Workings/Javascript/Resturant Menu/Images/chicken wings.jpg",

    },
    {
        id: 2,
        title: "Burger",
        category: "Breakfast",
        price:  5.99,
        description: `A delicious and juicy burger topped with melted cheese, served with fresh ingredients. A classic favorite that never goes out of style.`,
        img: "/Workings/Javascript/Resturant Menu/Images/burger.jpg",
    },
    {
        id: 3,
        title:  "Sandwich",
        category: "Breakfast",
        price: 4.99,
        description: `Our sandwiches are a classic favorite, perfect for any time of the day.`,
        img: "/Workings/Javascript/Resturant Menu/Images/sandwich.jpg",
    },
    {
        id: 4,
        title: "Fried rice",
        category: "Lunch",
        price: 6.99,
        description:`Our flavorful fried rice is prepared with a delightful mix of vegetables and seasoned meats, served on a bed of fluffy, perfectly cooked rice.`,
        img: "/Workings/Javascript/Resturant Menu/Images/fried rice.jpg",
    },
    {
        id: 5,
        title: "Jollof rice",
        category: "Lunch",
        price: 8.99,
        description: `Our spicy jollof  rice made from scratch with fresh ingredients served with fresh vegetables on the side.`,
        img: "/Workings/Javascript/Resturant Menu/Images/jollof rice.jpg",
    },
    {
        id: 6,
        title: "Sea-food Okro soup",
        category:"Dinner",
        price: 10.99,
        description:`A bowl of our delicious  sea-food okro soup`,
        img: "/Workings/Javascript/Resturant Menu/Images/okro.jpg",
    },
    {
        id: 7,
        title: "Egusi soup",
        category: "Dinner",
        price: 12.99,
        description: `One of the best egusi soups you'll ever taste`,
        img: "/Workings/Javascript/Resturant Menu/Images/egusi soup.jpg",
    },
    {
        id: 8,
        title: "Goat-meat pepper soup",
        category: "Dinner",
        price: 13.99,
        description: `This is one of our most  popular dishes`,
        img: "/Workings/Javascript/Resturant Menu/Images/goat meat pepper soup.jpg",
    },
    {
        id: 9,
        title: "Ugba",
        category: "Native",
        price: 13.99,
        description: `This is one of our popular native dishes`,
        img: "/Workings/Javascript/Resturant Menu/Images/Ugba.jpg ",
    },
    {
        id: 10,
        title: "Isi ewu",
        category: "Native",
        price: 13.99,
        description: `This is one of our most popular native dishes`,
        img: "/Workings/Javascript/Resturant Menu/Images/Isi ewu.jpg",
    },
];

// Function to generate menu items HTML string

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener( "DOMContentLoaded", function() {
 displayMenuItems(menu);
});
// filter items
filterBtns.forEach(function(btn){
btn.addEventListener( "click" , function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
        return menuItem;
        };
    });
    if(category === 'All' ) {
        displayMenuItems(menu)
    } else{
        displayMenuItems(menuCategory);
    };
});
});
// Filtering the menu by categories
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){ 

        return `<article class="menu-item border border-1 col-5 row ">
        <img src="${item.img}" class ="photo col-6" alt=${item.title} />
        <div class="item-info col">
            <header class="d-flex justify-content-between">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.description}
            </p>
        </div>
        </article>`;
        });
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;
};