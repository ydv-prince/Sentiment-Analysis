import React, { useState } from "react";
import { createNote } from "./api";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const data = await createNote(text);
      setResult(data);
    } catch (err) {
      setError(err.message || "Failed to analyze sentiment. Ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case "positive":
        return "#16a34a";
      case "negative":
        return "#dc2626";
      default:
        return "#ca8a04";
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
      <h2>🧠 Notes Sentiment Analyzer</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your note or review..."
          style={{
            padding: "12px",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <div style={{ marginTop: "16px" }}>
          <button
            type="submit"
            disabled={loading || !text.trim()}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: loading || !text.trim() ? "not-allowed" : "pointer",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}
          >
            {loading ? "Analyzing..." : "Analyze Sentiment"}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#fee2e2", color: "#991b1b", borderRadius: "6px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#f3f4f6", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
          <p style={{ margin: "0 0 8px 0" }}><b>Text:</b> {result.text}</p>
          <p style={{ margin: 0 }}>
            <b>Sentiment:</b>{" "}
            <span
              style={{
                color: "white",
                backgroundColor: getSentimentColor(result.sentiment),
                padding: "3px 10px",
                borderRadius: "12px",
                fontWeight: "bold",
                textTransform: "capitalize",
                display: "inline-block"
              }}
            >
              {result.sentiment}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;