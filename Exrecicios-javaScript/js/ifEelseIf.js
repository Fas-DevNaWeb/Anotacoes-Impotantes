
let currentHour = 6;
let message;

if (currentHour >= 22){
    message = 'Não deveriamos comer nada hora de dormir.';
    console.log(message);
}else if(currentHour >= 18){
    message = 'Rango da noite, vamos jantar.'
    console.log(message);
}else if(currentHour >= 14){
    message = 'Vamos fazer um bolopara o cafá da tarde?';
    console.log(message);
}else if(currentHour >= 4 & currentHour <= 11){
    message = 'Cheiro de café recém-passado';
    console.log(message);
}