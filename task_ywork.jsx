import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const contacts = [
  { id: 1, name: "Emma Thompson", initials: "EM" },
  { id: 2, name: "Michael Johnson", initials: "MJ" },
  { id: 3, name: "Sophia Lee", initials: "SL" },
  { id: 4, name: "Robert Brown", initials: "RB" },
  { id: 5, name: "Amelia Wilson", initials: "AW" },
  { id: 6, name: "Daniel Martinez", initials: "DM" },
];

const dummyReplies = [
  "Thanks for the update!",
  "Got it, I'll check and get back to you.",
  "Sounds good!",
  "Let me know if you need anything else.",
];

export default function ChatApp() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    { from: "them", text: "Oh, I almost forgot - do you have the latest version of the client presentation?" },
    { from: "me", text: "I've just sent it to your email. It includes all the updates." },
    { from: "them", text: "Got it, thanks! I'll review it before our lunch." },
    { from: "me", text: "Looking forward to it! 🔥" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");
    setTimeout(() => {
      const reply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
      setMessages((prev) => [...prev, { from: "them", text: reply }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <div className="text-lg font-bold mb-4">Chats</div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${
              selectedContact.id === contact.id ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedContact(contact)}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
              {contact.initials}
            </div>
            <div>{contact.name}</div>
          </div>
        ))}
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 bg-white p-4 border-b z-10">
          <div className="font-semibold">{selectedContact.name}</div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 space-y-2 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[75%] p-2 rounded-xl text-sm ${
                msg.from === "me" ? "bg-blue-600 text-white self-end ml-auto" : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </ScrollArea>

        {/* Input */}
        <div className="flex items-center gap-2 p-4 border-t">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
}
