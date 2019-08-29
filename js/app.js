const storeName = 'Gucci';
document.title = `${storeName} Grocery Store`;
console.log('What is in document:', document.all[23]);
console.log(document.getElementsByTagName('p'));

let h1OfHeader = document.getElementById('mainIntro');
// console.log('H1 of Header:', h1OfHeader);
console.log('Header: ',h1OfHeader);
h1OfHeader.innerHTML = "WELCOME";

const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log('class', getAllNavListClasses);

const getIconCredit = document.querySelector("#iconsCredit");
console.log('This is the Icon Credit:', getIconCredit);


const testDifference = document.getElementById("iconsCredit");
console.log('This is the Icon Credit ID:', testDifference);

//if Multiple classes it will only return the first one
const example = document.querySelector('.nav_list_item');
console.log('I will only grab one even though there are multiple', example);

const getCLasses = document.getElementsByClassName('nav_list_item');
console.log('Getting all class Names:', getCLasses);


const imageExample = document.querySelector('img[alt="Cherry Icon"]');
console.log('ALT IS HERE:', imageExample);

const magicButton = document.querySelector('button');
console.log(magicButton);


magicButton.addEventListener('mouseover', ()=> {

// magicButton.classList.add = "myPoint";
    magicButton.className = "myPoint";
    magicButton.style.backgroundColor = '#000';
});


magicButton.addEventListener('mouseleave', ()=> {

    // magicButton.classList.add = "myPoint";
        magicButton.className = "";
     
    });




    const changeColor = document.querySelector('#content');

    changeColor.addEventListener('click', ()=>{

        changeColor.style.backgroundColor = '#000';


    })


