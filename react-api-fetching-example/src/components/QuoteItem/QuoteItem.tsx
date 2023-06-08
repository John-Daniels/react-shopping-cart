import { IQuote } from "../../pages/Quotes/Quotes";

const QuoteItem = ({ quote }: { quote: IQuote }) => (
  <div
    key={quote._id}
    className="border-l-[#d9d9d9] border-l-[5px] bg-[#f6f6f6] h-fit min-h-[80px] sm:min-h-[100px] py-5 flex items-center text-xs sm:text-sm px-3"
  >
    <p className="font-mono text-[grey] leading-[1rem]  sm:leading-[2rem]">
      {quote.content}
      {quote.author && " – "}
      <span className="font-semibold text-[black]">{quote.author}</span>
    </p>
  </div>
);

export default QuoteItem;
