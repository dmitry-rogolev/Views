!function()
{

    var first = document.forms.item(0).elements.first;
    var second = document.forms.item(0).elements.second;
    var button = document.forms.item(0).elements.button;
    var footer = document.getElementsByClassName("card-footer").item(0);
    var answer = document.getElementById("answer");

    button.addEventListener("click", function()
    {
        answer.textContent = "";

        if (!footer.classList.contains("show"))
            footer.classList.add("show");

        var f = first.value;
        var s = second.value;

        var min = 0;
        var i = 1;

        while (true)
        {
            if (i % f == 0 && i % s == 0)
            {
                min = i;
                break;
            }

            i++;
        }

        var text = document.createTextNode(min);

        answer.appendChild(text);

    });

}();