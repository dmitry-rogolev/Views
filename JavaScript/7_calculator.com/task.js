-function()
{

    var number = document.forms.item(0).elements.number;
    var footer = document.getElementsByClassName("card-footer").item(0);
    var answer = document.getElementById("answer");

    number.addEventListener("change", function()
    {

        answer.textContent = "";

        if (!footer.classList.contains("show"))
            footer.classList.add("show");

        var n = number.value;

        var divisors = [];

        for (var i = 0; i < Math.abs(n); i++)
        {
            if (n % i == 0)
                divisors.push(i);
        }

        answer.appendChild(document.createTextNode(divisors.join(", ")));

    });

}();