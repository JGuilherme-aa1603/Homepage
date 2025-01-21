function checkInput()
{
    let inputValue = document.getElementById("searchInput").value
    if (!inputValue)
    {
        return false;
    }
    return true
};