import React, { useEffect } from "react";
import { useParams, Route, Routes, Outlet, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "../pages/NotFound";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";

const QuoteDetails = () => {
  const {
    sendRequest,
    status,
    error,
    data: quote,
  } = useHttp(getSingleQuote, true);

  const params = useParams();

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!quote.text) {
    return (
      <p>
        <NotFound />
      </p>
    );
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />

      {/* 2 ways of nesting components */}

      {/* <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link to="comments" className="btn--flat">
                Load Comments
              </Link>
            </div>
          }
        />

        <Route path="comments" element={<Comments />} />
      </Routes> */}

      <Outlet />
    </>
  );
};

export default QuoteDetails;
