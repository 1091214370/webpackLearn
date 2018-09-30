import demo from './demo/index';

const commponent = () => {
  demo();
  let el = document.createElement('div');
  el.innerHTML = 'hello webpack';
  return el;
}
document.appendChild(commponent());