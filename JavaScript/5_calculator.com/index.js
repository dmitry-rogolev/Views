document.body.classList.add("bg-gray-light", "h-100");

var container = document.createElement("div");
container.classList.add("container-fluid", "h-100");

document.body.appendChild(container);

var row = document.createElement("div");
row.classList.add("row", "justify-content-center", "align-items-center", "h-100");

container.appendChild(row);

var col = document.createElement("div");
col.classList.add("col-lg-4", "col-md-5", "col-sm-7", "col-11", "px-0");

row.appendChild(col);

var section = document.createElement("section");
section.classList.add("card");

col.appendChild(section);

var header = document.createElement("div");
header.classList.add("card-header");

section.appendChild(header);

var title = document.createElement("h4");
title.classList.add("card-title", "text-center");

header.appendChild(title);

var text = document.createTextNode("Калькулятор нахождения корней квадратного уравнения");

title.appendChild(text);

var body = document.createElement("div");
body.classList.add("card-body");

section.appendChild(body);

var form = document.createElement("form");

body.appendChild(form);

var group = document.createElement("div");
group.classList.add("form-group");

form.appendChild(group);

var id = randStr();

var label = document.createElement("label");
label.setAttribute("for", id);

group.appendChild(label);

text = document.createTextNode("a");

label.appendChild(text);

var input = document.createElement("input");
input.setAttribute("id", id);
input.setAttribute("type", "number");
input.setAttribute("placeholder", "a");
input.setAttribute("name", "a");
input.classList.add("form-control");

group.appendChild(input);

group = group.cloneNode(false);

form.appendChild(group);

id = randStr();

label = document.createElement("label");
label.setAttribute("for", id);

group.appendChild(label);

text = document.createTextNode("b");

label.appendChild(text);

input = document.createElement("input");
input.setAttribute("id", id);
input.setAttribute("type", "number");
input.setAttribute("placeholder", "b");
input.setAttribute("name", "b");
input.classList.add("form-control");

group.appendChild(input);

group = group.cloneNode(false);

form.appendChild(group);

id = randStr();

label = document.createElement("label");
label.setAttribute("for", id);

group.appendChild(label);

text = document.createTextNode("c");

label.appendChild(text);

input = document.createElement("input");
input.setAttribute("id", id);
input.setAttribute("placeholder", "c");
input.setAttribute("type", "number");
input.setAttribute("name", "c");
input.classList.add("form-control");

group.appendChild(input);

container = document.createElement("div");
container.classList.add("container-fluid");

form.appendChild(container);

row = document.createElement("div");
row.classList.add("row", "justify-content-center");

container.appendChild(row);

var button = document.createElement("button");
button.classList.add("btn", "btn-dark");
button.setAttribute("name", "button");
button.setAttribute("type", "button");

row.appendChild(button);

text = document.createTextNode("Вычислить");

button.appendChild(text);

var footer = document.createElement("div");
footer.classList.add("card-footer", "collapse");

section.appendChild(footer);

container = container.cloneNode(false);

footer.appendChild(container);

row = document.createElement("div");
row.classList.add("row");

container.appendChild(row);

col = document.createElement("div");
col.classList.add("col-12", "px-0");

row.appendChild(col);

var span = document.createElement("span");

col.appendChild(span);

text = document.createTextNode("Ответ: ");

span.appendChild(text);

span = document.createElement("span");
span.setAttribute("id", "answer");

col.appendChild(span);

var first = document.forms.item(0).elements.a;
var second = document.forms.item(0).elements.b;
var third = document.forms.item(0).elements.c;
var answer = span;

button.addEventListener("click", function()
{
    answer.textContent = "";

    var a = first.value;
    var b = second.value;
    var c = third.value;

    if (!footer.classList.contains("show"))
        footer.classList.add("show");

    var D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0)
        text = document.createTextNode("Нет корней.");
    else if (D === 0)
        text = document.createTextNode("x = " + (-b / (2 * a)));
    else 
        text = document.createTextNode("x1 = " + ((-b + Math.sqrt(D)) / (2 * a)) + ", x2 = " + ((-b - Math.sqrt(D)) / (2 * a)));

    answer.appendChild(text);

});
