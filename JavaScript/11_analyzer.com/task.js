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

        answer.appendChild(document.createTextNode(text.split(" ").length));

    });

}();