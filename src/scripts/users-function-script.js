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
    let footerButton = document.querySelector(".footer-users").querySelectorAll("button");

    function normalUI()
    {
        principal.id = "";
        sites.id = "";

        link.forEach(link => {
                    link.id = ""
        })
        linkName.forEach(linkName => {
            linkName.id = ""
        })

        footerButton.forEach(footerButton => {
            footerButton.style.backgroundColor = "var(--bg-color-main)";
        });

    }

    window.userUI = function(userid)
    {
        /* Aplly normalUI for avoid bugs */
        normalUI();

        /* Add green border for active user */
        footerButton[userid].style.backgroundColor = "#44B350";

        /*User - Background, Image, Link*/
        document.body.style.backgroundImage = users[userid].background;
        userImage.src = users[userid].image;
        userLink.href = users[userid].link;

        /*Sites - icons, links and names*/
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
                principal.id = "pedroPrincipal";
                sites.id = "pedroSites";
            break;

            case '2': /*Cauã*/
                principal.id = "cauaPrincipal";

                link.forEach(link => {
                    link.id = "cauaLink"
                })
                linkName.forEach(linkName => {
                    linkName.id = "cauaLinkName"
                })
            break;

            case '3': /*Iunah*/
                principal.id = "iunahPrincipal";
            break;

            case '4': /*Laudice*/
            break;
            case '5': /*Dorgival*/
                principal.id = "dorgivalPrincipal";
                sites.id = "dorgivalSites"
            break;
        }   
        /* Saves userid if the valor is exchanged */
        if (localStorage.getItem("userid") !== userid) {
            localStorage.setItem("userid", userid);
        }
        console.log(userid)
    }
    userUI(userid)

    for (let i = 0; i < footerButton.length; i++)
    {
        footerButton[i].addEventListener("click", function()
    {
        userUI('' + i);
    });
    }
});