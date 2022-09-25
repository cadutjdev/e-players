let menu = document.getElementById("menu");

        function mostrarMenu(){

            if(getComputedStyle(menu).display != "flex"){
                menu.style.display = "flex"
            }else{
                menu.style.display = "none"
            }

            event.preventDefault();
        }