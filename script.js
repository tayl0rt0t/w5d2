/**
 * Task 1.0
Select and cache the <main>element in a variable named mainEl.

Task 1.1
Set the background color of mainElto the value stored in the --main-bgCSS custom property.

Hint: Assign a string that uses the CSS var()function like this:
'var(--main-bg)'

Task 1.2
Set the content of mainElto <h1>SEI Rocks!</h1>.

Task 1.3
Add a class of flex-ctr to mainEl.


 */
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


let mainEl = document.querySelector("main");
let r = document.querySelector(":root");
let cs = getComputedStyle(r);
mainEl.style.backgroundColor = cs.getPropertyValue('--main-bg');
mainEl.innerHTML = "<h1>SEI ROCKS!</h1>";
mainEl.classList.add("flex-ctr");

/**
 * Task 2.0
Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

Task 2.1
Set the height topMenuElelement to be 100%.

Task 2.2
Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

Task 2.3
Add a class of flex-around to topMenuEl.
 */
let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = cs.getPropertyValue("--top-menu-bg");
topMenuEl.classList.add("flex-around");






/**
 * Iterate over the entire menuLinks array and for each "link" object:

Create an <a>element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element.
 */
for(let link of menuLinks){
    const a = document.createElement('a');
    a.setAttribute("href",link.href);
    a.innerText = link.text;
    topMenuEl.append(a);
}
/**
 * Task 4.0
Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

Task 4.1
Set the height subMenuElelement to be 100%.

Task 4.2
Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property.

Task 4.3
Add the class of flex-aroundto the subMenuElelement.
*/
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = cs.getPropertyValue("--sub-menu-bg");
subMenuEl.classList.add("flex-around");
/**
 * Task 4.4
Set the CSS position property of subMenuEl to the value of absolute.

Task 4.5
Set the CSS top property of subMenuEl to the value of 0.

Task 5.0
Update the menuLinks array in script.js to this:
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

 */
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;
/**
 * Task 5.1
Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.

Declare a global showingSubMenu variable and initialize it to false;

Task 5.2
Attach a delegated 'click' event listener to topMenuEl.

The first line of code of the event listener function should call the event object's preventDefault()method.

The second line of code function should immediately return if the element clicked was not an <a>element.

console.log the content of the <a>to verify the handler is working.
const topMenuLinks = document.querySelectorAll('a');
event.target.text
 */
