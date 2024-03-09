const cajatexto = document.getElementById ("cajatexto");
const botonencrip =document.getElementById ("botonencrip");
const botondesencrip = document.getElementById ("botondesencrip");
const botoncopiar = document.getElementById ("botoncopiar");
const mensajefinal = document.getElementById ("mensajefinal");
const muneco = document.getElementById ("muneco");
const mensajeinfo = document.getElementById ("mensajeinfo");
const encriptacion = document.getElementById ("encriptacion"); 

botonencrip.addEventListener("click", () => {
    const texto = cajatexto.value.toLowerCase();
    if (texto != ""){
        function encriptar (newText){
            for(let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
                };
            };
            return newText
        };
    } else {
        myAlert("error","Ingrese texto a encriptar");
        showMessageOutput("");
        reinicio()
    } 
    remplace (encriptar(texto))
    mensajefinal.innerHTML = encriptar(texto)

})

botondesencrip.addEventListener("click", () =>{
    const texto = cajatexto.value.toLowerCase();
    if (texto != ""){
        function desencriptar(newText) {
            for(let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar [i][1])) {
                    newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
                };
            };
            return newText
        };
    } else {
        myAlert("error","Ingrese texto a desencriptar");
        showMessageOutput("");
        reinicio()
    }
    remplace (desencriptar(texto))
    mensajefinal.innerHTML = desencriptar(texto)
    
})

botoncopiar.addEventListener("click", () =>{
    let texto = mensajefinal;
    texto.select();
    document.execCommand('copy')
    myAlert ("success","Texto Copiado");
    showMessageOutput("");
    reinicio();
})

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor;

    muneco.classList.add("oculto")
    cajatexto.value ="";
    mensajeinfo.style.display = "none";
    botoncopiar.style.display = "block";
    encriptacion.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
}

const reinicio = () => {
    mensajefinal.innerHTML = "";

    muneco.classList.remove("oculto");
    mensajeinfo.style.display = "block";
    botoncopiar.style.display = "none";    
    encriptacion.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    cajatexto.focus();
}

function myAlert(icon, message) {
    Swal.fire({
      icon: icon,
      text: message,
      timer: 1500,
      showConfirmButton: false,
      width: '30em'
    });
  }