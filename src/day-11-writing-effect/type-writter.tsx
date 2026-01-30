

import React, { useState } from "react";
import TypeWritterEffect from "./use-type-writter";

const TypewriterEffect = () => {
  const [sentence, setSentence] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    setSentence(data.get("sentence") as string);
    // TODO Display the text with typewriter effect
    console.log(`The sentence to display is ${data.get("sentence")}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="sentence"
          placeholder="Type a sentence"
          className="border border-cyan-200 w-2xs"
        />
        <button type="submit">Display with typewriter effect</button>
      </form>
      <div style={{ marginTop: "20px", minHeight: "24px" }}>
        <TypeWritterEffect text={sentence} speed={200} />
      </div>
    </div>
  );
};

export default TypewriterEffect;
