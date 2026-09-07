let mensagens = [];

const formulario = document.getElementById("formulario");

const campos = formulario.querySelectorAll(".input");



// Remove o aviso quando começar a digitar

campos.forEach(campo => {

    campo.addEventListener("input", () => {

        const aviso = campo.parentElement.querySelector(".obrigatorio");

        if (campo.value.trim() !== "") {

            aviso.classList.remove("mostrar");
            campo.classList.remove("mostrar");

        }

    });

});



formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let mensagem = {

        nome: document.getElementById("nome").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        email: document.getElementById("email").value.trim(),
        mensagem: document.getElementById("mensagem").value.trim()

    };



    function validarFormulario() {

        let erros = [];

        campos.forEach(campo => {

            const aviso = campo.parentElement.querySelector(".obrigatorio");

            if (campo.value.trim() === "") {

                campo.classList.add("mostrar");
                campo.classList.remove("ok");

                aviso.classList.add("mostrar");

                erros.push(campo.name);

            } else {

                campo.classList.remove("mostrar");
                campo.classList.add("ok");

                aviso.classList.remove("mostrar");

            }

        });

        return erros.length === 0;

    }



    if (validarFormulario()) {

        mensagens.push(mensagem);

        console.log(mensagens);

        setTimeout(() => {
            alert("Mensagem enviada com sucesso!");

            formulario.reset();

            campos.forEach(campo => {
                campo.classList.remove("ok");
            });
        }, 50);

    }


});