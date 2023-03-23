import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function sleep(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
    };


    for (const item in list) {
        const res = await openai.createCompletion({
            model,
            prompt,
            temperature: 0.5,
            max_tokens: 500,
            frequency_penalty: 1,
            presence_penalty: 0,
        })

            .then((res) => res.data.choices[0].text)
            .catch(
                (err) =>
                    `ChatGPTx had an error finding an answer! (Error: ${err.message})`
            );

        await sleep(500);

        return res;
    }
};

export default query;