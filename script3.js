let userid = localStorage.getItem("userid") ?? '0';  
document.addEventListener("DOMContentLoaded", function()
{
    let userImage = document.querySelector("#userImage")
    let userLink = document.querySelector(".user")
    let principal = document.querySelector(".principal");
    let sites = document.querySelector(".sites");
    let link = sites.querySelectorAll("a");
    let linkName = sites.querySelectorAll("p");
    let siteLogo = sites.querySelectorAll("img")
    let footerButton = document.querySelector("footer").querySelectorAll("button");

    function normalui()
    {
        principal.style.position = "relative";
        principal.style.bottom = "";
        principal.style.top = "";
        principal.style.flexDirection = "column";
        principal.style.height = "20vh";

        sites.style.height = "11vh";
        sites.style.width = "100%";
        sites.style.position = "";
        sites.style.top = "";

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

        footerButton.forEach(footerButton => {
            footerButton.style.backgroundColor = "#303134";
        });


    }

    function user(userid)
    {
        normalui();
        footerButton[userid].style.backgroundColor = "#44B350";

        /*User - Background, Imagem, Link*/
        document.body.style.backgroundImage = users[userid].background;
        userImage.src = users[userid].image;
        userLink.href = users[userid].link;

        /*Sites - icones, links e nome*/
        const sitesConfig = userSites[userid];
        sitesConfig.forEach((site, index) => {
            link[index].href = site.href;
            siteLogo[index].src = site.src;
            siteLogo[index].alt = site.alt;
            linkName[index].innerHTML = site.name;
        });

        switch (userid)
        {
            case '0': /*Guilherme*/
            break;

            case '1': /*Pedro*/

                principal.style.position = "absolute";
                principal.style.bottom = "0%";
                principal.style.flexDirection = "column-reverse";
                principal.style.height = "15vh";

                sites.style.position = "fixed";
                sites.style.top = "0%";
                sites.style.width = "70%"

            break;

            case '2': /*Cauã*/
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
            break;
        }   
        if (localStorage.getItem("userid") !== userid) {
            localStorage.setItem("userid", userid);
        }
        console.log(userid)
    }
    user(userid)

    for (let i = 0; i < footerButton.length; i++)
    {
        footerButton[i].addEventListener("click", function()
    {
        user('' + i);
    });
    }
});