var body = document.getElementsByClassName("card-body").item(0);
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var timer = document.getElementById("timer");
var complexity = document.getElementById("complexity");

var table = null;
var randomArray = [];
var wined = false;
var failed = false;
var fails = 0;
var attemts = 0;
var time = 0;
var idTimer = 0;
var difficulty = "";

var difficulties = {
    easy: "Легкий", 
    ok: "Нормальный", 
    hard: "Трудный", 
    crazy: "Безумный", 
}

button.addEventListener("click", eventButton);
button.dispatchEvent(new Event("click"));

function eventButton()
{
    addComplexity();
}

function addComplexity()
{
    removeDiffilulty();
    removeTimer();

    timer.textContent = "";
    answer.textContent = "";
    body.innerHTML = "";
    body.appendChild(createComplexity());

    document.getElementById("easy").addEventListener("click", function()
    {
        time = 180000;
        difficulty = difficulties.easy;
        
        newGame();
    });

    document.getElementById("ok").addEventListener("click", function()
    {
        time = 120000;
        difficulty = difficulties.ok;
        
        newGame();
    });

    document.getElementById("hard").addEventListener("click", function()
    {
        time = 60000;
        difficulty = difficulties.hard;

        newGame();
    });

    document.getElementById("crazy").addEventListener("click", function()
    {
        time = 30000;
        difficulty = difficulties.crazy;
        
        newGame();
    });
}

function newGame()
{
    addDifficulty();

    table = createTable();
    randomArray = randArray();
    wined = false;
    failed = false;
    fails = 0;
    attemts = 0;

    answer.innerHTML = "";

    body.innerHTML = "";
    body.appendChild(table);

    var p = document.createElement("p");
    p.textContent = "Новая игра! Удачи! ;)";

    answer.appendChild(p);

    addTimer();

    table.addEventListener("click", function(e)
    {
        eventClickTable(e);
    });
}

function addDifficulty()
{    
    var h5 = document.createElement("h5");
    h5.classList.add("text-center");

    complexity.appendChild(h5);

    h5.textContent = "Уровень сложности: " + difficulty + ".";
}

function removeDiffilulty()
{
    complexity.textContent = "";
}

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

function eventClickTable(e)
{
    if (!wined && !failed && e.target.tagName == "TD" && !e.target.classList.contains("bg-danger") && !e.target.classList.contains("bg-success"))
    {
        answer.innerHTML = "";

        var id = Number(e.target.dataset.id);

        e.target.classList.remove("cursor-pointer");
        e.target.classList.add("cursor-default");

        if (randomArray.indexOf(id) == -1)
        {
            e.target.classList.add("bg-danger");
            fails++;
        }
        else 
        {
            e.target.classList.add("bg-success");
            randomArray.splice(randomArray.indexOf(id), 1);
        }

        attemts++;

        if (!randomArray.length)
            eventWin();
    }
}

function eventWin()
{
    if (!wined)
    {
        var p = document.createElement("p");
        p.textContent = "Вы угадали все 10 загаданных ячеек. Поздравляем!";

        answer.appendChild(p);

        p = document.createElement("p");
        p.textContent = "Количество неудачных попыток: " + fails + ".";

        answer.appendChild(p);

        wined = true;

        removeTimer();
    }
}

function eventFail()
{
    answer.innerHTML = "";

    var p = document.createElement("p");
    p.textContent = "Время вышло. Вы проиграли. :(";

    answer.appendChild(p);

    p = document.createElement("p");
    p.textContent = "Количество попыток: " + attemts + ".";

    answer.appendChild(p);

    failed = true;
}

function createComplexity()
{
    var container = document.createElement("div");
    container.classList.add("container-fluid");

    var row = document.createElement("div");
    row.classList.add("row", "flex-column", "align-items-center");

    container.appendChild(row);

    var h5 = document.createElement("h5");
    h5.textContent = "Выберите уровень сложности:";

    row.appendChild(h5);

    row.appendChild(createButton(["btn", "btn-primary", "m-1"], "button", "easy", "Легкий"));
    row.appendChild(createButton(["btn", "btn-success", "m-1"], "button", "ok", "Нормальный"));
    row.appendChild(createButton(["btn", "btn-warning", "m-1"], "button", "hard", "Сложный"));
    row.appendChild(createButton(["btn", "btn-danger", "m-1"], "button", "crazy", "Безумный"));

    return container;
}

function createButton(classes = [], type = "button", id = "", name = "Кнопка")
{
    var button = document.createElement("button");

    if (classes)
        button.classList.add(...classes);
    
    button.setAttribute("type", type);

    if (id)
        button.setAttribute("id", id);

    button.textContent = name;

    return button;
}

function addTimer()
{
    var t = document.getElementById("timer");
    var seconds = time / 1000;

    idTimer = setInterval(function()
    {
        t.textContent = seconds--;

        if (seconds < 0)
        {
            removeTimer();
            eventFail();
        }
    }, 1000);
}

function removeTimer()
{
    clearInterval(idTimer);
}
