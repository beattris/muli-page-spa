import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Tris", text: "learning is fun" },
  { id: "q2", author: "Beatrice", text: "everything niceee" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  // finding the exact quote detail that matches the URL
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* match.path is used to match the route path defined in App.js for the current page we're on */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* match.url uses the fact that we already are on a part of this page we wanna link to*/}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* used dynamic routing as it depends on "quoteId" for which this quote detail component was loaded*/}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
