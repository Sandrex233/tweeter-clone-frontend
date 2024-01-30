import React, { useState } from 'react'
import Modal from 'react-modal';


const GroupChatModal = ({ isOpen, closeModal, createChannel }) => {
    const [channelName, setChannelName] = useState('');
    const [channelDescription, setChannelDescription] = useState('');
  
    const handleCreateChannel = () => {
      // Call your backend API to create the channel
      createChannel({ name: channelName, description: channelDescription });
  
      // Reset fields and close the modal
      setChannelName('');
      setChannelDescription('');
      closeModal();
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Create Group Channel</h2>
        <label>
          Channel Name:
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
        </label>
        <label>
          Channel Description:
          <textarea
            value={channelDescription}
            onChange={(e) => setChannelDescription(e.target.value)}
          />
        </label>
        <button onClick={handleCreateChannel}>Create Channel</button>
      </Modal>
    );
}

export default GroupChatModal