let theme = localStorage.getItem("theme");
if (!theme) 
{
    theme = "dark";
} 

let hide = localStorage.getItem("hide") === "true";

function checkInput()
{
    let inputValue = document.getElementById("searchInput").value;
    if (!inputValue)
    {
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function()
{
    let themeButton = document.querySelector("#theme-button");
    let hideButton = document.querySelector("#hide-users");
    let hideIcon = hideButton.querySelector("img");
    let themeIcon = themeButton.querySelector("img");
    let usersContainer = document.querySelector(".footer-users")
    let footerButton = usersContainer.querySelectorAll("button");
    let form = document.querySelector("form");
    let input = document.querySelector("input");
    let searchIcon = document.querySelector(".search-icon");
    let sites = document.querySelectorAll("a");

    function hoverEffect(inputColor, hoverInputColor, searchColor, hoverSearchColor)
    {
        form.addEventListener("mouseover", function()
        {
            input.style.backgroundColor = inputColor;
        })
        form.addEventListener("mouseleave", function()
        {
            input.style.backgroundColor = hoverInputColor;
        })
        searchIcon.addEventListener("mouseover", function()
        {
            searchIcon.style.color = searchColor;
        })
        searchIcon.addEventListener("mouseleave", function()
        {
            searchIcon.style.color = hoverSearchColor;
        })
    };

    function styleAll(bgColor, color)
    {
        input.style.backgroundColor = bgColor;
        input.style.color = color;
        themeButton.style.backgroundColor = bgColor;
        hideButton.style.backgroundColor = bgColor;
        searchIcon.style.color = color;

        sites.forEach(site => {
            site.style.backgroundColor = bgColor;
            site.style.color = color;
        });

        footerButton.forEach(footerButton => {
            footerButton.style.backgroundColor = bgColor;
        });

    }
    function applyTheme(currentTheme)
    {
        let userid = localStorage.getItem("userid") ?? '0';  
            if (currentTheme === "dark")
            {
                hideIcon.src = "https://img.icons8.com/?size=100&id=98957&format=png&color=303134";
                themeIcon.src = "https://img.icons8.com/?size=100&id=60002&format=png&color=303134";
                styleAll("#e8e8e8", "#303134");
                hoverEffect("#b3b3b3", "#e8e8e8", "#717277", "#303134");
            }
            else
            {
                hideIcon.src = "https://img.icons8.com/?size=100&id=98957&format=png&color=e8e8e8"
                themeIcon.src = "https://img.icons8.com/?size=100&id=vEAgTwhMAu1R&format=png&color=e8e8e8";
                styleAll("#303134", "#e8e8e8");
                hoverEffect("#45484a", "#303134", "#717378", "#e8e8e8");
            }
            footerButton[userid].style.backgroundColor = "#44B350";
            localStorage.setItem("theme", currentTheme);
    }
    applyTheme(theme);
    
    themeButton.addEventListener("click", function()
    {
        theme = theme === "dark" ? "light" : "dark";
        applyTheme(theme); 
    })


    usersContainer.style.display = hide ? "none" : "flex";
    function hideUsers() {
        console.log("Antes de alternar:", hide); /*remover*/
    
        hide = !hide; 
    
        usersContainer.style.display = hide ? "none" : "flex";

        localStorage.setItem("hide", hide);
    
        console.log("Depois de alternar:", hide); /*remover*/
    }
    hideButton.addEventListener("click", hideUsers);

});
