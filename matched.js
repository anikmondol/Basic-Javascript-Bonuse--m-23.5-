const numbers = [45, 55, 74, 11, 31, 22];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const number of numbers){
//     console.log(number);
// }


const products = [
    { id: 1, name: 'xiami Phone one night', price: 19000 },
    { id: 1, name: 'iphone', price: 19000 },
    { id: 1, name: 'mac book air', price: 19000 },
    { id: 1, name: 'lenovo yoga laptop', price: 19000 },
    { id: 1, name: 'Dell inspiron Laptop', price: 19000 },
    { id: 1, name: 'Nokia old age phone gone', price: 19000 },
    { id: 1, name: 'xiami Phone one night', price: 19000 },
    { id: 1, name: 'walton phone one night', price: 19000 },
    { id: 1, name: 'walton laptop', price: 19000 }

]


// for(const product of products){
//     console.log(product);
// }

// -------------------------------------

// function matchedProducts(products, search){
//     const list = [];
//     for(let product of products){
//         if(product.name.toLowerCase().includes(search.toLowerCase())){
//             list.push(product)
//         }
//     }
//     return list;
// }

// const result = matchedProducts(products, 'Phone');
// console.log(result);

// -------------------------------------


// function matchedProducts(products, search){
//     const list = [];
//     for(const product of products){
//         if(product.name.toLowerCase().includes(search.toLowerCase())){
//             list.push(product);
//         }
//     }
//     return list;
// }


// const result = matchedProducts(products, 'laptop');

// console.log(result);