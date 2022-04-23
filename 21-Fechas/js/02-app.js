// Momentjs la mejor manera de trabajar fechas
const fecha = new Date();


moment().locale('es')

console.log(moment().format('D-M-Y H:m:s')); // D dias, M meses, Y años, h horas, m minutos, s segundos

console.log(moment().format('L'));

console.log(moment().add(3, 'Days').calendar()) // para sacar 3 dias al futuro, generalmente se usa para avisar cunado se vencera un cupón entre otras cosas
