export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return ("ppreddy");
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return ("michael is the hottest ta");
  }
  return "Sorry, I don't understand your question.";
}
