const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// function authorBornIn1947() {
//   const pessoaNascidaEm1947 = books.find((pessoa) => pessoa.author.birthYear === 1947);
//   return pessoaNascidaEm1947.author.name;
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');

// // 2 - Retorne o nome do livro de menor nome
// function smallerName() {
//   let nameBook;
//   const livroComMenorNome = ((livro) => {
//     if(!nameBook || livro.name.length < nameBook.length) {
//       return nameBook = livro.name;
//     }
//   })
//   books.forEach(livroComMenorNome)
//   return nameBook;
// }

// assert.strictEqual(smallerName(), 'Duna');

// // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   return books.find((livro) => livro.name.length === 26)
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);

// //4 - Ordene os livros por data de lançamento em ordem decrescente.
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   return books.sort((a, b) => b.releaseYear - a.releaseYear );
// }

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((pessoa) => pessoa.author.birthYear >= 1901 && pessoa.author.birthYear <= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);