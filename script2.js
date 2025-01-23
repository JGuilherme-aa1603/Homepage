document.addEventListener("DOMContentLoaded", function()
{
    let userid = localStorage.getItem("userid") ?? '0';    
    let body = document.getElementsByTagName("body")[0];
    let userImage = document.querySelector("#userImage")
    let userLink = document.querySelector(".user")
    let principal = document.querySelector(".principal");
    let sites = document.querySelector(".sites");
    let link = sites.querySelectorAll("a");
    let linkName = sites.querySelectorAll("p");
    let siteLogo = sites.querySelectorAll("img")

    function normalui()
    {
        principal.style.position = "relative";
        principal.style.bottom = "";
        principal.style.top = "";
        principal.style.flexDirection = "column";
        principal.style.height = "20vh";

        sites.style.height = "11vh";
        sites.style.position = "";
        sites.style.top = "";

        link[0].href = "https://www.youtube.com";
        siteLogo[0].src = "images/youtube.png";
        siteLogo[0].alt = "youtube logo";
        linkName[0].innerHTML = "Youtube";

        link[1].href = "https://github.com";
        siteLogo[1].src = "images/github.png";
        siteLogo[1].alt = "github logo";
        linkName[1].innerHTML = "Github";

        link[2].href = "https://mail.google.com/mail/u/0/#inbox";
        siteLogo[2].src = "images/gmail.png";
        siteLogo[2].alt = "gmail logo";
        linkName[2].innerHTML = "Gmail";

        link[3].href = "https://chatgpt.com/"
        siteLogo[3].src = "images/chatgpt.png"
        siteLogo[3].alt = "chatgpt logo"
        linkName[3].innerHTML = "ChatGpt";

        link[4].href = "https://www.nexusmods.com/skyrimspecialedition"
        siteLogo[4].src = "images/nexusmods.png"
        siteLogo[4].alt = "nexusmods logo"
        linkName[4].innerHTML = "Nexusmods";

        link.forEach(link => {
            link.style.borderRadius = "10px";
            link.style.height = "11vh";
            link.style.maxHeight = "";
        })

        siteLogo.forEach(siteLogo => {
            siteLogo.style.position = "";
        })

        linkName.forEach(linkName => {
            linkName.style.position = "";
            linkName.style.marginTop = "";
        })

    }

    function user(userid)
    {
        normalui();
        switch (userid)
        {
            case '0': /*Guilherme*/
                document.body.style.backgroundImage = "url(images/wallpaperg.jpg)"; 
                userImage.src = "images/userg.jpg"
                userLink.href = "https://github.com/JGuilherme-aa1603";
            break;

            case '1': /*Pedro*/

                link[0].href = "https://www.youtube.com";
                siteLogo[0].src = "images/youtube.png";
                siteLogo[0].alt = "youtube logo";
                linkName[0].innerHTML = "Youtube";
        
                link[1].href = "https://github.com";
                siteLogo[1].src = "images/github.png";
                siteLogo[1].alt = "github logo";
                linkName[1].innerHTML = "Github";
        
                link[2].href = "https://mail.google.com/mail/u/0/#inbox";
                siteLogo[2].src = "images/gmail.png";
                siteLogo[2].alt = "gmail logo";
                linkName[2].innerHTML = "Gmail";
        
                link[3].href = "https://chatgpt.com/"
                siteLogo[3].src = "images/chatgpt.png"
                siteLogo[3].alt = "chatgpt logo"
                linkName[3].innerHTML = "ChatGpt";
        
                link[4].href = "https://www.nexusmods.com/skyrimspecialedition"
                siteLogo[4].src = "images/nexusmods.png"
                siteLogo[4].alt = "nexusmods logo"
                linkName[4].innerHTML = "Nexusmods";

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

            case '2': /*Cauã*/
                link[0].href = "https://www.youtube.com";
                siteLogo[0].src = "images/youtube.png";
                siteLogo[0].alt = "youtube logo";
                linkName[0].innerHTML = "Youtube";

                link[1].href = "https://www.twitch.tv/";
                siteLogo[1].src = "https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png";
                siteLogo[1].alt = "twitch logo";
                linkName[1].innerHTML = "Twitch";

                link[2].href = "https://mail.google.com/mail/u/0/#inbox";
                siteLogo[2].src = "images/gmail.png";
                siteLogo[2].alt = "gmail logo";
                linkName[2].innerHTML = "Gmail";

                link[3].href = "https://www.netflix.com/br/"
                siteLogo[3].src = "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
                siteLogo[3].alt = "netflix logo"
                linkName[3].innerHTML = "Netflix";

                link[4].href = "https://web.whatsapp.com/"
                siteLogo[4].src = "https://static.whatsapp.net/rsrc.php/v4/yP/r/rYZqPCBaG70.png"
                siteLogo[4].alt = "whatsapp logo"
                linkName[4].innerHTML = "Whatsapp";

                principal.style.position = "absolute";
                principal.style.top = "20%";

                link.forEach(link => {
                    link.style.borderRadius = "100%";
                    link.style.height = "5vw";
                    link.style.maxHeight = "5vw";
                })

                siteLogo.forEach(siteLogo => {
                    siteLogo.style.position = "absolute";
                })

                linkName.forEach(linkName => {
                    linkName.style.position = "fixed";
                    linkName.style.marginTop = "115px";
                })


                userLink.href = "https://www.vox.com/";
                body.style.backgroundImage = "url(images/wallpaperc.jpg)";
                userImage.src = "images/userc.jpg";
            break;
        }   
        if (localStorage.getItem("userid") !== userid) {
            localStorage.setItem("userid", userid);
        }
        console.log(userid)
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