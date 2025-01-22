let theme = localStorage.getItem("theme");
if (!theme) 
{
    theme = "dark"
} 


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
    let button = document.querySelector("button");
    let icon = button.querySelector("img");
    let footerButon = document.querySelector("footer").querySelectorAll("button");
    let form = document.querySelector("form");
    let input = document.querySelector("input");
    let searchIcon = document.querySelector(".search-icon");
    let sites = document.querySelectorAll("a");

    function hoverDark()
    {
        form.addEventListener("mouseover", function()
        {
            input.style.backgroundColor = "#45484a"
        })
        form.addEventListener("mouseleave", function()
        {
            input.style.backgroundColor = "#303134";
        })
        searchIcon.addEventListener("mouseover", function()
        {
            searchIcon.style.color = "#717378";
        })
        searchIcon.addEventListener("mouseleave", function()
        {
            searchIcon.style.color = "#e8e8e8";
        })
    };

    function hoverLight()
    {
        form.addEventListener("mouseover", function()
        {
            input.style.backgroundColor = "#b3b3b3"
        })
        form.addEventListener("mouseleave", function()
        {
            input.style.backgroundColor = "#e8e8e8";
        })
        searchIcon.addEventListener("mouseover", function()
        {
            searchIcon.style.color = "#717277";
        })
        searchIcon.addEventListener("mouseleave", function()
        {
            searchIcon.style.color = "#303134";
        })
    }
    
    function applyTheme(currentTheme)
    {
            if (currentTheme === "dark")
            {
                button.style.backgroundColor = "#e8e8e8";
                footerButon.forEach(footerButon =>
                    footerButon.style.backgroundColor = "#e8e8e8"
                )
                icon.src = "https://img.icons8.com/?size=100&id=60002&format=png&color=000000";
                input.style.backgroundColor = "#e8e8e8";
                input.style.color = "#303134";
                searchIcon.style.color = "#303134";
                sites.forEach(site => 
                    {
                    site.style.backgroundColor = "#e8e8e8";
                    site.style.color = "#303134";
                    });
                hoverLight();
            }
            else
            {
                button.style.backgroundColor = "#303134";
                footerButon.forEach(footerButon =>
                    footerButon.style.backgroundColor = "#303134"
                )
                icon.src = "https://img.icons8.com/?size=100&id=vEAgTwhMAu1R&format=png&color=e8e8e8";
                input.style.backgroundColor = "#303134";
                input.style.color = "#e8e8e8"
                searchIcon.style.color = "#e8e8e8";
                sites.forEach(site => 
                    {
                    site.style.backgroundColor = "#303134";
                    site.style.color = "#e8e8e8";
                    });

                hoverDark();
            }
            localStorage.setItem("theme", currentTheme);
    }
    applyTheme(theme);
    
    button.addEventListener("click", function()
        {
            theme = theme === "dark" ? "light" : "dark";
            applyTheme(theme); 
        })

});
