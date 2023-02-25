const generateLoveLetter = async ({
    loveName,
    loveMetWhen,
    loveMetWhere,
    loveAbout,
    loveKeyWords,
    loveNumWords,
  }) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: `Write a love letter about ${loveName}. We met at ${loveMetWhere} about ${loveMetWhen}.
            What I love about ${loveName} is ${loveAbout}. Include the following keywords:
            ${loveKeyWords}. The word count is ${loveNumWords || 300 } ${loveNumWords} words.`,
            max_tokens: 1000,
            temperature: 0.7,
          }),
        }
      );
      const data = await response.json();
  
      return data.choices[0].text;
    } catch (err) {
      console.error(err);
    }
  };
  
  export default async function handler(req, res) {
    const { loveName, loveMetWhen, loveMetWhere, loveAbout, loveKeyWords, loveNumWords } = req.body;
  
    const loveLetter = await generateLoveLetter({
      loveName,
      loveMetWhen,
      loveMetWhere,
      loveAbout,
      loveKeyWords,
      loveNumWords,
    });
  
    res.status(200).json({
      loveLetter,
    });
  }