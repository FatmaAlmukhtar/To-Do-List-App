let addToDoButton = document.getElementById('btn');
let toDoContainer = document.getElementById('todo-list');
let inputField = document.getElementById('input-field');
let d = document.querySelector('h5');

window.addEventListener('load', function() {
   
    var today = new Date();
    today = today.toDateString();
    d.innerHTML = today;
})


addToDoButton.addEventListener('click', function(){
    if(inputField.value){
        const entry = inputField.value;

		const entry_div = document.createElement('div');
		entry_div.classList.add('todo');

		const inputs = document.createElement('div');
		inputs.classList.add('inputs');

		entry_div.appendChild(inputs);

		const entry_chk = document.createElement('input');
		entry_chk.classList.add('entry');
		entry_chk.type = 'checkbox';

        const label = document.createElement('label')
        label.htmlFor = 'checkbox';
        label.appendChild(document.createTextNode(entry));
		

		inputs.appendChild(entry_chk);
        inputs.appendChild(label);
		
        const cancel = document.createElement('button');
		cancel.classList.add('cancel');
        cancel.innerText = 'cancel';

        entry_div.appendChild(inputs);
        entry_div.appendChild(cancel);
        toDoContainer.appendChild(entry_div);

		inputField.value = '';
        
        cancel.addEventListener('click', function() {
            toDoContainer.removeChild(entry_div);
        })

    }else{
        alert('Please write an entry in the input field!');
    }
    
})

