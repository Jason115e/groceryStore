/* 
* TODO:
* [√] - Create a Schema; an Object with defined properties and types of what will be needed for each inventory item. REF: inventorySchema
* [√] - Create a few methods that can help with values based on data given. REF: discount, discountPrice
* [√] - Create a prototype (a copy from origin) that is based off the Inventory schema that way I can reuse it to make more than one produce. REF: addProduce
* [√] - Create a few variables that will use the prototype above to execute. do at least three; after provide an array that will hold them all. REF: cherry, lemon, corn; inventoryList - for the array
* [√] - Create a global createElement function that will do just that and add some params that i know will be useful.

* [] - CLASS WILL DO: Create Form function that will append to HTML to create the inventory that way(commented out the HTML in the index to help give you an idea)
* [] - CLASS WILL DO: Create an alert that they succesfully stored that info into the inventory
*/

//hardcode inventory list. I will provide three for you, add the rest

// Make two methods, one responsible of making an element- REF: makeElement(), the other to create multiple attributes at my will - REF: makeAttributes()
function makeElement(element, elementId, elementClass, text) {
    const newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.className = elementClass;
    newElement.innerText = text;
    return newElement;
}

const makeAttributes = function (element, ...attributes) {
    attributes.forEach(key => {
        element.setAttribute(key[0], key[1]);
    })
    return element;
}

//create a function that will create the layout for each list, but before I can do that, I should make a glabl createElement w/ needed info for repeated use

/*
Visualize:
a box that will have a heading tag for the Produce name, price, if its on sale or if not, box for the picture, and maybe a description?
ex:
|--------------------|
| |--| <-image       |
| |__| h4 - produce  |
| h5- price h5-org   |
|h5-sale?t:disc price|
| - savings          |
| - count/quant      |
| - description?     |
|____________________|
    
*/

function makeProduceCard(produce) {
    let discountPrice;
    let savings;

    const box = makeElement('div', '', 'col-md-8 col-md-offset-2 text-center box', '');
    const wrapper = makeElement('div', '', 'row', '');
    const li = makeElement('li', `produceItem${produce.produce}`, '', '');
    const image = makeElement('img', `${produce.produce.toLowerCase()}`, 'img-responsive col-md-5', '');
    makeAttributes(image, ['src', `${produce.image}`], ['alt', `An image of a ${produce.produce}`]);
    const produceName = makeElement('span', '', 'lead', produce.produce);
    const price = makeElement('h5', '', '', `Price: $${produce.price}`);
    if (produce.sale) {
        discountPrice = makeElement('h5', '', '', `Sale Price: $ ${produce.salePrice}`);
        savings = makeElement('h5', '', '', `Savings: $ ${produce.savings}`);
    } else {
        discountPrice = '';
        savings = '';
    }

    wrapper.append(image, produceName, price, discountPrice, savings);
    li.append(wrapper);
    box.appendChild(li);
    return box;
}


//Remember that array full of the produce I, you created? Well, now it serves here to loop through and append to the container. Done.
addInventoryToDOM(inventoryList);
formCreation();


const grabInventoryFormId = document.getElementById('inventoryForm');

function superAwesomeFunction() {
    formCreation();
    labelCreation();
    let removeItem = document.getElementById('startButton');
    removeItem.classList.add('hidden');
}
//<input type="" name="" class="" placeholder="" / elementInnerText for Button>
function formCreation() {
    let container = document.getElementById('inventoryForm');
    let form = inputCreation('form', '', 'myForm', 'GET', 'js/form-submission.js', 'inputform', '', '');
    let inputName = inputCreation('input', 'text', 'name', '', '', 'form-control', '', '');
    let inputEmail = inputCreation('input', 'email', 'email', '', '', 'form-control', '', '');
    let textArea = inputCreation('textarea', 'text', 'textarea', '', '', 'form-control', '', '');
    let button = inputCreation('button', 'submit', 'submit', '', '', '', '', 'Submit');
    let formGroupName = inputCreation('div', '', '', '', '', 'form-group', '', '');
    let formGroupEmail = inputCreation('div', '', '', '', '', 'form-group', '', '');

    container.appendChild(form);
    form.appendChild(formGroupName);
    formGroupName.appendChild(labelCreation('name', 'Name:'));
    formGroupName.appendChild(inputName);
    form.appendChild(formGroupEmail);
    formGroupEmail.appendChild(labelCreation('email', 'Email:'));
    formGroupEmail.appendChild(inputEmail);
    formGroupEmail.appendChild(textArea);
    form.appendChild(button);
}
//<label for=""></label>
function labelCreation(elementName, elementInfo) {
    let label = document.createElement('label');
    label.setAttribute('for', elementName);
    label.innerText = elementInfo;
    return label;
}


const inputCreation = (elementTag, elemetType, elementName, elementMethod = '', elementAction, elementClass, elementPlaceholder, elementInnerText = '') => {
    const elementInput = document.createElement(elementTag);
    elementInput.setAttribute('type', elemetType);
    elementInput.setAttribute('name', elementName);
    elementInput.setAttribute('method', elementMethod);
    elementInput.setAttribute('action', elementAction);
    elementInput.setAttribute('class', elementClass);
    elementInput.setAttribute('placeholder', elementPlaceholder);
    elementInput.innerText = elementInnerText;
    return elementInput;
}