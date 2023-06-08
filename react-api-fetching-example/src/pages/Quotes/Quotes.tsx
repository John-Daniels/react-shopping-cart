import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/request.hook";
import Endpoints from "../../constants/endpoints.constant";
import QuoteItem from "../../components/QuoteItem/QuoteItem";

export interface IQuote {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

const Quotes = () => {
  const makeRequest = useRequest({ baseURL: Endpoints.quotes });
  const [padginationData, setPadginationData] = useState({
    currentPage: 1,
    count: null,
    totalPages: null,
  });

  const { currentPage } = padginationData;

  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Array<IQuote>>([]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await makeRequest.get("/", {
        params: {
          page: currentPage,
        },
      });

      setQuotes(data.results);
    } catch (e) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const incrementPage = () => {
    setPadginationData((prev) => ({
      ...prev,
      currentPage: currentPage + 1,
    }));
  };

  const decrementPage = () => {
    currentPage > 1 &&
      setPadginationData((prev) => ({
        ...prev,
        currentPage: currentPage - 1,
      }));
  };

  return (
    <div id="quotes" className="my-10">
      <div className="actions flex justify-between w-full p-5 items-center">
        <h1>All Quotes</h1>
        <div className="flex rounded-lg border border-[#ddd] w-fit">
          <button
            onClick={decrementPage}
            className={`${currentPage == 1 ? "opacity-40" : ""}`}
          >
            -
          </button>
          <p>{currentPage}</p>
          <button onClick={incrementPage}>+</button>
        </div>
      </div>
      <div className="px-5 flex flex-col gap-3">
        {loading ? (
          <QuotesSkeleton />
        ) : (
          <>
            {quotes.map((quote) => (
              <QuoteItem quote={quote} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const QuotesSkeleton = () => {
  const quotes = Array(20).fill({
    _id: "",
    author: "",
    content: "",
    tags: ["", ""],
    authorSlug: "",
    length: 0,
    dateAdded: "",
    dateModified: "",
  });

  return (
    <>
      {quotes.map((quote) => (
        <QuoteItem quote={quote} key={quote._id} />
      ))}
    </>
  );
};

export default Quotes;
