import  renderToDOM from  './reder-to-dom.js'
import makeMessage from './make-message.js'

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk('Han pasado tres segundos');
  }, 3000);
})
module.exports = {
  firstMessage: 'hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message);
    renderToDOM(makeMessage(message))
  }
}