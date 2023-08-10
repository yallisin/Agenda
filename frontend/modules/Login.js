import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }


init() {
    this.events();
}

events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.validate(e);
    });
}

validate(e) {
 const el = e.target;
 const emailInput = el.querySelector('input[name="email"]');
 const passwordInput = el.querySelector('input[name="password"]');
 let senha = el.querySelector('.senha');
 let email = el.querySelector('.email');
 let error = false;

 email.innerHTML ='';
 senha.innerHTML ='';
 
 if(!validator.isEmail(emailInput.value)) {
    email.innerHTML +='Email inválido';
    error = true;
 }

 if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
    senha.innerHTML +='Senha precisa ter entre 3 e 50 caracteres.';
    error = true;
 }
  if(!error) el.submit();

 

}

}