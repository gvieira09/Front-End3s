const estoque = [
 {
    descricao : "Camisa Polo",
    cor : "Verde",
    perfil : "M",
    quantidade : 10
 },
 
 {
    descricao : "Camisa Polo",
    cor : "Amarela",
    perfil : "F",
    quantidade : 10
 },
 
 {
    descricao : "Camisa Polo",
    cor : "Azul",
    perfil : "M",
    quantidade : 30
 },

 {
    descricao : "Camisa Polo",
    cor : "Roxa",
    perfil : "F",
    quantidade : 10
 }
];

let totCamisetas = estoque.reduce((total, produto) => {

    return + produto.quantidade;

}, 0);

console.log(`Total de camisetas em estoque: ${totCamisetas}`);