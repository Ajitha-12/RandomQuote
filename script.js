const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];
function generateQuote() {
  const quoteElement = document.getElementById('quote');
  const textElement = document.querySelector('.quote-text');
  const authorElement = document.querySelector('.quote-author');
  quoteElement.classList.remove('show');
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    textElement.textContent = `"${selectedQuote.text}"`;
    authorElement.textContent = `— ${selectedQuote.author}`;
    quoteElement.classList.add('show');
  }, 300);
}
function speakQuote() {
  const text = document.querySelector('.quote-text').textContent;
  const author = document.querySelector('.quote-author').textContent;
  const utterance = new SpeechSynthesisUtterance(`${text} ${author}`);
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.cancel(); // cancel any ongoing speech
  speechSynthesis.speak(utterance);
}
window.onload = generateQuote;
