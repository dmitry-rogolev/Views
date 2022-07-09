!function()
{

    var first = document.forms.item(0).elements.first;
    var second = document.forms.item(0).elements.second;
    var third = document.forms.item(0).elements.third;
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
        var t = third.value;

        var max = Math.max(f, s, t);
        var flag = false;

        if (max == f)
        {
            if (Math.pow(max, 2) == Math.pow(s, 2) + Math.pow(t, 2))
                flag = true;
        }
        else if (max == s)
        {
            if (Math.pow(max, 2) == Math.pow(f, 2) + Math.pow(t, 2))
                flag = true;
        }
        else
        {
            if (Math.pow(max, 2) == Math.pow(f, 2) + Math.pow(s, 2))
                flag = true;
        }

        if (flag) 
            var text = "Числа " + f + ", " + s + ", " + t + " являются Тройкой Пифагора.";
        else 
            var text = "Числа " + f + ", " + s + ", " + t + " не являются Тройкой Пифагора.";

        answer.appendChild(document.createTextNode(text));

    });

}();
