import { Avatar } from "@mui/material";
import { useState } from "react";
import "./chatscreen.css";

const Chatscreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Maryam",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/C0DA/production/_84307394_d748dc3d-1c4f-4ba9-ab20-0a1f59223ddd.jpg",
      message: "what's up 🍎 ",
    },
    {
      name: "Maryam",
      image:
        "https://muslimvoice.com.ng/wp-content/uploads/2022/01/Screenshot_20220119-120015.png",
      message: "how far 💌 ?",
    },
    {
      message: "Hi, how are you Maryam💟 ?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MARYAM ON 1/9/2013
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Chatscreen;
