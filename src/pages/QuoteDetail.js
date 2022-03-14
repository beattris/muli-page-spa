import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Tris", text: "learning is fun" },
  { id: "q2", author: "Beatrice", text: "everything niceee" },
];

const QuoteDetail = () => {
  const params = useParams();

  // finding the exact quote detail that matches the URL
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* used dynamic routing as it depends on "quoteId" for which this quote detail component was loaded*/}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
