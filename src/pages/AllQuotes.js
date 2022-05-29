import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    error,
    status,
    data: loadedQuotes,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
