const GetPrompt = ( userInput ) => `
I have a negative self-thought: "${userInput}"

I want you to analyze this and return the following:
1. A rational reframe of the thought (objective and logical)
2. A compassionate version (emotionally kind, like from a friend)
3. A calming affirmation (short and soothing)
4. A cognitive insight (what pattern this thought may belong to, e.g., catastrophizing, imposter syndrome, etc.)

Respond in clearly separated sections.
`;

export default GetPrompt;
