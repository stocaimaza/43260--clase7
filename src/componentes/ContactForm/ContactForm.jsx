import { useState } from "react"
import emailjs from "emailjs-com"


const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    //Función para enviar mensaje: 

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };


        emailjs.send(
            "service_eflczza",
            "template_q9gz75q",
            templateParams,
            "Mhky_Va2lcpSJ4let"
        )
            .then( () => {
                alert("Mensaje Enviado Correctamente!!");
            })
            .catch( () => {
                alert("Error!! Vamos a morir!");
            })

            setNombre("");
            setEmail("");
            setMensaje("");

    }

  return (
    <form onSubmit={enviarMensaje}>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <label htmlFor="">Mensaje</label>
        <textarea value={mensaje} onChange={(e)=> setMensaje(e.target.value)}></textarea>

        <button type="submit">Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm