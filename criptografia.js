const bcrypt = require('bcrypt');

let senha = 'senha-123';

const saltRounds = 10;

const senhaCriptografada = bcrypt.hashSync(senha, saltRounds);

console.log('Senha original:', senha);
console.log('Senha Criptografada:', senhaCriptografada);

const senhaIncorreta = "senha";

const senhaValida = bcrypt.compareSync(senha, senhaCriptografada);

if (senhaValida) {
    console.log('Senha valida!');
}   else {
    console.log('Senha incorreta!');
}