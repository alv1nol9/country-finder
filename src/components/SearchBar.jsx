import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("")

  const handleClick = () => {
    onSearch(input.trim());
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter country name"
        className="border p-2 w-full rounded mb-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Search
      </button>
    </div>
  );
}