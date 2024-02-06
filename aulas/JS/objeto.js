function externo() {
    var pessoa = {
        Nome: "sabrina",
        Sobrenome: "Ramos",
        Departamento: "TI"
    }

    document.getElementById("local").innerHTML =
    pessoa.Nome + " trabalha no departamento de" + pessoa.Departamento;
}