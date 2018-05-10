import "./estilos.css";
import torreDeDios from './tdd.jpg'
import { firstMessage, delayedMessage } from './messaje.js';

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src',torreDeDios)
img.setAttribute('height',150)
img.setAttribute('width',300)

document.body.append(img)

console.log('hola mundo! desde webpack estoy dentro de la carpeta external')