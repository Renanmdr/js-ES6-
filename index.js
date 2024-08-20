/* const numeros = [1, 2,3 ,4];

const [primeiro, segundo, terceiro, quarto] = numeros;

console.log(primeiro, segundo, terceiro, quarto)

let a = 10;
let b = 20;

[a, b] = [b, a]

console.log(a,b)

const numeros2 = [1, 2,3 ];

const numerosCom4E5 = [...numeros2, 4, 5]

console.log(numerosCom4E5)

const [dez, vinte, ...resto] = [10, 20, 30, 40 ,50]

console.log(dez)
console.log(vinte)
console.log(resto) */


const numeros = [1,2,3,4,5]

const [a, b,c,d,e] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


let n1 = 5;
let n2 = 10;

[n1, n2] = [n2, n1]

console.log(n1,n2)

const melhoresSeriesDoMundo = ['GOT', 'Breaking Bad', 'Vikings']

const adicionandoSeries = [...melhoresSeriesDoMundo, 'The last of us', 'Strange Things']

console.log(adicionandoSeries)


const sobremesas = ['Sorvete', 'Petit Gateau', 'açai', 'Pudim', 'Chocolate']

const [opção1, opção2, ...outrasSobremesas] = sobremesas

console.log(outrasSobremesas)


const usuario = {
   primeiroNome: "Renan",
   Sobrenome: "Mattar",
   idade: 30, 
}

const {primeiroNome: nome, Sobrenome, idade} = usuario



console.log(usuario)


const {f, g, ...restante} = {f: 1, g: 2, h:3, i: 4}

console.log(f, g)
console.log(restante)

const {w, y, z = 30} = {w:10, y:20}

console.log(w)


const viking = {
   familia: 'Lothbrok',
   tamanhoDaBarba: 'enorme',
   idade2: 30
};

const {familia, tamanhoDaBarba, idade2} = viking

console.log(familia, tamanhoDaBarba, idade2)


const usuario2 = {
   name: "Renan",
   age: 31
};

const {age: idade3, name: nome2} = usuario2

const piloto = {
   dadosPessoais: {
      nome: "Renan",
      idade: 31
   },
   dadosProfissionais: {
      categoria: "Formula 1",
      conquistas: "É o melhor de todos os tempos"

   }
}

const {  dadosPessoais: {nome: _name, idade: _idade}, dadosProfissionais: {categoria, conquistas}} = piloto

console.log(_name, _idade, categoria, conquistas)


const obj = {h:10, i:20, j:30, k:40}

const {h, i, ...sobra} = obj

console.log(h, i)
console.log(sobra)