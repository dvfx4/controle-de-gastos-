let gastos =
JSON.parse(localStorage.getItem("gastos")) || [];

function salvar() {

    localStorage.setItem(
        "gastos",
        JSON.stringify(gastos)
    );

}

function adicionarGasto() {

    const descricao =
    document.getElementById("descricao").value;

    const valor =
    parseFloat(
        document.getElementById("valor").value
    );

    const categoria =
    document.getElementById("categoria").value;

    const data =
    document.getElementById("data").value;

    if(
        !descricao ||
        !valor ||
        !data
    ){
        alert("Preencha tudo");
        return;
    }

    gastos.push({
        descricao,
        valor,
        categoria,
        data
    });

    salvar();

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";

    listarGastos();
}

function excluirGasto(indice){

    gastos.splice(indice,1);

    salvar();

    listarGastos();

}

function listarGastos(){

    const lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    let total = 0;

    const filtro =
    document.getElementById("filtroMes").value;

    gastos.forEach((gasto,indice)=>{

        const mes =
        new Date(gasto.data).getMonth();

        if(
            filtro !== "" &&
            mes != filtro
        ){
            return;
        }

        total += gasto.valor;

        lista.innerHTML += `
        <tr>
            <td>${gasto.data}</td>
            <td>${gasto.descricao}</td>
            <td>${gasto.categoria}</td>
            <td>R$ ${gasto.valor.toFixed(2)}</td>
            <td>
                <button onclick="excluirGasto(${indice})">
                Excluir
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("total")
    .textContent =
    total.toFixed(2);

}

listarGastos();
