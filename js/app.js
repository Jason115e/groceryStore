const storeName = 'Jacque\'s';
document.title = `${storeName} Grocery Store`;

const NAV_LIST = [
<<<<<<< HEAD

{

name: 'name',
link: 'index.html'

}



]
=======
    {
        name: 'home',
        link: 'index.html'
    },
    //Make two more
    {
        name: 'about',
        link: 'about.html'
    },
    {
        name: 'contact',
        link: 'contact.html'
    }
];
//grab nav 
const nav = document.querySelector('nav > ul');
//now to loop through nav list and append to nav, lets try it out:
NAV_LIST.forEach( function (list)  {
    let li = document.createElement('li');
    li.className = 'nav_link';
    let anchor = document.createElement('a');
    anchor.setAttribute('href', list.link);
    anchor.innerHTML = list.name;
    li.appendChild(anchor);
    nav.append(li);
});


>>>>>>> 647593b41b63fdc295ea9b2227025bb6d9057b2c
