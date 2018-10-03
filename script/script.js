const botao = document.querySelector('.transacao__button');

botao.addEventListener('click', function(event){
event.preventDefault();

const tabela = document.querySelector('.extrato__table');

const linha = document.createElement('tr');

const inputNome = document.getElementById('transacaoInputName');
const inputMoney = document.getElementById('transacaoInputMoney');
const inputDate = document.getElementById('transacaoInputDate');

const colunaNome = document.createElement('td');
const colunaNomeTexto = document.createTextNode(inputNome.value);
colunaNome.appendChild(colunaNomeTexto);

const colunaMoney = document.createElement('td');
const colunaMoneyTexto = document.createTextNode(inputMoney.value);
colunaMoney.appendChild(colunaMoneyTexto);

const colunaDate = document.createElement('td');
const colunaDateTexto = document.createTextNode(inputDate.value);
colunaDate.appendChild(colunaDateTexto);

linha.appendChild(colunaNome);
linha.appendChild(colunaMoney);
linha.appendChild(colunaDate);

tabela.appendChild(linha);


})
