

import hero from '../assets/img/hero/hero.jpg'; 
// 

export default function Hero() {
  return (
    <section className="border border-blue-500 pt-20">
      <div className="max-w-[1156px] mx-auto border border-red-500">
        <h1 className="text-[40px] font-bold text-[#3B5CA9] text-center mb-10">事務所概要・アクセス</h1>
        <img src={hero} alt="Hero" className="w-full h-auto" />
      </div>
    </section>
  );
}