let menu = document.getElementById("menu");

        function mostrarMenu(){

            if(getComputedStyle(menu).display != "flex"){
                menu.style.display = "flex"
            }else{
                menu.style.display = "none"
            }

            event.preventDefault();
        }
        function renderizarProdutos(){
            let secaoProdutos = document.getElementById('secao_produtos')

            let listaProdutos = [
                {
                    nome: "Mouse Gamer",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: 159,00
                },
                {
                    nome: "Teclado Mecânico Gamer RGb",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse teclado possui Switches Blue",
                    preco: 229,00
                },
                {
                    nome: "Headset Gamer RGB",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse headset possui microfene integrado de alta qualidade",
                    preco: 199,00
                },
                {
                    nome: "Mouse Pad Gamer RGB",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse pad é do tipo speed e possui rgb nas laterais",
                    preco: 119,00
                },
                {
                    nome: "Mouse Gamer",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: 159,00
                },
                {
                    nome: "Mouse Gamer",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: 159,00
                },
                {
                    nome: "Mouse Gamer",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: 159,00
                },
                {
                    nome: "Mouse Gamer",
                    imagem: "./img/T1 1.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: 159,00
                }
            ]

            let template = ""

            for(let index = 0; index < listaProdutos.length; index++){
                console.log(index)
            }
        }