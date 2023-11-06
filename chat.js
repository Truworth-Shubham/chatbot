const sendBtn = document.querySelector(".send-button");
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let array = ["How can i assist you today?","Yes i am a chatbot how may i assist you","Chatbot is a computer program designed to simulate conversation with human users, especially over the internet.","hello 4"];
let count = 0;
let userMessage = "";

function addList (inputMessage,classname) {
    let ul = document.querySelector(".chat-box ul");
    let li = document.createElement('li');
    li.setAttribute("class",classname);
    let messageText = document.createElement('p');
    messageText.innerHTML = `${inputMessage.value}`
    ul.appendChild(li);
    li.appendChild(messageText);
    document.querySelector(".chat-input input").value = "";
    let chatBotmsg = document.createElement('li');
    let botText = document.createElement('p');
    chatBotmsg.setAttribute('class',"message incoming")
    setTimeout(()=>{
        botText.innerText = count < array.length ? array[count] : generateString(5)
    },2000)
    botText.innerText = "Thinking..."
    chatBotmsg.appendChild(botText)
    ul.appendChild(chatBotmsg)
    count++
    generateResponse()
}

sendBtn.addEventListener('click',()=>{
    userMessage = document.querySelector(".chat-input input");
    addList(userMessage, "message outgoing"); 
})



function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  console.log(result)
    return result;
}


