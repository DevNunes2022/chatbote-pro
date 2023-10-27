const chatbot_dt = document.querySelector(".chatbot")
const chatInput = document.querySelector(".chat-input textarea"); 
const sendChatBtn = document.querySelector("#send-btn"); 

let userMessage;

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
}

sendChatBtn.addEventListener("click", ()=> renderUserMessage());

const renderUserMessage = () => {
    chatInput = textInput.value; 
    renderUserMessageEle(userInput);
}; 

const renderUserMessageEle () => {
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add("user-message");
    messageEle.append(txtNode);
    chatbot_dt.append(messageEle);

}