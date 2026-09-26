def predict_sentiment(text: str) -> str:
    """
    Analyzes sentiment of the input text and returns 'positive', 'negative', or 'neutral'.
    Evaluates negative and negation patterns first to avoid false positives (e.g., 'not good').
    """
    text = text.lower()

    negative_keywords = [
        "not good", "not great", "not nice", "not well", "bad", "terrible",
        "awful", "horrible", "poor", "worst", "hate", "disappointing", "sad"
    ]
    positive_keywords = [
        "good", "great", "well", "nice", "excellent", "love", "amazing",
        "wonderful", "fantastic", "best", "awesome", "happy", "pleased"
    ]

    if any(neg in text for neg in negative_keywords):
        return "negative"
    elif any(pos in text for pos in positive_keywords):
        return "positive"
    return "neutral"