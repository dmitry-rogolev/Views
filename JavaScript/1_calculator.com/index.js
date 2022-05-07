!function()
{
    "use strict";

    var inputSideOfSquare = document.getElementById("sideOfSquare");
    inputSideOfSquare.addEventListener("change", getAnswer);

    function getAnswerBlock()
    {
        var block = document.createElement("div");
        block.setAttribute("id", "answer");
        block.classList.add("col-12", "p-0");

        var h2 = document.createElement("h2");
        h2.classList.add("text-center");
        h2.appendChild(document.createTextNode("Ответ:"));

        var area = document.createElement("p");
        area.classList.add("h4");
        area.appendChild(document.createTextNode("Площадь квадрата: "));

        var answerArea = document.createElement("span");
        answerArea.setAttribute("id", "area");
        area.appendChild(answerArea);

        var perimeter = document.createElement("p");
        perimeter.classList.add("h4");
        perimeter.appendChild(document.createTextNode("Периметр квадрата: "));

        var answerPerimeter = document.createElement("span");
        answerPerimeter.setAttribute("id", "perimeter");
        perimeter.appendChild(answerPerimeter);

        block.appendChild(h2);
        block.appendChild(area);
        block.appendChild(perimeter);

        return block;
    }

    function getAnswer()
    {
        if (!document.getElementById("answer"))
        {
            this?.closest(".row")?.appendChild(getAnswerBlock());
        }

        var area = document.getElementById("area");
        var perimeter = document.getElementById("perimeter");

        if (this?.value && document.getElementById("answer") && area && perimeter)
        {
            var side = Number(this.value);
            area.textContent = Math.pow(side, 2);
            perimeter.textContent = side * 4;
        }
    }
}();