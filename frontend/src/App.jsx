import React, { useState } from "react";
import { createNote } from "./api";
import "./App.css";

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
    setResult(null);
    try {
      const data = await createNote(text);
      setResult(data);
    } catch (err) {
      setError(err.message || "Failed to analyze sentiment. Ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <div className="header">
          <h2>NeuroSense</h2>
          <p>AI-Powered Sentiment Intelligence</p>
        </div>

        {error && (
          <div className="error-msg">
            <strong>Error:</strong> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-area">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your feedback, review, or thoughts here..."
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <>
                <div className="loader"></div>
                Analyzing...
              </>
            ) : (
              "Analyze Sentiment"
            )}
          </button>
        </form>

        {result && (
          <div className="result-card">
            <div className="result-text">"{result.text}"</div>
            <div className="sentiment-label">Detected Sentiment:</div>
            <div className={`sentiment-badge sentiment-${result.sentiment?.toLowerCase()}`}>
              {result.sentiment?.toLowerCase() === 'positive' && '✨ '}
              {result.sentiment?.toLowerCase() === 'negative' && '⚠️ '}
              {result.sentiment?.toLowerCase() === 'neutral' && '⚖️ '}
              {result.sentiment}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;