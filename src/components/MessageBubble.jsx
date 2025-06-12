export default function MessageBubble({ children, sender, time }) {
  const isMe = sender === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} px-4`}>
      <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg text-sm shadow-sm 
        ${isMe ? "bg-blue-500 text-white ml-16" : "bg-gray-200 text-black mr-16"}`}>
        <p>{children}</p>
        <p className="text-xs mt-1 text-right opacity-70">{time}</p>
      </div>
    </div>
  );
}
