import { useEffect, useState, useRef } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import chicky from "../assets/chickyai.png";
import {FaArrowLeft} from "react-icons/fa";
import {GrMoreVertical} from "react-icons/gr";
import {BiMicrophone} from "react-icons/bi";
import { Link } from "react-router-dom";

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

function Chat() {

    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hello, how can I help you focus on your studies today?",
            sender: "StudyConquest",
        }
    ])

    let splitMessages = []

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

    async function handleMessage(chatMessages) {

        let messagesFromApi = chatMessages.map((messageObj) => {
            let role = ""
            if (messageObj.sender === "You") {
                role = "user"
            } else {
                role = "assistant"
            }
            return { role: role, content: messageObj.message }
        })

        const messageToSystem = {
            role: "system",
            content:
                "Explain all concepts, terms, and context concisely. Use only short sentences. Do not write long messages. Three sentences max. Pretend I am a person who is diagnosed with ADHD and have a hard time focusing. I need specialized help with my studies but please also be casual when speaking with me. You are my virtual tutor."
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
        }).then((res) => { return res.json() }).then((data) => {
            splitMessages = data.choices[0].message.content.split('\n')
        }
        )
        for (const message of splitMessages) {
            await printMessages(message);
        }
        setIsTyping(false)
        splitMessages = []

    }

    async function printMessages(message) {
        return new Promise(resolve => {
            setTimeout(() => {
                const newMessage = {
                    message: message,
                    sender: "Quicki",
                    direction: "incoming"
                }

                if (message.length > 0) {
                    setMessages((chatMessages) => [...chatMessages, newMessage])
                }

                resolve();
            }, 1000);
        });
    }


    return (
        <>
            <div style={{ position: "relative", height: "550px", backgroundColor: "#F8F8F8"}}>
            <div className="row" style={{padding: "10px 0"}}>
                <div className="col chat arrow"><Link to="/"><FaArrowLeft fill="#FEB800" /></Link></div>
                <div className="col"><img src={chicky} style={{ width: "100px"}}/></div>
                <div className="col chat more"><GrMoreVertical fill="#FE8900" /></div>
                </div>

                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="Quicki is typing" /> : null}>
                            {messages.map((message, i) => {
                                return (
                                    <><Message key={i}
                                        model={message}
                                    /><span className={ message.sender === "You" ? "triangle-user" : "triangle-chat"}></span></>
                                )
                            })}
                        </MessageList>
                        <MessageInput placeholder={"Type your message here"} onSend={handleSend} attachButton={false} />
                        

                    </ChatContainer>
                </MainContainer>
            </div>
            
        </>
    )

} export default Chat;