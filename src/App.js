import { Route, Routes, Navigate, Link } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// no need of lazy loading these components
import AllQuotes from "./pages/AllQuotes";
import Comments from "../src/components/comments/Comments";
import LayOut from "../src/components/layout/Layout";

// import QuoteDetails from "./pages/QuoteDetails";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";

const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <LayOut>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="./quotes" />} />

          <Route path="/quotes" element={<AllQuotes />} />

          {/* <Route path="/quotes/:quoteId/*" element={<QuoteDetails />} /> */}

          <Route path="/quotes/:quoteId" element={<QuoteDetails />}>
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
          </Route>

          <Route path="/new-quote" element={<NewQuote />} />

          <Route to="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LayOut>
  );
};

export default App;
