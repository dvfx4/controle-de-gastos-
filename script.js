// ---------- BANCO ----------

if (!localStorage.getItem("gastos")) {
    localStorage.setItem("gastos", JSON.stringify([]));
}

if (!localStorage.getItem("receber")) {
    localStorage.setItem("receber", JSON.stringify([]));
}

if (!localStorage.getItem("pagar")) {
    localStorage.setItem("pagar", JSON.stringify([]));
}

let gastos = JSON.parse(localStorage.getItem("gastos"));
let receber = JSON.parse(localStorage.getItem("receber"));
let pagar = JSON.parse(localStorage.getItem("pagar"));

// ---------- ABAS ----------

function mostrarAba(id){

    document
    .querySelectorAll(".aba")
    .forEach(aba => {

        aba.classList.add("escondido");

    });

    document
    .getElementById(id)
    .classList.remove("escondido");

}

// ---------- GASTOS ----------

function adicionarGasto(){

    const descricao =
    document.getElementById(
        "descricaoGasto"
    ).value;

    const valor =
    parseFloat(
        document.getElementById(
            "valorGasto"
        ).value
    );

    const categoria =
    document.getElementById(
        "categoriaGasto"
    ).value;

    const data =
    document.getElementById(
        "dataGasto"
    ).value;

    if(
        !descricao ||
        !valor ||
        !categoria ||
        !data
    ){
        alert("Preencha todos os campos");
        return;
    }

    gastos.push({
        descricao,
        valor,
        categoria,
        data
    });

    localStorage.setItem(
        "gastos",
        JSON.stringify(gastos)
    );

    atualizarGastos();

    document.getElementById(
        "descricaoGasto"
    ).value = "";

    document.getElementById(
        "valorGasto"
    ).value = "";

    document.getElementById(
        "categoriaGasto"
    ).value = "";

}

function atualizarGastos(){

    const lista =
    document.getElementById(
        "listaGastos"
    );

    lista.innerHTML = "";

    gastos.forEach(
        (gasto,index) => {

        lista.innerHTML += `
        <tr>
            <td>${gasto.data}</td>
            <td>${gasto.descricao}</td>
            <td>${gasto.categoria}</td>
            <td>R$ ${gasto.valor.toFixed(2)}</td>
            <td>
                <button
                class="btn-excluir"
                onclick="excluirGasto(${index})">
                Excluir
                </button>
            </td>
        </tr>
        `;

    });

}

function excluirGasto(index){

    gastos.splice(index,1);

    localStorage.setItem(
        "gastos",
        JSON.stringify(gastos)
    );

    atualizarGastos();

}

// ---------- RECEBER ----------

function adicionarDevedor(){

    const nome =
    document.getElementById(
        "nomeDevedor"
    ).value;

    const valor =
    parseFloat(
        document.getElementById(
            "valorDevedor"
        ).value
    );

    if(!nome || !valor){
        return;
    }

    receber.push({
        nome,
        valor
    });

    localStorage.setItem(
        "receber",
        JSON.stringify(receber)
    );

    atualizarReceber();

}

function atualizarReceber(){

    const lista =
    document.getElementById(
        "listaReceber"
    );

    lista.innerHTML = "";

    receber.forEach(
        (item,index) => {

        lista.innerHTML += `
        <tr>
            <td>${item.nome}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
                <button
                class="btn-excluir"
                onclick="excluirReceber(${index})">
                Excluir
                </button>
            </td>
        </tr>
        `;

    });

}

function excluirReceber(index){

    receber.splice(index,1);

    localStorage.setItem(
        "receber",
        JSON.stringify(receber)
    );

    atualizarReceber();

}

// ---------- PAGAR ----------

function adicionarConta(){

    const descricao =
    document.getElementById(
        "descricaoConta"
    ).value;

    const valor =
    parseFloat(
        document.getElementById(
            "valorConta"
        ).value
    );

    const vencimento =
    document.getElementById(
        "vencimentoConta"
    ).value;

    if(
        !descricao ||
        !valor ||
        !vencimento
    ){
        return;
    }

    pagar.push({
        descricao,
        valor,
        vencimento
    });

    localStorage.setItem(
        "pagar",
        JSON.stringify(pagar)
    );

    atualizarPagar();

}

function atualizarPagar(){

    const lista =
    document.getElementById(
        "listaPagar"
    );

    lista.innerHTML = "";

    pagar.forEach(
        (item,index) => {

        lista.innerHTML += `
        <tr>
            <td>${item.descricao}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>${item.vencimento}</td>
            <td>
                <button
                class="btn-excluir"
                onclick="excluirPagar(${index})">
                Excluir
                </button>
            </td>
        </tr>
        `;

    });

}

function excluirPagar(index){

    pagar.splice(index,1);

    localStorage.setItem(
        "pagar",
        JSON.stringify(pagar)
    );

    atualizarPagar();

}

// ---------- RELATÓRIO ----------

function gerarRelatorio(){

    const mes =
    parseInt(
        document.getElementById(
            "mesRelatorio"
        ).value
    );

    let total = 0;

    let html = "";

    gastos.forEach(gasto => {

        const mesGasto =
        new Date(
            gasto.data
        ).getMonth();

        if(mesGasto === mes){

            total += gasto.valor;

            html += `
            <p>
            ${gasto.data}
            -
            ${gasto.descricao}
            -
            R$ ${gasto.valor.toFixed(2)}
            </p>
            `;

        }

    });

    html += `
    <hr>
    <h3>
    Total:
    R$ ${total.toFixed(2)}
    </h3>
    `;

    document.getElementById(
        "resultadoRelatorio"
    ).innerHTML = html;

}

// ---------- INÍCIO ----------

atualizarGastos();
atualizarReceber();
atualizarPagar();
