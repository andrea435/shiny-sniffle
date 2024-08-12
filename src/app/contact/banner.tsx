import React from "react";

import Image from "next/image";

export default function Banner() {
  return (
    <section className='h-[60vh] object-cover bg-[url("/images/shein.png")]  bg-cover p-[5%] flex gap-10 items-center'>
      <div className="lg:w-[55%]">
        <h2 className="text-white border-white">
          contact us
        </h2>
        <h3>
          Where Innovation <br className="hidden lg:block" /> 
          Meets Excellence
        </h3>
        
      </div>
      
    </section>
  );
}
