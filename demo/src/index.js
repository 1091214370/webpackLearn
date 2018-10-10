import demo from './demo/index';
// import './style/style.css';
import './style/style.less';

const commponent = () => {
  demo();
  let el = document.createElement('div');
  el.innerHTML = 'hello webpack';
  return el;
}
document.appendChild(commponent());