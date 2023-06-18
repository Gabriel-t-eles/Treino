
const precoGasolina = 5.79;
const precoEtanol =3.50
const kgPorLitro = 10;
const distanciaKg = 100;
const tipoCombustivel = 'Etanol';

const gasolina = (distanciaKg / kgPorLitro) * precoGasolina;
const etanol = (distanciaKg / kgPorLitro) * precoEtanol;



if(tipoCombustivel === 'Etanol'){
    console.log(etanol.toFixed(2));
}else if(tipoCombustivel === 'Gasolina'){
    console.log(gasolina.toFixed(2));
}else{
    console.log('Informe o Tipo de Combunstivel');
}



