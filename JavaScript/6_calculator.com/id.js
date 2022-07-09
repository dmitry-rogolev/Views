function chars()
{
    var chars = [];

    for (var i = 48; i < 58; i++)
    {
        chars.push(String.fromCharCode(i));
    }

    for (var i = 65; i < 91; i++)
    {
        chars.push(String.fromCharCode(i));
    }

    for (var i = 97; i < 123; i++)
    {
        chars.push(String.fromCharCode(i));
    }

    return chars;
}

function rand(min = 0, max = 100)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var symbols = chars();

function randStr(length = 40)
{
    var id = "";

    for (var i = 0; i < length; i++)
    {
        id += symbols[rand(0, 61)];
    }

    return id;
}
