import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const navigate = useNavigate();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
    console.log(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
