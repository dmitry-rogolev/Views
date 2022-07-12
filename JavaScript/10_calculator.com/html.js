!function()
{

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

    var card = document.createElement("main");
    card.classList.add("card");

    col.appendChild(card);

    var header = document.createElement("div");
    header.classList.add("card-header");

    card.appendChild(header);

    var h4 = document.createElement("h4");
    h4.classList.add("card-title", "text-center");

    header.appendChild(h4);

    var text = document.createTextNode("Наименьшее число, которое делиться на оба числа");

    h4.appendChild(text);

    var body = document.createElement("div");
    body.classList.add("card-body");

    card.appendChild(body);

    var form = document.createElement("form");

    body.appendChild(form);

    var group = document.createElement("div");
    group.classList.add("form-group");

    form.appendChild(group);

    var id = randStr();

    var label = document.createElement("label");
    label.setAttribute("for", id);

    group.appendChild(label);

    text = document.createTextNode("Первое число");

    label.appendChild(text);

    var input = document.createElement("input");
    input.classList.add("form-control");
    input.setAttribute("id", id);
    input.setAttribute("name", "first");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Первое число");

    group.appendChild(input);

    group = group.cloneNode(false);

    form.appendChild(group);

    id = randStr();

    label = document.createElement("label");
    label.setAttribute("for", id);

    group.appendChild(label);

    text = document.createTextNode("Второе число");

    label.appendChild(text);

    input = document.createElement("input");
    input.classList.add("form-control");
    input.setAttribute("id", id);
    input.setAttribute("name", "second");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Второе число");

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

    text = document.createTextNode("Получить");

    button.appendChild(text);

    var footer = document.createElement("div");
    footer.classList.add("card-footer", "collapse");
    
    card.appendChild(footer);

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

}();