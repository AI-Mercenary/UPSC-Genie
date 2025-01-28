import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';

const ChatMessage = ({ message, type }) => {
  return (
    <div
      className={`${
        type === 'bot'
          ? 'bg-gray-800 text-white text-left'
          : 'bg-blue-500 text-white text-right'
      } p-3 rounded-lg max-w-[80%] mx-auto ${
        type === 'bot' ? 'self-start' : 'self-end'
      }`}
    >
      {message}
    </div>
  );
};

const AboutUs = () => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
    <h2 className="text-xl font-bold">About Us</h2>
    <p>
      UPSC GENIE is an innovative platform designed to assist students in their preparation for the UPSC exams. 
      We provide curated resources, tips, and strategies to simplify the complex process of UPSC preparation.
    </p>
    <p>
      Our mission is to offer personalized guidance and a comprehensive set of tools to make exam preparation 
      more efficient and effective for aspirants. Whether you are just starting or aiming to enhance your knowledge, 
      UPSC GENIE is here to support you every step of the way.
    </p>
  </div>
);

const ContactUs = () => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
    <h2 className="text-xl font-bold">Contact Us</h2>
    <p>
      For more information or inquiries, please reach out to us at <strong>contact@upscgenie.com</strong>.
    </p>
  </div>
);

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Toggle menu visibility
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is the bot's response", type: 'bot' },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleMenuItemClick = () => {
    setShowMenu(false); // Close the menu after an option is clicked
  };

  const toggleSection = (section) => {
    if (section === 'about') {
      setShowAboutUs(!showAboutUs);
      setShowContact(false); // Close contact section when opening About Us
    } else if (section === 'contact') {
      setShowContact(!showContact);
      setShowAboutUs(false); // Close About Us section when opening Contact Us
    } else if (section === 'menu') {
      setShowMenu(!showMenu); // Toggle menu visibility
      setShowAboutUs(false); // Close About Us section when menu is toggled
      setShowContact(false); // Close Contact Us section when menu is toggled
    }
  };

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 shadow-lg z-10">
          <h2
            className="text-xl font-bold cursor-pointer"
            onClick={() => toggleSection('menu')}
          >
            Menu
          </h2>
          <ul className="space-y-4 mt-4">
            <li>
              <button
                onClick={() => {
                  alert('Civil Service Examination');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                Civil Service Examination
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  alert('NDA Examination');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                NDA Examination
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  alert('SSB Examination');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                SSB Examination
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  alert('Other Government Exams');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                Other Government Exams
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  alert('Previous Papers');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                Previous Papers
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  alert('What is UPSC?');
                  handleMenuItemClick();
                }}
                className="w-full text-left py-2 hover:bg-gray-700 px-4 rounded-md"
              >
                What is UPSC?
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <header className="p-4 bg-gray-800 text-lg font-bold text-center">
          UPSC GENIE
        </header>

        {/* Buttons Container */}
        <div className="flex justify-between p-4">
          <button
            onClick={() => toggleSection('menu')}
            className="px-6 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 focus:outline-none"
          >
            Menu
          </button>

          <button
            onClick={() => toggleSection('about')}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            About Us
          </button>

          <button
            onClick={() => toggleSection('contact')}
            className="px-6 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 focus:outline-none"
          >
            Contact Us
          </button>
        </div>

        {/* Chatbox container */}
        <div className="flex-grow flex justify-center items-end pb-10">
          <div className="chat-container bg-gray-900 text-white shadow-lg rounded-lg w-full max-w-lg flex flex-col">
            {/* Chat messages area */}
            <div className="flex-1 h-[300px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg.text} type={msg.type} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input container */}
            <div className="p-4 bg-gray-800">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display About Us or Contact Us Section */}
        {showAboutUs && <AboutUs />}
        {showContact && <ContactUs />}
      </div>
    </div>
  );
}

export default App;
