
//Select landing-page element
let landingPage = document.querySelector('.landing-page')


//create array of landing imags
let imageArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg' , '06.jpg']

setInterval(()=>{
    //get random index from array
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    
    //set background image of landing page to random image
    landingPage.style.backgroundImage = `url('images/${imageArray[randomIndex]}')`;
}, 10000);

