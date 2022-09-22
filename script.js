var app = new Vue({
  el: '#app',
  data: {
    contador: 0,
    message: 'Hola Vue!',
    mostrarBoton: false,
    codigoHtml: '<h1>Titulo de pagina </h1>',
    estaChequeado: false
  }
})

setTimeout(()=> {
  app.codigoHtml = '<h3>No te duermas</h3>'
}, 2000);

setTimeout(()=> {
  app.codigoHtml = '<h1>Titulo de pagina </h1>'
}, 4000);
