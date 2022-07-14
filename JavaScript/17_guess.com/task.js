!function()
{

    var body = document.getElementsByClassName("card-body").item(0);
    var answer = document.getElementById("answer");
    var button = document.getElementById("button");

    var table = null;
    var randomArray = [];
    var win = false;
    var failed = 0;

    button.addEventListener("click", function()
    {
        body.innerHTML = "";
        table = createTable();
        body.appendChild(table);
        randomArray = randArray();
        win = false;
        failed = 0;

        answer.innerHTML = "";
        
        var p = document.createElement("p");
        p.textContent = "Новая игра! Удачи! ;)";

        answer.appendChild(p);

        table.addEventListener("click", function(e)
        {
            failed = eventClickTable(e, randomArray, answer, failed);
            win = eventWin(randomArray, answer, failed, win);
        });
    });

    button.dispatchEvent(new Event("click"));

}();

function createTable()
{
    var table = document.createElement("table");
    table.classList.add("table", "table-bordered");

    var id = 1;

    for (var i = 0; i < 10; i++)
    {
        var tr = document.createElement("tr");

        table.appendChild(tr);

        for (var j = 0; j < 10; j++)
        {
            var td = document.createElement("td");
            td.classList.add("bg-gray-light-hover", "cursor-pointer");
            td.style.width = "50px";
            td.style.height = "47px";
            td.dataset.id = id++;

            tr.appendChild(td);
        }
    }

    return table;
}

function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randArray(length = 10)
{
    var array = [];
    var random = null;

    while (array.length < length)
    {
        random = rand(1, 100);

        if (array.indexOf(random) == -1)
        {
            array.push(random);
        }
    }

    return array;
}

function eventClickTable(e, randomArray, answer, failed)
{
    if (randomArray.length && e.target.tagName == "TD" && !e.target.classList.contains("bg-danger") && !e.target.classList.contains("bg-success"))
    {
        answer.innerHTML = "";

        var id = Number(e.target.dataset.id);

        e.target.classList.remove("cursor-pointer");
        e.target.classList.add("cursor-default");

        if (randomArray.indexOf(id) == -1)
        {
            e.target.classList.add("bg-danger");
            failed++;
        }
        else 
        {
            e.target.classList.add("bg-success");
            randomArray.splice(randomArray.indexOf(id), 1);
        }
    }

    return failed;
}

function eventWin(randomArray, answer, failed, win = false)
{
    if (!randomArray.length && !win)
    {
        var p = document.createElement("p");
        p.textContent = "Вы угадали все 10 загаданных ячеек. Поздравляем!";

        answer.appendChild(p);

        p = document.createElement("p");
        p.textContent = "Количество неудачных попыток: " + failed + ".";

        answer.appendChild(p);

        win = true;
    }

    return win;
}
