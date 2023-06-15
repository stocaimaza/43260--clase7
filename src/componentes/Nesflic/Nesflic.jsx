import { useState, useEffect } from "react"

const Nesflic = () => {
    const [peliculas, setPeliculas] = useState([]); 
    const [busqueda, setBusqueda] = useState(""); 

    const MI_KEY = "c9f04fa4";

    useEffect( () => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search)
            })
            .catch(error => console.log(error))
    }, [busqueda])

    //Funcion para tomar el dato del formulario.

    const manejadorSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = "";
    }

  return (
    <div>
        <h1>Nesflic</h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" name="busqueda"/>
            <button type="submit"> Buscar </button>
        </form>

        <ul>
            {
                peliculas === undefined ? <h2> La película no esta disponible. Intente en Cuevana</h2> : peliculas.map(peli => {
                    return (
                        <li key={peli.imdbID}> <img src={peli.Poster} alt={peli.Title} /> {peli.Title} </li>
                    )
                })
            }
        </ul>

    </div>
  )
}

export default Nesflic