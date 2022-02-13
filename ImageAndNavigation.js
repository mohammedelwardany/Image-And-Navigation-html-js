var body = document.querySelector("body");

//image2
var image1 = document.getElementById("header");
image1.setAttribute("style", "text-align:right")

//list modify
var ulist = document.getElementById("nav");
ulist.setAttribute("style", "list-style-type:square;list-style-position: inside;")
var litems = ulist.getElementsByTagName("li");
for (var i = 1; i < litems.length; ++i) {
    var txt = litems[i].firstElementChild.firstChild.textContent;
    litems[i].firstElementChild.setAttribute("href", txt + ".html");
}


//image2
var image2 = document.createElement("img");
image2.setAttribute("src", "dom.jpg");
body.append(image2);
image2.setAttribute("style", "float:left;");