import { stringify } from "postcss";
import { use, useEffect, useState } from "react";
import GetPrompt from  './GetPrompt'
const UseFetch = ({useInput}) =>{
const [outputPrompt , setOutputPrompt] = useState(null);
const [error , setError] = useState(false);
const [loading , setLoading] = useState(true);
const getThoughtfromLLm = async() =>{

        try{

                const promptInput = GetPrompt(useInput);
                const fdata = await fetch("https://jsonplaceholder.typicode.com/posts" ,{
                    method : "POST" ,
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify({title : promptInput})
                });
                if(!fdata.ok) throw new Error("Error : can't fetch  the api");
                const response = await fdata.json();
                setOutputPrompt(response);
        }
        catch(err){
            console.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(useInput) getThoughtfromLLm();
    },[useInput])

if(error) return <h2>something went wrong</h2>
if(loading) return <h2>loading . . . </h2>

return <><pre>{JSON.stringify(outputPrompt , null  , 2)}</pre> </>;

}
export default UseFetch;