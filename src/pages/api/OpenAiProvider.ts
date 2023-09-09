import { Configuration, OpenAIApi } from "openai"


const getOpenAiClient = () => {

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not set")
    }
    return new OpenAIApi(new Configuration({ apiKey }))
}


export const removeInappropriatePhrases = async (rawStrings: string[]) => {

    const client = getOpenAiClient()

    const results = await client.createModeration({
        input: rawStrings,
    })
    console.log("THE RESULTS = ", results)

    return results
}


export const groupSimilarPhrases = async (questionAsked: string, rawStrings: string[]) => {

    const client = getOpenAiClient()

    const prompt = `I asked a group of people the following question:
    As software engineers / developers, ${questionAsked}

    I got the following responses:
\n\n${rawStrings.join("\n")}\n\n---\n\n

INSTRUCTIONS: group similar answers together.
return results in the following JSON format:
[
    {k: "summarized answer 1", v: ["item1", "item2", "item3"]},
    {k: "summarized answer 2", v: ["item4", "item5"]},
    {k: "summarized answer 3", v: ["item7", "item8", "item9"]}
]`

    const results = await client.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: prompt,
        }],
    })

    return results
}

