import React, { useState } from "react";

export default function LoveLetter() {
  const [loveLetter, setLoveLetter] = useState("");

  const [loveName, setLoveName] = useState("");
  const [loveMetWhen, setLoveMetWhen] = useState("");
  const [loveMetWhere, setLoveMetWhere] = useState("");
  const [loveAbout, setLoveAbout] = useState("");
  const [loveKeyWords, setLoveKeyWords] = useState("");
  const [loveNumWords, setLoveNumWords] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(loveLetter);
    setIsCopied(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    const res = await fetch("/api/returnLoveLetter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loveName,
        loveMetWhen,
        loveMetWhere,
        loveAbout,
        loveKeyWords,
        loveNumWords,
      }),
    });
    setIsGenerating(false);
    const data = await res.json();
    setLoveLetter(data.loveLetter.trim());
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="loveLetter">
                Love Letter
              </label>
              <input
                type="text"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="loveName"
                placeholder="Name of your crush"
                id="loveName"
                value={loveName}
                onChange={(e) => setLoveName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="met where" className="sr-only">
                Where did you meet?
              </label>
              <input
                value={loveMetWhere}
                onChange={(e) => setLoveMetWhere(e.target.value)}
                required
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Where did you meet?"
                type="text"
                name="metWhere"
                id="metWhere"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="met when" className="sr-only">
                When did you meet?
              </label>
              <input
                value={loveMetWhen}
                onChange={(e) => setLoveMetWhen(e.target.value)}
                required
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="When did you meet?"
                type="text"
                name="metWhen"
                id="metWhen"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Love About" className="sr-only">
                What do you love about this person?
              </label>
              <textarea
                rows={3}
                value={loveAbout}
                onChange={(e) => setLoveAbout(e.target.value)}
                required
                name="loveAbout"
                id="loveAbout"                
                placeholder="List of things you love about the person"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="love keywords" className="sr-only">
                Anything else you would like to express.
              </label>
              <textarea
                rows={3}
                value={loveKeyWords}
                onChange={(e) => setLoveKeyWords(e.target.value)}
                name="loveKeyWords"
                id="loveKeyWords"
                placeholder="Additional comments / keywords"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="tone">
                Tone
              </label>

    
            </div>
            <div className="flex flex-col">
              <label htmlFor="words" className="sr-only">
                Words (Optional)
              </label>
              <input
                value={loveNumWords}
                onChange={(e) => setLoveNumWords(e.target.value)}
                type="number"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Number Of Words - Default 200 (Optional)"
                name="words"
                id="words"
              />
            </div>

            <button
              className={`bg-orange-600 w-full hover:bg-orange-700 text-white font-bold mt-6 py-2 px-4 rounded
                ${
                  isGenerating || loveName === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              type="submit"
              disabled={isGenerating || loveName === ""}
            >
              {isGenerating ? "Generating..." : "Generate Love Letter"}
            </button>
          </form>
        </div>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                loveLetter === ""
                  ? 7
                  : loveLetter.split("\n").length + 12
              }
              name="output"
              value={loveLetter}
              onChange={(e) => setloveLetter(e.target.value)}
              disabled={loveLetter === ""}
              id="output"
              placeholder="AI Generated Love Letter"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            />
            <button
              onClick={handleCopy}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={loveLetter === ""}
            >
              {isCopied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}