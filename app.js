//nos hacemos una lista con todas las class="section" (existen cinco )
const secciones = document.querySelectorAll('.section');//6
//lista de objetos de  class="controls". (solo hay uno)
const seccionControles = document.querySelectorAll('.controls');//1
//lista de objetos de class="control" (hay 4)
const seccionBoton = document.querySelectorAll('.control'); //4
//seccion de todo el body class="main-content"
const seccionBody = document.querySelector('.main-content');//1
let element = document.body;
element.classList.toggle('light-mode');


function transicionPagina(){
       
    //cambiamos el color del boton al hacer click
        for(let i = 0; i < seccionBoton.length; i++){
            seccionBoton[i].addEventListener('click', function(){
                let actualBoton = document.querySelectorAll('.active-btn');
                actualBoton[0].className = actualBoton[0].className.replace('active-btn', '');
                seccionBoton[i].className += ' active-btn'; //this.className += ' active-btn' 
            })
        }
    
    //section active class
    seccionBody.addEventListener('click', (e) =>{

        const id = e.target.dataset.id;
        if(id){
            //borramos la clase active de algunos de los botones por si existe
            seccionControles.forEach((btn) =>{
                btn.classList.remove('active');
            })

            //añadimos la class="active" al boton presionado
            e.target.classList.add('active');
            
            //ocultamos las demás secciones
            //1er paso: borrar la class active del resto de secciones
            secciones.forEach((section) =>{
                section.classList.remove('active');
            });

            //2do paso: añadir la class active al boton presionado
            const element = document.getElementById(id);
            element.classList.add('active');

        }
    });

    //Boton del tema
    const temaBoton = document.querySelector('.theme-btn');
    temaBoton.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}

transicionPagina();