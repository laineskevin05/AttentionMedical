// Componente de react para el chat
import React from "react";
import "react-chat-elements/dist/main.css";
// MessageBox component
import { ChatItem } from "react-chat-elements";

const ChatComponent = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/3 h-[75vh]">
        <ChatItem
          avatar={
            "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          }
          alt={"Reactjs"}
          title={"Emma"}
          subtitle={"Puto"}
          date={new Date()}
          unread={0}
        />
        <ChatItem
          avatar={
            "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          }
          alt={"Reactjs"}
          title={"Jose"}
          subtitle={"Hello"}
          date={new Date()}
          unread={0}
        />
      </div>
      <div className="w-2/3">
        <div className="container mx-auto">
          <div className="w-full border rounded">
            <div>
              <div className="w-full">
                {/* Titulo del chat seleccionado */}
                <div className="relative flex items-center p-3 border-b border-gray-300">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />
                  <span className="block ml-2 font-bold text-gray-600">
                    Emma
                  </span>
                </div>
                {/* Mensajes del chat seleccionado */}
                <div className="relative w-full p-6 overflow-y-auto h-[75vh]">
                  <ul className="space-y-2">
                    {/* Mensaje del usuario */}
                    <li className="flex justify-end">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                          <div className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                            <span>Hello</span>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Mensaje del doctor */}
                    <li className="flex ">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                              hola
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Input de mensaje */}
                <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>

                  <input
                    type="text"
                    placeholder="Message"
                    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="Mensaje"
                    required
                  />

                  <button type="submit">
                    <svg
                      className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
