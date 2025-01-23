document.addEventListener("DOMContentLoaded", function()
{
    let userid = localStorage.getItem("userid");
    if (!userid)
    {
        userid = '0';
    }
    
    body = document.getElementsByTagName("body")[0];
    let userImage = document.querySelector("#userImage")
    let userLink = document.querySelector(".user")
    let principal = document.querySelector(".principal");
    let sites = document.querySelector(".sites");
    function normalui()
    {
        principal.style.position = "relative";
        principal.style.bottom = "";
        principal.style.flexDirection = "column";
        principal.style.height = "20vh";

        sites.style.position = "";
        sites.style.top = "";
    }

    function user(userid)
    {
        switch (userid)
        {
            case '0': /*Guilherme*/
            document.body.style.backgroundImage = "url(images/wallpaperg.jpg)"; 
            userImage.src = "images/userg.jpg"
            userLink.href = "https://github.com/JGuilherme-aa1603";
            normalui();
            break;

            case '1': /*Pedro*/

            principal.style.position = "absolute";
            principal.style.bottom = "0%";
            principal.style.flexDirection = "column-reverse";
            principal.style.height = "15vh";

            sites.style.position = "fixed";
            sites.style.top = "0%";

            userLink.href = "https://www.linkedin.com/in/pedro-almeida-2a0051222/";
            document.body.style.backgroundImage = "url(images/wallpaperp.png)"; 
            userImage.src = "images/userp.png"
            
            break;
        }   
        localStorage.setItem("userid", userid);
    }
    user(userid)
    let footerButton = document.querySelector("footer").querySelectorAll("button");

    for (let i = 0; i < footerButton.length; i++)
    {
        footerButton[i].addEventListener("click", function()
    {
        user('' + i);
    });
    }
});