import throttle from 'lodash.throttle';
import { FormDataStorage } from './form-data';

const THROTTLE_PERIOD = 500;
const formData = new FormDataStorage('.feedback-form', 'feedback-form-state');
const form = formData.target;

// делаем оба поля обязательными (вместо вывода alert)
form.email.setAttribute('required', '');
form.message.setAttribute('required', '');

// заполняем форму из хранилища
formData.restore();

form.addEventListener(
  'input',
  throttle(() => formData.save(), THROTTLE_PERIOD)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  formData.log();
  formData.clear();
});
