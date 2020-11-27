function login(form) {
    //checa nome e senha caso digite com letras maiusculas converte para minuscula
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.nome.value == "marta" && form.senha.value == "123" || form.nome.value == "jonas" && form.senha.value == "456" ||
        form.nome.value == "paulo" && form.senha.value == "789" || form.nome.value == "amanda" && form.senha.value == "101112") {
        location = "acesso.html"
    }
    else {
        form.nome.value = ""
        form.senha.value = ""
        alert("Dados incorretos")
    }
}