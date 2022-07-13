!function()
{

    var number = document.forms.item(0).elements.number;
    var button = document.forms.item(0).elements.button;
    var answer = document.getElementById("answer");

    var msg = messages();

    var random = null;

    var attempts = 0;

    number.addEventListener("change", function()
    {
        var num = number.value;

        if (num < random)
        {
            answer.textContent = msg.more;
        }
        else if (num > random)
        {
            answer.textContent = msg.less;
        }
        else 
        {
            answer.textContent = "";
            answer.appendChild(msg.win(random, attempts));
            
            random = newRandom();
        }

        attempts++;
    });

    button.addEventListener("click", function()
    {
        random = newRandom();

        answer.textContent = msg.new;
    });

    button.dispatchEvent(new Event("click"));
    
}();

function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newRandom()
{
    return rand(1, 100);
}

function messages()
{
    return {
        new: "Число загадано! Удачи! ;)", 
        more: "Введите число побольше.", 
        less: "Введите число поменьше.", 
        
        win: function(random, attempts)
        {
            var answer = document.createElement("div");

            var p = document.createElement("p");
            p.textContent = "Вы угадали! Поздравляем!";

            answer.appendChild(p);

            p = p.cloneNode(false);
            p.textContent = "Загаданное число: " + random + ".";

            answer.appendChild(p);

            p = p.cloneNode(false);
            p.textContent = "Количество попыток: " + attempts + ".";

            answer.appendChild(p);

            p = p.cloneNode(false);
            p.textContent = "Новое число загадано!";

            answer.appendChild(p);

            return answer;
        }
    };
}
