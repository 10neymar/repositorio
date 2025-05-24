
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0
    console.log(numeroSecreto);

    function jogo() {
    let palpite = (parseInt(document.getElementById("morango").value));
    let mensagem = document.getElementById("batata");
    let imagem = document.getElementById("imgResultado");
    

    if (numeroSecreto === palpite) {
        mensagem.innerText = "Parabéns, você acertou!!";
        imagem.innerHTML = '<img src ="https://www.esportelandia.com.br/app/uploads/2019/07/cristiano-ronaldo-eurocopa.jpg">';
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        tentativas = 0;
        console.log(numeroSecreto);

        } else {
        tentativas++;   
        if (tentativas >= 3)  { 
            document.getElementById("batata").innerText = `Errou! Suas 3 chances acabaram. o número era ${numeroSecreto}. Novo número gerado`
            imagem.innerHTML ='<img src="https://th.bing.com/th/id/OIP.19qJsbTvIDxoxWRCbZRPIwAAAA?rs=1&pid=ImgDetMain">';
            numeroSecreto = Math.floor (Math.random() * 10) + 1;
            tentativas = 0;
            console.log(numeroSecreto);

            } else {
                 document.getElementById("batata").innerText = `errou! você ainda tem ${3 - tentativas} tentativa(s).`;
                 imagem.innerHTML = "";
                  
            }
         }
      

    }
