import React, { useState } from "react";
import Job_Advert from "@/components/Job_Advert";

export default function LoveLetter() {
    const [IsJobAdvertSelected, setIsJobAdvertSelected] = useState(false);

    return (
        <div class="bg-sky-500 md:w-3/3 lg:w-3/4 px-3 py-0 flex">
        { IsJobAdvertSelected && <Job_Advert/> }
        </div>
    )



}