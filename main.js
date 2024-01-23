const CAMPOA = document.getElementById('CAMPOA');
const CAMPOB = document.getElementById('CAMPOB');
var BOTAO = document.getElementById('btn-submit');

const form = document.getElementById('form');




form.addEventListener('submit',function(e) {
    e.preventDefault();

    const mensagemDeSucesso = `Formulário válido, o campo B: ${CAMPOB.value} é MAIOR que o campo A: ${CAMPOA.value}`
    const mensagemDeErro = `Formulário inválido, o campo B: ${CAMPOB.value} deve ser MAIOR que o campo A: ${CAMPOA.value}`

if (CAMPOA.value < CAMPOB.value) {
    alert(mensagemDeSucesso)
}
    else {
        alert(mensagemDeErro)
    }

})