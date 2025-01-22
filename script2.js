document.addEventListener("DOMContentLoaded", function()
{
    let userid = localStorage.getItem("userid");
    if (!userid)
    {
        userid = '0';
    }
    
    body = document.getElementsByTagName("body")[0];
    userImage = document.querySelector("#userImage")
    function normalui()
    {
        let principal = document.querySelector(".principal");
        let sites = document.querySelector(".sites");

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
            normalui();
            break;

            case '1': /*Pedro*/
            let principal = document.querySelector(".principal");
            let sites = document.querySelector(".sites");

            principal.style.position = "absolute";
            principal.style.bottom = "0%";
            principal.style.flexDirection = "column-reverse";
            principal.style.height = "15vh";

            sites.style.position = "fixed";
            sites.style.top = "0%";
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