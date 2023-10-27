// Elementos del DOM
const idiomaButton = document.querySelector(".idioma");
const diaNocheButton = document.querySelector(".form-check-input");

const elementsToTranslate = {
    spanishB: document.querySelector(".spanishB"),
    spanish: document.querySelector(".spanish"),
    english: document.querySelector(".english"),
    descripcionTitle: document.querySelector(".descripcion h1"),
    descripcion: document.querySelector(".descripcion p"),
    contacto: document.querySelector(".contactoText"),
    informacion: document.querySelector(".informacionText"),
    desarrollador: document.querySelector(".desarrollador"),
    globo: document.querySelector(".globo"),
    edad: document.querySelector(".edad h3"),
    proyectos: document.querySelector(".proyectoss"),
    ingles: document.querySelector(".nivelIngles h3"),
    proyectosdos: document.querySelector(".text-light ms-2 align-self-center fw-bold proyectosdos")
};

// Obtener preferencias de idioma y tema desde localStorage
var languagePreference = localStorage.getItem("languagePreference") || "ES";
var themePreference = localStorage.getItem("themePreference") || "light";

// Función para aplicar preferencias de idioma
function applyLanguagePreferences() {
    const isEnglish = languagePreference === "EN";

    elementsToTranslate.spanishB.classList.toggle("text-light", isEnglish);
    elementsToTranslate.english.classList.toggle("text-light", isEnglish);
    elementsToTranslate.descripcionTitle.innerHTML = isEnglish ? "Hello!! My name is Nicolas" : "Hola!! Soy Nicolas";
    elementsToTranslate.descripcion.innerHTML = isEnglish ?
        "I am a frontend developer. I'm good at CSS and HTML, as well as JavaScript. I love learning new things and experimenting with new technologies. I have a good eye for detail and always put my all into my work." :
        "Soy desarrollador frontend. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mí en mi trabajo.";
    elementsToTranslate.contacto.innerHTML = isEnglish ? "Contact" : "Contacto";
    elementsToTranslate.informacion.innerHTML = isEnglish ? "information" : "Información";
    elementsToTranslate.desarrollador.innerHTML = isEnglish ? "Software Developer" : "Desarrollador de Sofware";
    elementsToTranslate.globo.innerHTML = isEnglish ? "Talk to mi clon!!" : "Hablá con mi clon!!";
    elementsToTranslate.edad.innerHTML = isEnglish ? "Years Old" : "Años";
    elementsToTranslate.edad.innerHTML = isEnglish ? "Years Old" : "Años";
    elementsToTranslate.ingles.innerHTML = isEnglish ? "English Level" : "Nivel de ingles";
    elementsToTranslate.proyectos.innerHTML = isEnglish ? "Projects" : "Proyectos";
    elementsToTranslate.spanish.innerHTML = isEnglish ? "EN" : "ES";
}

// Función para aplicar preferencias de tema
function applyThemePreferences() {
    const isDarkTheme = themePreference === "dark";
    document.body.classList.toggle("dia", isDarkTheme);
    diaNocheButton.classList.toggle("bgSwitch", isDarkTheme);
}

// Eventos
idiomaButton.addEventListener("click", () => {
    languagePreference = languagePreference === "ES" ? "EN" : "ES";
    localStorage.setItem("languagePreference", languagePreference);
    applyLanguagePreferences();
});

diaNocheButton.addEventListener("click", () => {
    themePreference = themePreference === "light" ? "dark" : "light";
    localStorage.setItem("themePreference", themePreference);
    applyThemePreferences();
});

// Aplicar preferencias al cargar la página
applyLanguagePreferences();
applyThemePreferences();