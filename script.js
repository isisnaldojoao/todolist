// Declarando variáveis
let inTodo      = document.getElementById("inTodo");
let text        = document.querySelector(".text");
let taskOptions = document.getElementById("taskOptions");

// Função para adicionar 
function add(){
    // Verificar o valor inválido inserido 
    if(inTodo.value == ""){
        alert("Por favor insira uma Tarefa")
        return;
    }
    //Chamar a função para criar uma lista ordenada
    create(inTodo.value,taskOptions);
    inTodo.value = "";
}

//Função para criar elementos (Textos, e seleção)
function create(){
    //Criando o elemento com o icone
    let newTask       = document.createElement("ul");
    newTask.innerHTML = `${inTodo.value} | ${taskOptions.value} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
    </svg>`;
    //Adicionando o elemento nó a outro nó
    text.appendChild(newTask);
    newTask.style.wordSpacing = "20px";
    inTodo.value = "";
    /*Chamar a função para deleter um elemento da lista*/
    newTask.querySelector("svg").addEventListener("click" , function(){
        remove(newTask)
    });
}

//Função para remover um nó dentro da list
function remove(newTask){
    newTask.remove();
}