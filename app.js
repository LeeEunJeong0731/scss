const pokemon = require("pokemon");
// console.log(pokemon.all("ko"));
const test = pokemon.all("ko");
let HTMLLi = "<ul>" + "<li>" + [test] + "</li>" + "</ul>";

let fs = require("fs");
let data = HTMLLi;
fs.writeFileSync("test.html", data);

//? test 리턴 보니까 배열
