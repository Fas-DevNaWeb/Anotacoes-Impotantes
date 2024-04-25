
 let an1 = 120;
 let an2 = 0;
 let an3 = 50;

    if(an1 <= 0 || an2 <= 0 || an3 <= 0){
        console.log('Não é um triângulo');
    }else if((an1 + an2 + an3) == 180){
        console.log('É um triângulo!');
    }else if((an1 + an2 + an3) > 180){
        console.log('Erro .....');
    }else if((an1 + an2 + an3) < 180){
        console.log('Não forma um triângulo.');
    }