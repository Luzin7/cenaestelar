"use client";
import { useState } from "react";

export function SearchBar() {
  const [searchContent, setSearchContent] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(searchContent);
      }}
    >
      <input
        type="text"
        value={searchContent}
        onChange={({ target }) => setSearchContent(target.value)}
      />
    </form>
  );
}
