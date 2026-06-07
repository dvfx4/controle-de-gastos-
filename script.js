    const chat = document.getElementById("chat");

function adicionarMensagem(texto, tipo){

    const div = document.createElement("div");

    div.classList.add("mensagem");
    div.classList.add(tipo);

    div.innerHTML = texto;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

}

function respostaIA(texto){

    adicionarMensagem(texto, "ia");

}

function enviarMensagem(){

    const input =
    document.getElementById("mensagem");

    const texto =
    input.value.trim();

    if(!texto) return;

    adicionarMensagem(texto, "usuario");

    interpretarComando(texto);

    input.value = "";

}

function interpretarComando(texto){

    const comando =
    texto.toLowerCase();

    if(comando.startsWith("gastei")){

        registrarGasto(comando);
        return;

    }

    if(comando.includes("me deve")){

        registrarRecebimento(comando);
        return;

    }

    if(comando.includes("quem me deve")){

        listarQuemDeve();
        return;

    }

    if(
        comando.includes("quanto gastei")
    ){

        totalGastos();
        return;

    }

    if(
        comando.includes(
            "quanto tenho para receber"
        )
    ){

        totalReceber();
        return;

    }

    respostaIA(
        "Não entendi esse comando."
    );

}
