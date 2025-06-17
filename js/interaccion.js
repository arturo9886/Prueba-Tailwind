// empezaremos fuertes.
// diosito cuidame pero E PA ARRIBA QUE VAMOS!

const form = {
    email: '',
    asunto: '',
    mensaje: '',
}

console.log(form);

const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const btnErase = document.querySelector('#reset');
const btnSubmit = document.querySelector('#submit');
const main = document.querySelector('#main')
const todo = document.querySelectorAll('input')


console.log(todo)

// validar email  

inputEmail.addEventListener('blur', validar);
inputAsunto.addEventListener('input',validar);
inputMensaje.addEventListener('input',validar);
btnErase.addEventListener('click',resetForm);
btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    resetValues();
    btnSubmit.disabled = true;
    btnSubmit.classList.add('opacity-50')
    const icono = document.querySelector('.sk-chase')
    icono.classList.remove('hidden');

    setTimeout(function(){
        icono.classList.add('hidden')

        const done = document.createElement('p')
        done.classList.add("text-2xl","bg-green-400", "rounded-lg", "w-fillContent", "p-3", "mt-10")
        done.textContent = 'Informacion Enviada!'
        formulario.appendChild(done);

        setTimeout(function(){
            done.remove();

        }, 3000)

    },4000)
})


function validar(e){
    console.log(e.target.parentElement);
    limpiarAlerta(e.target.parentElement)
    
    console.log(e.target.value);
    if(e.target.value.trim().length===0){
        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        form[e.target.id] = ''
        comprobarValues()
        return;
    }
    if(e.target.id === 'email' && !validarEmail(e.target.value)){
        mostrarAlerta(`El email no es valido`, e.target.parentElement);
        form[e.target.id] = ''
        comprobarValues()
        return;
    };

    form[e.target.id] = e.target.value.trim().toLowerCase();
    comprobarValues();


}

function mostrarAlerta(mensaje, referencia){
    let error = document.createElement('h1');
    error.textContent= mensaje
    error.classList.add("text-2xl", "bg-red-400","rounded-sm", "p-3");
    referencia.appendChild(error);
}

function limpiarAlerta(referencia){
    let alerta = referencia.querySelector('.bg-red-400')
    if(alerta){
        alerta.remove();
    }
}

function validarEmail(valor){
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    return regex.test(valor)
}

function comprobarValues(){

    if (Object.values(form).filter(valor => valor ==='').length > 0){
        btnSubmit.classList.add('opacity-50')
        btnSubmit.disabled = true;
    }
    else{
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }
}

function resetForm(){
    form.email=''
    form.asunto=''
    form.mensaje=''
    comprobarValues();
}

function resetValues(){
    inputEmail.value=''
    inputAsunto.value=''
    inputMensaje.value=''
}