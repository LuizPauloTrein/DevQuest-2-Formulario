const dadosUsuario = document.querySelectorAll(".input");
const enviarDados = document.getElementById("btn");
const erroDados = document.querySelectorAll(".erro");

enviarDados.addEventListener("click", function (){
    dadosUsuario.forEach((input, index) => {
        if(input.value === ""){
            erroDados[index].classList.remove('none')
            input.classList.add('borda-vermelha')
            input.classList.remove('borda-verde')
        }else{
            erroDados[index].classList.add('none')
            input.classList.remove('borda-vermelha')
            input.classList.add('borda-verde')
        }
    });
})