const users = [
  { initials: "EM", name: "Emma Thompson", time: "12:45 PM", message: "I’ve sent the last project f..." },
  { initials: "MJ", name: "Michael Johnson", time: "Yesterday", message: "Are we still meeting for coffe..." },
  { initials: "SL", name: "Sophia Lee", time: "Yesterday", message: "The design team loved your pre..." },
  { initials: "RB", name: "Robert Brown", time: "May 28", message: "Can you review the budget prop..." },
  { initials: "AW", name: "Amelia Wilson", time: "May 27", message: "Thanks for your help with the cli..." },
  { initials: "DM", name: "Daniel Martinez", time: "May 25", message: "Let’s schedule a call to discus..." },
];

export default function Sidebar() {
  return (
    <div className="w-1/3 border-r overflow-y-auto p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      {users.map((user, index) => (
        <div key={index} className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-sm font-semibold">
            {user.initials}
          </div>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
