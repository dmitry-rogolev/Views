function getAnswerBlock()
{
    var block = document.createElement("div");
    block.classList.add("col-12", "p-0");
    block.setAttribute("id", "answer");

    var h2 = document.createElement("h2");
    h2.classList.add("text-center");
    h2.appendChild(document.createTextNode("Ответ:"));

    var area = document.createElement("p");
    area.classList.add("h4");
    area.appendChild(document.createTextNode("Площадь: "));

    var span = document.createElement("span");
    span.setAttribute("id", "area");

    area.appendChild(span);

    var perimeter = document.createElement("p");
    perimeter.classList.add("h4");
    perimeter.appendChild(document.createTextNode("Длина: "));

    span = document.createElement("span");
    span.setAttribute("id", "perimeter");

    perimeter.appendChild(span);

    block.appendChild(h2);
    block.appendChild(area);
    block.appendChild(perimeter);

    return block;
}

function answer()
{

    if (!document.getElementById("answer"))
        this.closest(".row").appendChild(getAnswerBlock());

    var answer = document.getElementById("answer");
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var radius = Number(document.getElementById("radius").value);
    
    if (answer && area && perimeter && radius && radius > 0)
    {
        area.textContent = Math.PI * Math.pow(radius, 2);
        perimeter.textContent = 2 * Math.PI * radius;
    }
}

var button = document.getElementById("button");
button.addEventListener("click", answer);
