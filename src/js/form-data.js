export class FormDataStorage {
  #key;

  constructor(formSelector, key) {
    this.target = document.querySelector(formSelector);
    this.#key = key;
  }

  get() {
    const email = this.target.email.value.trim();
    const message = this.target.message.value.trim();

    return (
      (email || message) && {
        email,
        message,
      }
    );
  }

  save() {
    const formData = this.get();
    if (formData) localStorage.setItem(this.#key, JSON.stringify(formData));

    return this;
  }

  restore() {
    const formData = JSON.parse(localStorage.getItem(this.#key) || 'null');

    if (formData) {
      const { email, message } = this.target;
      email.value = formData.email;
      message.value = formData.message;
    }

    return this;
  }

  clear(resetTarget = true) {
    if (resetTarget) this.target.reset();
    localStorage.removeItem(this.#key);

    return this;
  }

  log() {
    const formData = this.get();
    if (formData) console.log(formData);

    return this;
  }
}
