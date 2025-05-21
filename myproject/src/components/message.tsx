import React from 'react';

const Message = () => {
return (
<div className="flex flex-col space-y-1 text-sm">
<div className="self-start max-w-xs bg-white text-gray-800 p-2 rounded-md shadow">
<strong>Maney:</strong> Bro, my app crashed again! I just added one tiny line in my React component.
</div>
<div className="self-end max-w-xs bg-indigo-600 text-white p-2 rounded-md shadow">
<strong>Ram:</strong> What line did you add?
</div>
<div className="self-start max-w-xs bg-white text-gray-800 p-2 rounded-md shadow">
<strong>Maney:</strong> I accidentally called `useState` inside an `if` statement... 😬
</div>
<div className="self-end max-w-xs bg-indigo-600 text-white p-2 rounded-md shadow">
<strong>Ram:</strong> Bruhh 😆 React saw that and said, “This is why I have trust issues.”
</div>
<div className="self-start max-w-xs bg-white text-gray-800 p-2 rounded-md shadow">
<strong>Maney:</strong> LMAO I guess I just broke the hooks rules.
</div>
<div className="self-end max-w-xs bg-indigo-600 text-white p-2 rounded-md shadow">
<strong>Ram:</strong> Yup. React: “You broke my rules, now I break your app.” 💥
</div>
</div>
);
};

export default Message;
