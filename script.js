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
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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