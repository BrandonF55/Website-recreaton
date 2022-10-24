const pElem = document.createElement('p');
pElem.append('The HTML of this webpage was created with JavaScript');
console.log(pElem);
const h1Elem = document.querySelector('h1');
h1Elem.after(pElem);

const imgElem = document.createElement('img');
imgElem.setAttribute('src', "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
imgElem.setAttribute('alt', "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
imgElem.setAttribute('style', 'width:50%');
pElem.after(imgElem);


const h1Elem2 = document.createElement('h1');
h1Elem2.append('Facts about the Multicolored Tanager')
imgElem.after(h1Elem2);

const ulList = document.createElement('ul');
h1Elem2.after(ulList);
const liElements = document.createElement('li');
liElements.append('It is endemic to the mountains of Colombia');
ulList.append(liElements);

const liElements2 = document.createElement('li');
liElements2.append('It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.');
ulList.append(liElements2);