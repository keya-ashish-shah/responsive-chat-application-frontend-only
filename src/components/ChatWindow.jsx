import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
    return (
        <div className="flex-1 flex flex-col justify-between">
            <div className="p-4 border-b font-semibold flex items-center bg-white">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-sm font-semibold">
                    EM
                </div>
                <div>
                    <div className="text-sm">Emma Thompson</div>
                    <div className="text-xs text-green-500">● Online</div>
                </div>
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
                <MessageBubble time="12:05 PM" sender="them">
                    Oh, I almost forgot - do you have the latest version of the client presentation?
                </MessageBubble>
                <MessageBubble time="12:15 PM" sender="me">
                    I’ve just sent it to your email. Let me know if you need anything else!
                </MessageBubble>
                <MessageBubble time="12:20 PM" sender="them">
                    Got it, thanks! I’ll review it before our lunch.
                </MessageBubble>
                <MessageBubble time="12:25 PM" sender="me">
                    Looking forward to it! 🔥
                </MessageBubble>
            </div>

            <div className="p-4 border-t flex bg-white">
                <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:ring focus:ring-blue-200"
                />
                <button className="ml-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 text-sm">
                    Send
                </button>
            </div>

        </div>
    );
}
