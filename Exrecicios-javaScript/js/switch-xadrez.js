let pecaXadrez = "rei";

switch (pecaXadrez) {
  case "peão":
    console.log("Movimenta-se Frente.");
    break;
  case "cavalo":
    console.log("Movimenta-se Horizontal.");
    break;
  case "bispo":
    console.log("Movimenta-se Diagonais.");
    break;
  case "torre":
    console.log("Movimenta-se Horizontal ou vertical.");
    break;
  case "dama":
    console.log("Movimenta-se Diagonal,Horizontal,Retas,Verticais.");
    break;
  case "rei":
    console.log("Movimenta-se Uma casa por ves em qualquer direção.");
    break;
}
