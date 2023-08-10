import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init()
    {
        this.events();
    }

     events()
     {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.validate(e);
        });
     }

     validate(e)
     {
        const el = e.target;
        const nome = el.querySelector('input[name="nome"]');
        const email = el.querySelector('input[name="email"]');
        const telefone = el.querySelector('input[name="telefone"]');

        let erroEmail = el.querySelector('.email');
        let erroTelefone = el.querySelector('.telefone');
        let erroNome = el.querySelector('.nome');

        erroEmail.innerHTML = '';
        erroTelefone.innerHTML = '';
        erroNome.innerHTML= '';
        let error = false;

        if(email.value && !validator.isEmail(email.value))
        {
         erroEmail.innerHTML += 'Email inválido!';
         error = true;
        }

        if(!nome.value)
        {
            erroNome.innerHTML += 'Nome é um campo obrigatório';
            error = true;
        }

        if(!telefone.value && !email.value)
        {
            erroEmail.innerHTML += 'Pelo menos um dos campos precisa ser enviado';
            erroTelefone.innerHTML += 'Pelo menos um dos campos precisa ser enviado';
            error = true;

        }
        
        if(!error) el.submit();
     }
    }

   