// Verificar si mi navegador soporta serviceWorker
if('ServiceWorker' in navigator) {
   navigator.serviceWorker.register('./sw.js').then((registro) => {
    console.log('Se instalo correctamente', registro)
   }).catch((error) => {
    console.log(error)
   })
} else {
    console.log('No soportado')
}