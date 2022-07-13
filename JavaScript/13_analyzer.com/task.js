!function()
{

    var textarea = document.forms.item(0).elements.text;
    var button = document.forms.item(0).elements.button;
    var footer = document.getElementsByClassName("card-footer").item(0);
    var chars = document.getElementById("chars");

    button.addEventListener("click", function()
    {

        chars.textContent = "";

        if (!footer.classList.contains("show"))
            footer.classList.add("show");

        var text = textarea.value;

        chars.appendChild(document.createTextNode(text.split(" ").join("").length));

    });

}();