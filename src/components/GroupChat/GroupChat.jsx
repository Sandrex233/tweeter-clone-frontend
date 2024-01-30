import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client/dist/sockjs";
import { over } from "stompjs";
import GroupChatModal from "./GroupChatModal";
import { request } from "../../helpers/axios_helper";

var stompClient = null;
const GroupChat = ({ setComponentToShow }) => {
  //   const [messages, setMessages] = useState([]);
  //   const [messageInput, setMessageInput] = useState("");
  //   const [channelId, setChannelId] = useState(""); // State to store the channel ID

  //     const connectToWebSocket = async () => {
  //       try {
  //         let socket = new SockJS("http://localhost:8080/chat-websocket");
  //         stompClient = over(socket);
  //         stompClient.connect({},onConnected, onError);
  //       } catch (error) {
  //         console.error("Error connecting to WebSocket:", error);
  //       }
  //     };

  // const onConnected = () => {

  // }

  //   const createChannel = () => {
  //     // Use a unique identifier as the channel ID (you can generate it on the server as well)
  //     const newChannelId = `channel-${Math.random().toString(36).substring(7)}`;

  //     // Subscribe to the new channel-specific topic
  //     socket.subscribe(`/topic/chat/${newChannelId}`, (message) => {
  //       const newMessage = JSON.parse(message.body);
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     });

  //     // Set the new channel ID in the state
  //     setChannelId(newChannelId);

  //     // Inform the server about the new channel
  //     socket.send(
  //       "/app/create/channel",
  //       {},
  //       JSON.stringify({ channelId: newChannelId })
  //     );
  //   };

  //   const sendMessage = () => {
  //     // Send the message to the channel-specific topic
  //     socket.send(
  //       `/app/chat/${channelId}/send`,
  //       {},
  //       JSON.stringify({ content: messageInput })
  //     );
  //     setMessageInput("");
  //   };

  //   return (
  //     <div>
  //       <h2>Group Chat</h2>
  //       <button onClick={createChannel}>Create Channel</button>
  //       <div>
  //         {messages.map((message, index) => (
  //           <div key={index}>{message.content}</div>
  //         ))}
  //       </div>
  //       <div>
  //         <input
  //           type="text"
  //           placeholder="Type your message"
  //           value={messageInput}
  //           onChange={(e) => setMessageInput(e.target.value)}
  //         />
  //         <button onClick={sendMessage}>Send Message</button>
  //       </div>
  //     </div>
  //   );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createChannel = (channelData) => {
    request("POST", "/channel", channelData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={openModal}>Create Group Channel</button>
      <GroupChatModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        createChannel={createChannel}
      />
    </div>
  );
};

export default GroupChat;
