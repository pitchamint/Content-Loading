const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price =document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text')

setTimeout(showContent,2000);

function showContent(){
    header.innerHTML = `
        <img src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__480.jpg" alt="">
    `;
    title.innerHTML = `Sofa`;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet?`;

    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/73.jpg" alt="">`;
    seller_name.innerHTML = `Jenny`;
    price.innerHTML = `price : 20,000฿`;

    animated_bg.forEach(el=>el.classList.remove('animated_bg'));
    animated_text.forEach(el=>el.classList.remove('animated_text'));
}