/* Agrega una edad aleatoria a cada usuario.
Cada usuario tendrá una imagen asociada por ID (están en la carpeta assets/img) son extensión .jpeg
Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city 
spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)*/

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
console.log(apiUrl);
const listaUsuarios = document.getElementById('listaUsuarios');
function agregarEdad(){
    return Math.floor(Math.random()*50)+ 20;
}

function obtenerUsuarios()  {
    fetch(`${apiUrl}`)
    .then(response=>{
        if(!response.ok){
            throw new Error ('No fuciona la página')
        }
        return response.json();
    }).then (data=>{
        data.forEach(usuario => {
            const imprimirUsuario = document.createElement('div');
            const nuevosDatos ={
                edad: agregarEdad(),
                imagen: `./assets/img/${usuario.id}.jpeg`,
                direccion: `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
            }
            const datosUsuario = {...usuario,...nuevosDatos};
            console.log(datosUsuario);
            imprimirUsuario.innerHTML = `<div class="tarjeta">
            <img src="${datosUsuario.imagen}"/>
            <div class="cuadro-datos">
            Nombre: ${datosUsuario.name}<br>
            Edad: ${datosUsuario.edad}<br>
            Nick: ${datosUsuario.username}<br>
            Telefono: ${datosUsuario.phone}<br>
            Email: ${datosUsuario.email}</div>
            Compañía: ${datosUsuario.company.name}
            Direccion: ${datosUsuario.direccion}</div>`
            
            listaUsuarios.appendChild(imprimirUsuario);
        });
        
        
        })
        .catch(error =>{
            error = 'no se encuentra la pagina';
        })
    }
    obtenerUsuarios();