import { useState, useEffect } from "react"

const JSONPlace = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect( ()=> {
        //Puedo usar try y catch que me permite manejar un error. Si algo dentro del try falla el código continua en el catch. 

        try {
            const pedirUsuarios = async () => {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await respuesta.json();
                setUsuarios(data);
            }
            pedirUsuarios();
        } catch (error) {
                console.log(error);
        }
    }, [])
  return (
    <div>
        <h2>Usuarios: JSONPlaceHolder</h2>
        <ul>
            {
                usuarios.map(usuario => {
                    return (
                        <li key={usuario.id}> {usuario.name} </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JSONPlace