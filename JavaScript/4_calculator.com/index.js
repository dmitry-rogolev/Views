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

    block.appendChild(h2);
    block.appendChild(area);

    return block;
}

function answer()
{

    if (!document.getElementById("answer"))
        this.closest(".row").appendChild(getAnswerBlock());

    var answer = document.getElementById("answer");
    var area = document.getElementById("area");
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    
    if (answer && area && a && b && c && a > 0 && b > 0 && c > 0)
    {
        var p = (a + b + c) / 2;
        area.textContent = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
}

var button = document.getElementById("button");
button.addEventListener("click", answer);
