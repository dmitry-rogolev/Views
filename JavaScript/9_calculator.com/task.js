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

        var firstDivisors = divisors(f);
        var secondDivisors = divisors(s);

        var array = intersect(firstDivisors, secondDivisors);

        var text = document.createTextNode(max(array));

        answer.appendChild(text);
        
    });

    function divisors(number)
    {
        var divisors = [];

        for (var i = 0; i < Math.abs(number); i++)
        {
            if (number % i == 0)
                divisors.push(i);
        }

        return divisors;
    }

    function intersect(arr1, arr2)
    {
        var intersect = [];

        for (var v of arr1)
        {
            var i = arr2.indexOf(v);

            if (i != -1)
            {
                intersect.push(v);
                arr2.splice(i, 1);
            }
        }

        return intersect;
    }

    function max(array)
    {
        return Math.max.apply(null, array);
    }

}();