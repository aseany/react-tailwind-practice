// import hero from '../assets/img/hero/hero.jpg'; 
// 

export default function Access() {
  return (
    <section className="border border-blue-500 pt-20 text-white">
      <div className="max-w-[1156px] mx-auto border border-red-500">
        <h1 className="text-[40px] font-bold text-[#3B5CA9] text-center mb-10">交通アクセス</h1>
        <div className="selectBlock flex justify-between max-w-[400px] mx-auto border border-blue-500">
          <div className="osaka border bg-[#3B5CA9] w-[50%] text-center ">
            大阪オフィス
          </div>
          <div className="tokyo border border-red-500 w-[50%] text-center">
            東京オフィス
          </div>
        </div>
      </div>
    </section>
  );
}