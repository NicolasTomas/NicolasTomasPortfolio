const idioma = document.querySelector(".idioma")
const spanish = document.querySelector(".spanish")
const spanishB = document.querySelector(".spanishB")
const english = document.querySelector(".english")
const descripcionTitle = document.querySelector(".descripcion h1")
const descripcion = document.querySelector(".descripcion p")
const edad = document.querySelector(".edad h3")
const diaNoche = document.querySelector(".diaNoche div input")
const bodyBackground = document.querySelector("body")
const proyectos = document.querySelector(".proyectoss")
const ingles = document.querySelector(".nivelIngles h3")
const grados = document.querySelector(".temperatura .datos div h2")
const proyectosdos = document.querySelector(".text-light ms-2 align-self-center fw-bold proyectosdos")
const globo = document.querySelector(".globo")
const desarrollador = document.querySelector(".desarrollador")
const contacto = document.querySelector(".contactoText")
const informacion = document.querySelector(".informacionText")


// const apiKey = "c3da08f04c2891a60c89940b57447055"
// const apiUrl = ""
// const APIkey = "1af85e2a3dff54f33971ada62d308710"
// fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Rosario`)
//     .then(el => el.json())
//     .then(res => {
//         console.log(res)
//         grados.innerHTML = `${res.temperature
//             }`
//     }
//     )






grados.innerHTML
idioma.addEventListener("click", () => {
    spanishB.classList.toggle("text-light")
    english.classList.toggle("text-light")
    descripcion.classList.toggle("languageChange")

    descripcionTitle.innerHTML === "Hello!! My name is Nicolas" ? descripcionTitle.innerHTML = "Hola!! Soy Nicolas" : descripcionTitle.innerHTML = "Hello!! My name is Nicolas";

    spanish.innerHTML === "ES" ? spanish.innerHTML = "EN" : spanish.innerHTML = "ES"


    contacto.innerHTML === "Contacto" ? contacto.innerHTML = "Contact" : contacto.innerHTML = "Contacto"
    informacion.innerHTML === "Información" ? informacion.innerHTML = "information" : informacion.innerHTML = "Información"
    desarrollador.innerHTML === "Desarrollador de Sofware" ? desarrollador.innerHTML = "Software Developer" : desarrollador.innerHTML = "Desarrollador de Sofware"
    globo.innerHTML === "Habla con mi clon!!" ? globo.innerHTML = "Talk to mi clon!!" : globo.innerHTML = "Habla con mi clon!!"



    if (descripcion.className === "fs-3 ms-3 present languageChange") {
        descripcion.innerHTML = "I am a frontend developer with experience in React. I'm good at CSS and HTML, as well as JavaScript. I love learning new things and experimenting with new technologies. I have a good eye for details and always put my all into my work."
    } else {
        descripcion.innerHTML = "Soy desarrollador frontend con experiencia en React. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo."
    }

    edad.innerHTML === "Años" ? edad.innerHTML = "Years Old" : edad.innerHTML = "Años"
    proyectos.innerHTML === "Proyectos" ? proyectos.innerHTML = "Projects" : proyectos.innerHTML = "Proyectos"
    ingles.innerHTML === "Nivel de ingles" ? ingles.innerHTML = "English level" : ingles.innerHTML = "Nivel de ingles"

    proyectosdos.innerHTML === "Proyectos" ? proyectosdos.innerHTML = "Projects" : proyectosdos.innerHTML = "Proyectos";


}
)



diaNoche.addEventListener("click", () => {

    bodyBackground.classList.toggle("dia")
    diaNoche.classList.toggle("bgSwitch")
}
)



