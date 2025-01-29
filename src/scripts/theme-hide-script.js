let theme = localStorage.getItem("theme") ?? "dark";
let hide = localStorage.getItem("hide") === "true";

/* Checks if the input is blank */
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

    /* Apply theme when button is pressed */
    function applyTheme(currentTheme)
    {
        const rootStyles = getComputedStyle(document.documentElement);

            if (currentTheme === "dark")
            {
                hideIcon.src = "https://img.icons8.com/?size=100&id=98957&format=png&color=303134";
                themeIcon.src = "https://img.icons8.com/?size=100&id=60002&format=png&color=303134";

                document.documentElement.style.setProperty("--bg-color-secundary", rootStyles.getPropertyValue("--color-dark"));
                document.documentElement.style.setProperty("--bg-color-main", rootStyles.getPropertyValue("--color-light"));
            }
            else
            {
                hideIcon.src = "https://img.icons8.com/?size=100&id=98957&format=png&color=e8e8e8"
                themeIcon.src = "https://img.icons8.com/?size=100&id=vEAgTwhMAu1R&format=png&color=e8e8e8";

                document.documentElement.style.setProperty("--bg-color-secundary", rootStyles.getPropertyValue("--color-light"));
                document.documentElement.style.setProperty("--bg-color-main", rootStyles.getPropertyValue("--color-dark"));
            }
            localStorage.setItem("theme", currentTheme);
    }
    applyTheme(theme);
    
    themeButton.addEventListener("click", function()
    {
        theme = theme === "dark" ? "light" : "dark";
        applyTheme(theme); 
    })


    usersContainer.style.display = hide ? "none" : "flex";

    hideButton.addEventListener("click", function(){
        hide = !hide; 
        usersContainer.style.display = hide ? "none" : "flex";
        localStorage.setItem("hide", hide);
    });

});
