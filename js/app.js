let test1 = document.getElementById("test1");
test1 [`style`][`backgroundColor`] = `red`;
let test2 = document.getElementById("test2");
test2 [`style`][`backgroundColor`] = `blue`;
let test3 = document.getElementById("test3");
test3 [`style`][`backgroundColor`] = `green`;
let test4 = document.getElementsByClassName("test4");

let counter = 0;
while(counter < test4.length)
{
    test4[counter]['innerHTML'] = "hacked";
    counter ++;
};
