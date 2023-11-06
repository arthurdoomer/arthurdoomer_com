console.log(window);


function mostrarScrollY(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        scrollBy(0, -100);
    }
};

window.addEventListener('scroll', mostrarScrollY);


let dados = document.getElementById("numeros");
dados.addEventListener('submit', mostrarDados);

function mostrarDados(event){
    event.preventDefault();
    let formData = new FormData(dados);
    let numeros = formData.get('numero');
    console.log(numeros);
}

console.log(typeof("2" + "2" - "2"))