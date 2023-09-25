let test1 = document.getElementById("test1");
test1[`style`][`backgroundColor`] = `red`;
let test2 = document.getElementById("test2");
test2[`style`][`backgroundColor`] = `blue`;
let test3 = document.getElementById("test3");
test3[`style`][`backgroundColor`] = `green`;
let test4 = document.getElementsByClassName("test4");

let counter = 0;
while(counter < test4.length)
{
    test4[counter]['innerHTML'] = "hacked";
    counter ++;
};
let test5 = document.querySelector(`#test5`);
test5.insertAdjacentHTML(`beforebegin`, `<p>I AM BEFORE</p>`);
let test6 = document.querySelector(`#test6`);
test6.insertAdjacentHTML(`afterend`, `<p>I AM AFTER</p>`);
let test7 = document.querySelector(".test7");
test7.insertAdjacentHTML(`afterend`, `<p>I AM AFTER</p>`);


let test8 = document.getElementById("test8");
test8.setAttribute("src", "/images/logo.jpg")
