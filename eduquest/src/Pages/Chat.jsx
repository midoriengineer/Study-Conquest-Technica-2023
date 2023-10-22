import { useEffect, useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true  });


function Chat() {

    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hello, how can I help you focus on your studies today?",
            sender: "StudyConquest",
        }
    ])

    let splitMessages=[]

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "You",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage]

        setMessages(newMessages)
        setIsTyping(true)

        await handleMessage(newMessages)

    }

    async function handleMessage(chatMessages){

        let messagesFromApi = chatMessages.map((messageObj) => {
            let role =""
            if(messageObj.sender === "You"){
                role = "user"
            }else{
                role = "assistant"
            }
        return {role: role, content: messageObj.message}
        })

        const messageToSystem = {
            role: "system",
            content: 
                "Explain all concepts like I am a person who is diagnosed with ADHD and has a hard time focusing."
        }

        const requestToApi = {
            "model": "gpt-3.5-turbo",
            "messages": [messageToSystem,
                ...messagesFromApi],
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openai.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestToApi)
        }).then((res) => {return res.json()}).then((data) => {

            splitMessages = data.choices[0].message.content.split('\n')
        }
        )
        for(const message of splitMessages){
            await printMessages(message);
        }
        setIsTyping(false)
        splitMessages=[]

    }

    async function printMessages(message)
    {
        return new Promise(resolve => {
            setTimeout(() => {
                const newMessage = {message: message,
                    sender: "StudyConquest",
                    direction: "incoming"}
    
                    if (message.length > 0) {
                        setMessages((chatMessages) => [...chatMessages, newMessage])}

                resolve();
            }, 1000);
        });
    }


    return (
        <>
            <div style={{ position: "relative", height: "500px" }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="StudyConquest is typing"/> : null }>
                            {messages.map((message, i) => {
                                return (
                                    <Message key={i}
                                        model={message}
                                    />
                                )
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type your message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>
    )

} export default Chat;