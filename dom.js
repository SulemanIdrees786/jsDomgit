// //console.dir(document);
// // examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //document.title= 123
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all[37]);
// //document.al[10].textContent = 'head'

// console.log(document.forms);

//console.log(document.getElementById('header-title'));
// var ht = document.getElementById("header-title");
// ht.textContent = "bye bye";
// ht.innerText = "good";
// ht.style.borderBottom = "solid 3px #000";

// get elements by classname

// var item = document.getElementsByClassName("list-group-item");
// console.log(item);
// console.log(item[1]);
// item[1].textContent = "hello";
// item[1].style.fontWeight = "bold";
// item[1].style.background = "#ffff00";

// for (var i = 0; i < item.length; i++) {
//   item[i].style.background = "#f4f4f4";
// }
// get elements by tags

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello";
// li[1].style.fontWeight = "bold";
// li[1].style.background = "#ffff00";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.background = "#f4f4f4";
// }
//

//querry selector
// var h = document.querySelector("#main-header");
// h.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");

// input.value = "hello world";
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";

// var lastitem = document.querySelector(".list-group-item:nth-child(2)");
// lastitem.style.color = "blue";

// //

// var t = document.querySelectorAll(".title");

// console.log(t);

var itemlist = document.querySelector("#items");
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemlist.parentNode.parentNode);
