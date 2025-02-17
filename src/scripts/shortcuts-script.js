document.addEventListener("DOMContentLoaded", function()
{
    site = document.querySelector(".sites").querySelectorAll("a");

    const shortcuts = {
        'F1': () => window.userUI('0'),
        'F2': () => window.userUI('1'),
        'F3': () => window.userUI('2'),
        'F4': () => window.userUI('3'),
        'F5': () => window.userUI('4'),
        'F6': () => window.userUI('5'),

        'Shift+D': () => 
        {
            theme = theme === "dark" ? "light" : "dark";
            window.applyTheme(theme);
        },

        'Shift+H': () =>
        {
            window.hideFunction();
        },
        'Alt+num': (num) => {
            let index = parseInt(num) - 1; 
                if (index >= 0 && index < site.length) 
                {
                    window.location.href = site[index].href;
                };
        },
    };
  
    document.addEventListener('keydown', function(event) {

        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") 
        {
            return;
        }

        else
        {
            let keyCombo = '';

            if (event.altKey) keyCombo += 'Alt+';
            else if (event.shiftKey) keyCombo += 'Shift+';

            keyCombo += event.key;


            if (keyCombo.startsWith('Alt+')) 
            {
                let num = event.key;
                shortcuts['Alt+num'](num);
                event.preventDefault();
            }
            else if (shortcuts[keyCombo]) 
            {
                event.preventDefault(); 
                shortcuts[keyCombo](); 
            }
        }
});
  
})