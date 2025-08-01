import { useEffect, useState } from "react";
import getPrompt from "./GetPrompt"; // assuming this is a function, not a React component
import LoadingA from "../components/LoadingAnimation";

const UseFetch = ({ useInput }) => {
  const [outputPrompt, setOutputPrompt] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getThoughtFromLLM = async () => {
    try {
      const promptInput = getPrompt(useInput); // call the function, not use as component
      const fdata = await fetch("http://localhost:3000/api/llmConnection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptInput }),
      });

      if (!fdata.ok) throw new Error("Error: can't fetch the API");

      const response = await fdata.json();

      // Assuming response.result is a full HTML string with <h2> and <p>
      // Split by double newlines to get each section
      const sections = response.result
          .split('\n\n')
          .map(section => section.trim())
          .filter(section => section.length > 0);
      setOutputPrompt(sections);
    } catch (err) {
      console.error(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (useInput) getThoughtFromLLM();
  }, [useInput]);

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  if (loading) {
    return <LoadingA />;
  }

  return (
    <div
      className="flex noscroll flex-nowrap  space-x-6 px-6 py-8 w-screen  snap-x snap-mandatory"
    >
      {outputPrompt.map((sectionHtml, index) => (
        <div
          key={index}
          className="premium-card  flex-none w-[580px] max-w-full bg-black text-white px-8 py-10 rounded-3xl shadow-[0_12px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col gap-4"
          dangerouslySetInnerHTML={{ __html: sectionHtml }}
        />
      ))}
    </div>
  );
};

export default UseFetch;
