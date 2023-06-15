import { useState, useEffect } from "react"

//ARRAY DE PRODUCTOS: 

const misProductos = [
    {nombre: "Pc Gamer", precio: 1500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Mouse", precio: 200},
]

//Función que retorna una promesa con un retraso de 2 segundos. 

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}

const AsyncAwait = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        console.log(getMisProductos());
        //Si hago esto puedo ver que la promesa esta pendiente. 
        //Esto ocurre porque el console.log se muestra antes de que pasn los dos segundos de retraso.

        //Entonces si yo quiero decirle a mi codigo "espera a que termine esta tarea antes de avanzar con la siguiente" utilizo la sintaxis "async await"

        //await = espera

        const pedirDatos = async () => {
            const respuestaDatos = await getMisProductos();
            setProductos(respuestaDatos);
        }

        pedirDatos();

    }, [])

  return (
    <div>
        <h2>Mis Productos usando Async Await</h2>
        {
            productos.map((producto, index) => {
                return (
                    <div key={index}>
                        <p>Nombre: {producto.nombre} </p>
                        <p>Precio: {producto.precio} </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AsyncAwait