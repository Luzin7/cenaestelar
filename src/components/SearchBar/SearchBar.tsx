"use client";

import { useState } from "react";
import { Form } from "../Form";

export function SearchBar() {
  const [searchContent, setSearchContent] = useState<string>("");
  return (
    <Form.Wrapper
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Input
        style={{
          padding: "0.5rem",
        }}
        type="text"
        value={searchContent}
        placeholder="Pesquisar Conteúdo"
        onChange={({ target }) => setSearchContent(target.value)}
      />
    </Form.Wrapper>
  );
}
