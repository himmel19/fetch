

let users = document.querySelector('.users');

async function getUsers() {
    try {
        let res = await fetch('https://dummyjson.com/products');
        let products = await res.json();
        products.products.forEach((el) => { 
            let item = document.createElement('div');
            item.classList.add('item');
            let title = document.createElement('h2');
            let description = document.createElement('p'); 
            let price = document.createElement('p'); 
            let image = document.createElement('img'); 
            
            title.textContent = `Название: ${el.title}`; 
            description.textContent = `Описание: ${el.description}`; 
            price.textContent = `Цена: ${el.price}`; 
            
            
            if (el.images && el.images.length > 0) {
                image.src = el.images[0]; 
            } else {
                image.src = 'default-image-url.jpg'; 
            }
            
            image.alt = el.title; 
            item.append(title, description, price, image); 
            users.append(item);
        });
    } catch (error) {
        console.log('Ошибка при получении данных');
    }
}
window.addEventListener('DOMContentLoaded', () => getUsers());

