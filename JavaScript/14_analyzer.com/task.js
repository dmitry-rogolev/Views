!function()
{

    var textarea = document.forms.item(0).elements.text;
    var button = document.forms.item(0).elements.button;
    var footer = document.getElementsByClassName("card-footer").item(0);
    var answer = document.getElementById("answer");

    button.addEventListener("click", function()
    {

        answer.textContent = "";

        if (!footer.classList.contains("show"))
            footer.classList.add("show");

        var text = textarea.value;

        var chars = text.split("").filter(function(value, index, array)
        {
            if (array.indexOf(value) != index || value == " ")
                return false;

            return true;
        });

        var length = text.length;

        var symbols = {};

        chars.sort();

        chars.forEach(function(value, index, array)
        {
            var count = text.split("").filter(function(v)
            {
                return v === value;
            }).length;

            symbols[value] = (count * 100 / length).toPrecision(2);
        });

        var ul = document.createElement("ul");

        answer.appendChild(ul);

        for (var key in symbols)
        {
            var li = document.createElement("li");

            ul.appendChild(li);

            li.appendChild(document.createTextNode(key + ": " + symbols[key] + "%;"));
        }
        
    });

}();