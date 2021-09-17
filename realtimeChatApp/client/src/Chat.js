import React, { useState } from "react";



function Chat({socket, username, room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const sendMessage = async () => {
        if (currentMessage !== "") {
          const messageData = {
            room: room,
            author: username,
            message: currentMessage,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
    
          await socket.emit("send_message", messageData);

        }
      };

    return (
        <div>
           <div className="chat-header">
                <p>Live Chat</p>   
            </div> 
           <div className="chat-body"></div>
           <div className="chat-footer">
               <input 
                type="text" 
                value={currentMessage}
                placeholder="Type something..." 
                onChange={(event) => {
                    setCurrentMessage(event.target.value);
                }}
               />
               <button onClick={sendMessage}> &larr; </button>
           </div>
        </div>
    )
}

export default Chat
