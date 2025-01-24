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
        principal.id = "";
        sites.id = "";

        link.forEach(link => {
                    link.id = ""
        })
        linkName.forEach(linkName => {
            linkName.id = ""
        })

        if (theme === "light")
        {
            footerButton.forEach(footerButton => {
                footerButton.style.backgroundColor = "#303134";
            });
        }
        else
        {
            footerButton.forEach(footerButton => {
                footerButton.style.backgroundColor = "#e8e8e8";
            });
        }

    }

    function user(userid)
    {
        normalui();
        /*Usuario ativo com contorno verde*/
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

            case '4': /*Dorgival*/
                principal.id = "dorgivalPrincipal";
                sites.id = "dorgivalSites"
            break
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