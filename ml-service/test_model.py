import unittest
from model import predict_sentiment

class TestSentimentModel(unittest.TestCase):
    def test_positive_sentiment(self):
        self.assertEqual(predict_sentiment("This is a great product!"), "positive")
        self.assertEqual(predict_sentiment("I love this service"), "positive")

    def test_negative_sentiment(self):
        self.assertEqual(predict_sentiment("This is a terrible experience"), "negative")
        self.assertEqual(predict_sentiment("I hate waiting"), "negative")

    def test_neutral_sentiment(self):
        self.assertEqual(predict_sentiment("The package arrived on Tuesday."), "neutral")
        self.assertEqual(predict_sentiment("It is a blue car."), "neutral")

    def test_negation_handling(self):
        self.assertEqual(predict_sentiment("This is not good"), "negative")
        self.assertEqual(predict_sentiment("Not great at all"), "negative")

if __name__ == '__main__':
    unittest.main()
