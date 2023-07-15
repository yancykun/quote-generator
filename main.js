let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
  {
    quote: `It’s not a bug; it’s an undocumented feature.`,
    author: `― Anonymous`
  },
  {
    quote: `First, solve the problem. Then, write the code.`,
    author: `– John Johnson`
  },
  {
    quote: `Code is like humor. When you have to explain it, it’s bad.`,
    author: `– Cory House`
  },
  {
    quote: `Make it work, make it right, make it fast.`,
    author: `– Kent Beck`
  },
  {
    quote: `Clean code always looks like it was written by someone who cares.`,
    author: `— Robert C. Martin`
  },
  {
    quote: `Of course, bad code can be cleaned up. But it’s very expensive.`,
    author: `— Robert C. Martin`
  }
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  
  let quoteText = quotes[random].quote;
  let authorText = quotes[random].author;

  quote.innerHTML = `<span>“</span>${quoteText}<span>”</span>`;
  author.innerText = authorText;
});
