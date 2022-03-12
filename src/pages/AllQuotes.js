import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Tris", text: "learning is fun" },
  { id: "q2", author: "Beatrice", text: "everything niceee" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
