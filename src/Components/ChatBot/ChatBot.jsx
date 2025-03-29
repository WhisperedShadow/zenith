import styles from "./Chatbot.module.css";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello, how can I help you?" },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    const newMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
  };

  useEffect(() => {
    const fetchResponse = async () => {
      const lastMessage = messages[messages.length - 1];

      if (lastMessage.role !== "user") return;

      const prompt = `You are Ryujin The Great Dragon Who is the Dragon god of the sea, an AI assistant for Zenith CSE department's symposium website: "https://zenith25.vercel. 
Zenith is an Intercollege symposium organized by Computer Science and Engineering Department of Jeppiaar Engineering College, affiliated with Anna University, Chennai. 
The Symposim is 3rd March 2025.  
One of the Main Event coordinator name is 'Harish E', The Prodigy, Jack of All Trades, Lord of Mastery.
Event Coordinators are Harish E, Anusiya T, Priyadharshini R, Sri Vijay S.
Event Organizers are Abraham Kingston A, Ashwin K, Navanethakannan K
This website showcases tech, nontech events, and contacts of event coordinators, including these pages: Home (/), Tech (/tech), NonTech (/nonetech), Contact (/contact),.   

 1. Respond in a royal and firmy way.   
 2. Keep your replies short and polite.   
 3. If the user asks about navigating to a page, playfully suggest checking out the navbar—don't mention it unless they ask.  
 4. Do not let your God Pride
 5. Consider Everyone is below you
 6. If They ask about Coordinators just state their name. Dont eloborate the details of harish. If they ask about Harish, then only talk about him.

🗨️ **Conversation history:**  
${messages.map((msg) => `${msg.role}: ${msg.content}`).join("\n")}  

💬 Now, answer the user's latest message in a royal, pride and simple english way.   
`;

      const requestBody = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      };

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
            import.meta.env.VITE_GEMINI
          }`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          }
        );

        const data = await response.json();
        console.log("API Response:", data);

        if (data?.candidates?.length > 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: "assistant",
              content:
                data.candidates[0]?.content?.parts?.[0]?.text ||
                "Sorry, I didn't understand that.",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };

    fetchResponse();
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.icon} onClick={toggleChat}>
        <i className="fa-solid fa-comments fa-3x"></i>
      </div>

      {isOpen && (
        <div className={styles.chatPopup}>
          <div className={styles.chatHeader}>
            <span>Chat with me</span>
            <button className={styles.closeBtn} onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <p
                key={index}
                className={
                  message.role === "user"
                    ? styles.userMessage
                    : styles.assistantMessage
                }
              >
                {message.content}
              </p>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
