import Head from "next/head";
//import { Inter } from "@next/font/google";
import React, { useState } from "react";
import BtnModal from "@/components/Modal"
import Job_Advert from "@/components/Job_Advert";
import Love_Letter from "@/components/Love_Letter";

//import classNames from 'classnames'; // Slider for the Hamburger menu, see https://www.patrykgulas.com/hamburgers
// import { Main } from "next/document";


export default function Home() {
  const [IsJobAdvertSelected, setIsJobAdvertSelected] = useState(true);
  const [IsLoveLetterSelected, setIsLoveLetterSelected] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [opened, setOpened] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);


  function PromptAndResetStates() {
    setModal2Visible(false);
    setIsJobAdvertSelected(false);
    setIsLoveLetterSelected(false);
  }
  
  function handleClickJobAdvert() {
    PromptAndResetStates()
    setIsJobAdvertSelected(true);
  }

  function handleClickLoveLetter() {
    PromptAndResetStates()
    setIsLoveLetterSelected(true);
  }




const handleModalOpen = () =>{
  setModal2Visible(true)
}

const handleCancel = () =>{
  setModal2Visible(false)
}

  return (
    <>
      <Head>
        <title>AI Text Generator</title>        
        <meta name="description" content="AI Text Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-amber-400 p-5">
        <h1 className="text-2xl flex justify-center md:text-4xl font-bold">ChatGPT Text Generator</h1>
        
        <p className="mt-3 text-2x1 text-center">
            Powerful 
            <span className="text-2xl font-bold text-orange-600">
              {" "}
              AI generated {" "}              
            </span>
            text snippets
        </p>        
      </header>
      {/*
      <div className="md:hidden p-4 space-y-2 bg-slate-800 rounded shadow my-1">
        <span className="block w-8 h-0.5 bg-gray-100 "></span>
        <span className="block w-8 h-0.5 bg-gray-100 "></span>
        <span className="block w-8 h-0.5 bg-gray-100 "></span>
      </div>
        */}

<div className="flex w-full items-center bg-slate-100 px-4 py-2">

  <div className="md:hidden cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>
</div>

<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
<div id="mobilemenu" className="flex flex-col bg-slate-50 p-8 justify-center items-start gap-2 md:hidden">
  <div><button onClick={handleClickLoveLetter} type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Love Letter</button></div>                
  <div><button onClick={handleClickJobAdvert} type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Job Advert</button></div>
</div>
</div>

<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;        
      }
    `}</style>


      <div className="bg-white my-1 w-full flex flex-col md:flex-row md:space-x-1 md:space-y-0">
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 text-center py-10 hidden md:block space-y-3">
          <h2 className="text-2xl md:text-2xl font-bold">Topics To Generate</h2>
          <div><button onClick={handleClickLoveLetter} type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Love Letter</button></div>                
          
          <div className="btn-list">
            <button onClick={handleModalOpen} type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Job advert</button>
            <BtnModal visible={modal2Visible} onCancel={handleCancel} onOk={handleClickJobAdvert}/>
          </div>
          
          <div>Job App. Cover Letter</div>
          <div>Personal statement for a study application</div>
          <div>Last Will & Testament</div>
          <div>Prenuptial Agreement</div>
     
        </aside>

        <div className="bg-sky-500 md:w-3/3 lg:w-3/4 px-3 py-0 flex">
          { IsJobAdvertSelected && <Job_Advert/> }
          { IsLoveLetterSelected && <Love_Letter/> }
        </div>


    </div>
  


    <footer className="bg-slate-800 mt-auto p-5">
        <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
    </footer>



    </>
  );
}

