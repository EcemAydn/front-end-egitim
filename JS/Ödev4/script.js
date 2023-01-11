
let fname = document.querySelector('#fname');
let surname = document.querySelector('#surname');
let number = document.querySelector('#number');
let age = document.querySelector('#age');
let class1 = document.querySelector('#class1');
let parent = document.querySelector('#parent');
let numberDel= document.querySelector('#numberDel');
let yazdir = document.querySelector('.yazdir');

let students = [];

if(localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
}

function btnSave(){

    if(fname.value === "" || surname.value === "" || number.value === "" || age.value === "" || class1.value === "" || parent.value === ""){
        alert('Lutfen her alanı doldurun!!');
    } else{        
        const student = {
            name: fname.value,
            surname: surname.value,
            number: number.value,
            age: age.value,
            class: class1.value,
            parent: parent.value
        };
        
        const yaz = students.find((a)=>{
            return a.number === student.number;
        })

        let bilmem= '';
        if(yaz){
            bilmem =alert('Bu numara daha once girildi.');
        } else {
            students.push(student);
            bilmem =alert('kayıt basarili');

        }
        

        fname.value = "";
        surname.value =  "";
        number.value = "";
        age.value = "";
        class1.value = "";
        parent.value = "";
        localStorage.setItem('students', JSON.stringify(students));
        btnShow();

    }

}

function btnShow(){
    const list = document.querySelector('.liste');
    list.innerHTML='';

    students.forEach((a) => {
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const surname = document.createElement('td');
        const number = document.createElement('td');
        const age = document.createElement('td');
        const class1 = document.createElement('td');
        const parent = document.createElement('td');

        tr.appendChild(name);
        tr.appendChild(surname);
        tr.appendChild(number);
        tr.appendChild(age);
        tr.appendChild(class1);
        tr.appendChild(parent);

        name.innerHTML = a.name;
        surname.innerHTML = a.surname;
        number.innerHTML = a.number;
        age.innerHTML = a.age;
        class1.innerHTML = a.class;
        parent.innerHTML  = a.parent;
        
        list.appendChild(tr);
    });
}

function btnDelete(){

    const bla= students.findIndex((a)=>{
       return numberDel.value ===  a.number;
    })
    
    if(typeof bla === 'number'){
        students.splice(bla, 1);
        dene= alert('silindi');
        localStorage.setItem('students', JSON.stringify(students));

    } else{
        dene= alert('bulunamadı');
        
    }
    
    btnShow()
    
}


