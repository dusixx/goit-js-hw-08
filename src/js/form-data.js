export class FormDataStorage {
  #key;

  constructor(formSelector, key) {
    this.target = document.querySelector(formSelector);
    this.#key = key;
  }

  get() {
    const { email, message } = this.target;
    // если не заполнен email - данные не валидны
    return (
      email.value && {
        email: email.value,
        message: message.value,
      }
    );
  }

  save() {
    const formData = this.get();
    if (formData) localStorage.setItem(this.#key, JSON.stringify(formData));
  }

  restore() {
    const formData = JSON.parse(localStorage.getItem(this.#key) || 'null');

    if (formData) {
      const { email, message } = this.target;
      email.value = formData.email;
      message.value = formData.message;
    }
  }

  clear(resetTarget = true) {
    if (resetTarget) this.target.reset();
    localStorage.removeItem(this.#key);
  }

  log() {
    const formData = this.get();
    if (formData) console.log(formData);
  }
}
