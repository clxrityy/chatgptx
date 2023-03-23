import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-B7wFDWWErBNvdQNWXUBv53hQ"
})

const openai = new OpenAIApi(configuration);

export default openai;