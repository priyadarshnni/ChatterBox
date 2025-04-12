import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Coversations = () => {
  const { loading, conversations } = useGetConversations();

  // ✅ Debugging: Check if conversations is an array before mapping
  console.log("Conversations:", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Array.isArray(conversations) && conversations.length > 0 ? (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversations.length - 1} // ✅ Fixed this reference
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No conversations available.</p>
      )}

      {loading && <span className="loading loading-spinner"></span>}
    </div>
  );
};

export default Coversations;
