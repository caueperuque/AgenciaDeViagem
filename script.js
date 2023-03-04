//Viagem para Maldivas
const getValueInput = document.getElementById('maldivas-1');
const getContainerMaldivas = document.querySelector('.container-maldivas');

const addPrice = () => {
  const getH3maldivas = document.getElementById('maldivas-price')
  const result = Number(getValueInput.value) * 8870;
  getH3maldivas.innerText = `R$${result},00`;
};

getValueInput.addEventListener('click', addPrice);

// Viagem para paris
const getValueInput1 = document.getElementById('paris-1');
const getContainerParis = document.querySelector('.container-paris');

const addPrice1 = () => {
  const getH3paris = document.getElementById('paris-price')
  const result = Number(getValueInput1.value) * 7500;
  getH3paris.innerText = `R$${result},00`;
};

getValueInput1.addEventListener('click', addPrice1);

//Viagem para Tóquio;
const getValueInput2 = document.getElementById('tokyo-1');
const getContainertokyo = document.querySelector('.container-tokyo');

const addPrice2 = () => {
  const getH3tokyo = document.getElementById('tokyo-price')
  const result = Number(getValueInput2.value) * 6800;
  getH3tokyo.innerText = `R$${result},00`;
};

getValueInput2.addEventListener('click', addPrice2);

//Viagem para Grécia;
const getValueInput3 = document.getElementById('grecia-1');
const getContainergrecia = document.querySelector('.container-grecia');

const addPrice3 = () => {
  const getH3grecia = document.getElementById('grecia-price')
  const result = Number(getValueInput3.value) * 5900;
  getH3grecia.innerText = `R$${result},00`;
};

getValueInput3.addEventListener('click', addPrice3);