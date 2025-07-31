import { stringify } from "postcss";
import { use, useEffect, useState } from "react";
import GetPrompt from  './GetPrompt'
import {Riple} from "react-loading-indicators"
const UseFetch = ({useInput}) =>{
const [outputPrompt , setOutputPrompt] = useState(null);
const [error , setError] = useState(false);
const [loading , setLoading] = useState(true);
const getThoughtfromLLm = async() =>{

        try{

                const promptInput = GetPrompt(useInput);
                const fdata = await fetch("http://localhost:3000/api/llmConnection" ,{
                    method : "POST" ,
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify({prompt : promptInput})
                });
                if(!fdata.ok) throw new Error("Error : can't fetch  the api");
                const response = await fdata.json();
                setOutputPrompt(response.result);
        }
        catch(err){
            console.error(err.message);
             setError(true); 
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(useInput) getThoughtfromLLm();
    },[useInput])

if(error) return <h2>something went wrong</h2>
if(loading) return <Riple color="#32cd32" size="medium" text="" textColor="black" />

return (
    <>
    {outputPrompt &&(
  <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-2xl border border-gray-200 transition-all duration-300">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
     Thought Analysis
  </h2>

  <div className="space-y-6 text-gray-800 leading-relaxed text-[17px]">
    {outputPrompt.split('\n\n').map((para, index) => (
      <p key={index} className="whitespace-pre-line">
        {para}
      </p>
    ))}
  </div>
</div>
)
    }
    </>
)

}
export default UseFetch;