class Person{
    email:string;
    password:string;

    constructor(email:string, password:string){
        this.email = email;
        this.password = password;
    }
}

const personForm = document.querySelector('form');

personForm?.addEventListener('submit',e=>{
    e.preventDefault();
    const emailElem = document.querySelector('#email') as HTMLInputElement;
    const passwordElem = document.querySelector('#password') as HTMLInputElement;

    const person = new Person(emailElem.value, passwordElem.value);
    console.log(person);
});