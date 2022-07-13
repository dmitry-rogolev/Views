!function()
{

    document.body.addEventListener("change", function(e)
    {
        if (e.target.tagName == "INPUT" && e.target.hasAttribute("name") && e.target.getAttribute("name") == "check")
        {
            var check = e.target;

            var group = check.closest(".form-group");

            var form = group.getElementsByClassName("form").item(0);

            var textarea = group.getElementsByTagName("textarea").item(0);

            var answer = group.getElementsByClassName("answer").item(0);

            var idAnswer = answer.querySelector("#answer");
            
            form.classList.toggle("show");
            answer.classList.remove("show");

            var button = form.getElementsByTagName("button").item(0);

            button.addEventListener("click", function()
            {
                
                if (!answer.classList.contains("show"))
                    answer.classList.add("show");

                idAnswer.innerHTML = "";

                var text = textarea.value;

                switch (check.id)
                {
                    case "check1": 
                        check1(idAnswer, text);
                        break;
                    case "check2": 
                        check2(idAnswer, text);
                        break;
                    case "check3": 
                        check3(idAnswer, text);
                        break;
                    case "check4": 
                        check4(idAnswer, text);
                        break;
                }

            });

        }
    });

    function check1(answer, text)
    {
        var span = document.createElement("span");
        span.appendChild(document.createTextNode("Количество слов: "));

        answer.appendChild(span);

        span = document.createElement("span");

        answer.appendChild(span);

        span.appendChild(document.createTextNode(text.split(" ").length));
    }

    function check2(answer, text)
    {
        var p = document.createElement("p");

        answer.appendChild(p);

        var span = document.createElement("span");

        p.appendChild(span);

        span.appendChild(document.createTextNode("Количестов слов: "));

        words = document.createElement("span");
        
        p.appendChild(words);

        p = document.createElement("p");

        answer.appendChild(p);

        span = document.createElement("span");

        p.appendChild(span);

        span.appendChild(document.createTextNode("Количество символов: "));

        chars = document.createElement("span");

        p.appendChild(chars);

        words.appendChild(document.createTextNode(text.split(" ").length));
        chars.appendChild(document.createTextNode(text.split("").length));
    }

    function check3(answer, text)
    {
        var span = document.createElement("span");

        answer.appendChild(span);

        span.appendChild(document.createTextNode("Количество символов: "));

        chars = document.createElement("span");

        answer.appendChild(chars);

        chars.appendChild(document.createTextNode(text.split(" ").join("").length));
    }

    function check4(answer, text)
    {
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
    }

}();