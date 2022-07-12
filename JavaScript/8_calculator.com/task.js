(function()
{

    var button = document.forms.item(0).elements.button;
    var first = document.forms.item(0).elements.first;
    var second = document.forms.item(0).elements.second;
    var answer = document.getElementById("answer");
    var footer = document.getElementsByClassName("card-footer").item(0);

    button.addEventListener("click", function()
    {
        answer.textContent = "";

        if (!footer.classList.contains("show"))
            footer.classList.add("show");

        var f = first.value;
        var s = second.value;

        var firstDivisors = [];
        var secondDivisors = [];

        for (var i = 0; i < Math.abs(f); i++)
        {
            if (f % i == 0)
                firstDivisors.push(i);
        }

        for (var i = 0; i < Math.abs(s); i++)
        {
            if (s % i == 0)
                secondDivisors.push(i);
        }

        var text = document.createTextNode(intersect(firstDivisors, secondDivisors).join(", "));

        answer.appendChild(text);

    });

    function intersect(arr1, arr2)
    {
        var array = [];

        for (var v of arr1)
        {
            var i = arr2.indexOf(v);
            if (i != -1)
            {
                array.push(v);
                arr2.splice(i, 1);
            }
        }

        return array;
    }

}());