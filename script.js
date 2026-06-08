let gastos =
JSON.parse(
localStorage.getItem("gastos")
) || [];

function salvar(){

    localStorage.setItem(
        "gastos",
        JSON.stringify(gastos)
    );

}

function adicionarGasto(){

    const descricao =
    document.getElementById(
        "descricao"
    ).value;

    const valor =
    parseFloat(
        document.getElementById(
            "valor"
        ).value
    );

    const categoria =
    document.getElementById(
        "categoria"
    ).value;

    const data =
    document.getElementById(
        "data"
    ).value;

    if(
        !descricao ||
        !valor ||
        !categoria ||
        !data
    ){
        alert(
        "Preencha todos os campos"
        );
        return;
    }

    gastos.push({
        descricao,
        valor,
        categoria,
        data
    });

    salvar();

    atualizarTabela();

    document.getElementById(
        "descricao"
    ).value = "";

    document.getElementById(
        "valor"
    ).value = "";

    document.getElementById(
        "categoria"
    ).value = "";

}

function excluirGasto(indice){

    gastos.splice(indice,1);

    salvar();

    atualizarTabela();

}

function atualizarTabela(){

    const lista =
    document.getElementById(
        "listaGastos"
    );

    lista.innerHTML = "";

    gastos.forEach(
    (gasto,index)=>{

        lista.innerHTML += `
        <tr>
            <td>${gasto.data}</td>
            <td>${gasto.descricao}</td>
            <td>${gasto.categoria}</td>
            <td>R$ ${gasto.valor.toFixed(2)}</td>
            <td>
                <button
                onclick="excluirGasto(${index})">
                Excluir
                </button>
            </td>
        </tr>
        `;

    });

}

atualizarTabela();
