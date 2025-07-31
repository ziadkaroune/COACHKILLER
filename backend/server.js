import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());

app.post('/api/llmConnection' ,async(req ,res)=>{
    try{
        const {prompt} = req.body ;
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions",{

                method  : 'POST' ,
                headers : {
                    'Authorization' :  `Bearer ${process.env.API_KEY}` ,
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                model: 'meta-llama/llama-3.3-70b-instruct:free',
                messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ]
                })
            })
            if(!response.ok) throw new Error("FAILED TO FETCH API");
            const data = await response.json();
            res.json({result : data.choices[0].message.content });
    }
catch (err) {
    console.error("Error caught:", err);
    res.status(500).json({ error: 'Server error' });
}
})


app.listen(port ,()=> console.log(`Server running at http://localhost:${port}`));