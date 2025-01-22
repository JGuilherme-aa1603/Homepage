document.addEventListener("DOMContentLoaded", function()
{
    let userid = localStorage.getItem("userid");
    if (!userid)
    {
        userid = '0';
    }
    
    body = document.getElementsByTagName("body")[0];
    userImage = document.querySelector("#userImage")
    function user(userid)
    {
        switch (userid)
        {
            case '0': /*Guilherme*/
            document.body.style.backgroundImage = "url(images/wallpaperg.jpg)"; 
            userImage.src = "images/userg.jpg"
            break;

            case '1': /*Pedro*/
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