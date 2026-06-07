const banco = {

    gastos: JSON.parse(
        localStorage.getItem("gastos")
    ) || [],

    receber: JSON.parse(
        localStorage.getItem("receber")
    ) || [],

    pagar: JSON.parse(
        localStorage.getItem("pagar")
    ) || [],

    recorrentes: JSON.parse(
        localStorage.getItem("recorrentes")
    ) || []

};

function salvarBanco(){

    localStorage.setItem(
        "gastos",
        JSON.stringify(banco.gastos)
    );

    localStorage.setItem(
        "receber",
        JSON.stringify(banco.receber)
    );

    localStorage.setItem(
        "pagar",
        JSON.stringify(banco.pagar)
    );

    localStorage.setItem(
        "recorrentes",
        JSON.stringify(banco.recorrentes)
    );

}
