
        document.getElementById("meuFormulario").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            const nome = document.getElementById("nome").value;
            alert("Nome: " + nome + "\nMensagem: " + mensagem);
        });
    