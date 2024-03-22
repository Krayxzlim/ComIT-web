const contactForm = document.querySelector ('.contact-form');

let nombre = document.getElementById ('form-nombre');
let mail = document.getElementById ('form-mail');
let telefono = document.getElementById ('form-telefono');
let mensaje = document.getElementById ('form-mensaje');
 
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: nombre.value,
        email: mail.value,
        telephone: telefono.value,
        message: mensaje.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'exito'){
            alert('Correo enviado!');
            nombre.value = '';
            mail.value = '';
            telefono.value = '';
            mensaje.value = '';
        }else{
            alert('Algo salio mal!')
        }
    }

    xhr.send(JSON.stringify(formData));


})