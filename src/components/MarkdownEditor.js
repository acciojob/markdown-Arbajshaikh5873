import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <div style={{ width: "50%", float: "left" }}>
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter Markdown here..."
          rows={20}
          style={{ width: "95%" }}
        />
      </div>
      <div className="preview" style={{ width: "50%", float: "left", paddingLeft: "2%" }}>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;