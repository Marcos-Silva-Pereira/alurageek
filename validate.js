// Verificação se os campos estao preenchidos
const camposDoFormulario = document.querySelectorAll("[required]");
var x = 0; // Um contador para ajudar a saber o momento de ativar o botao 'Enviar mensagem'

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.value == "") {
        alert("O campo '" + campo.id + "' não pode ficar vazio!!");
    }
    else if (campo.id == "email") {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (emailRegex.test(campo.value)){
            x = x + 1;
            if (x == 4) {
                document.querySelector(".formcontato__botao").removeAttribute("disabled");
            }
        }
        else {
            return alert("Informe um email válido! Ex.: text@texto.com");
        }
    }
    else if (x == 3) {
        document.querySelector(".formcontato__botao").removeAttribute("disabled");
    }
    else {
        x = x + 1;
    }
}

// -----------------------------------------------------------------------------------------------------------------

// Enviar formulário
let formulario = document.getElementById("data-formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    alert("Formulário enviado com sucesso!");

    console.log(`Nome = ${nome}
        Email = ${email}
        Assunto = ${assunto}
        Mensagem = ${mensagem}`);
});
