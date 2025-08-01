import { useState } from "react";
import ThoughtOutput from './ThoughtOutput'
const InputForm = () => {
  const [text, setText] = useState("");
  const [toughtInput , setToughInput] = useState("");
  function submitThought(){
    if(text.trim().length > 0){
        setToughInput(text);
    }
    else{
         setToughInput("");
    }
  }
  return (
    <>
    <section className="max-w-xl mx-auto mt-16 px-6 min-h-[300px] flex justify-center items-center">
      <div>
      <h2 className="text-4xl font-semibold  text-gray-900 mb-4 tracking-tight">
         What’s on your mind? Let’s flip that thought
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g., I'm not good enough at this."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
        />

        <button
          onClick={() => submitThought(text)}
          disabled={!text.trim()}
          className="w-full mb-5 md:w-auto px-6 py-2 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 disabled:opacity-50 transition"
        >
          Generate
        </button>
      </div>
      </div>
    </section>
   
    {toughtInput && <ThoughtOutput cleanUserinput={toughtInput} />}
    </>
  );
};

export default InputForm;
