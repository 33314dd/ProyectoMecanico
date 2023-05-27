


const openModal = document.querySelector('.terminos');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});



function validar(){
    var nombre, apellido, correo,telefono, password;
 
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    password = document.getElementById("password").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === '' || apellido === '' || correo === '' || telefono === '' || password === '' ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length > 30){
        alert("El nombre exede el largo permitido");
       return false;
    }
    else if(apellido.length > 30){
       alert("El apellido exede el largo permitido");
       return false;
    }

    else if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }

    else if(!expresion.test(correo)){
        alert('El correo no es valido')
    }
    else if(telefono.length>10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(password.length>30){
        alert("La contraseña es muy larga");
        return false;
    }
    else if(password.length<5){
        alert('La contraseña debe tener minimo 6 caracteres')
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado debe ser un número");
        return false;

    }
     
}


