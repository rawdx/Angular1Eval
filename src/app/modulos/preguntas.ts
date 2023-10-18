import { Pregunta } from "./pregunta";

export const PREGUNTAS:Pregunta[] = [
    {pregunta: "¿Cómo se define TypeScript?", respuesta: ""},
    {pregunta: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?", respuesta: "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases."},
    {pregunta: "Muestra la lista de tipos básicos de TypeScript.", respuesta: "null, undefined, boolean, number, string, Array, enum, any y never."},
    {pregunta: "¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?", respuesta: "interface, type y class"},
    {pregunta: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.", respuesta: "Dado que ts es un lenguaje compilado, no es soportado por los navegadores, primero se tiene que transpilar el código a js cada vez que se quiera ver."},
    {pregunta: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?", respuesta: "Con los Source Maps que mapean el codigo js de vuelta a ts permitiendo visualizar ts en el navegador."},
    {pregunta: "¿Para qué sirve el archivo tsconfig.json?", respuesta: "Sirve para definir y especificar las opciones de configuración y comportamiento del compilador de TypeScript (tsc)."}
]