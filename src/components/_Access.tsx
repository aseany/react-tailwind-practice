// import hero from '../assets/img/hero/hero.jpg'; 
// 

import { useState } from 'react';

export default function Access() {
  
  型
  // const [selected, setSelected] = useState;←これでも動くけど、型がないから、selectedに何でも入れられる。例えば、'osaka'や'tokyo'以外の文字列も入れられる。
  const [selected, setSelected] = useState('osaka');// ←これだと、selectedには文字列しか入れられないけど、'osaka'や'tokyo'以外の文字列も入れられる。
  // const [selected, setSelected] = useState<'osaka' | 'tokyo'>('osaka'); ←これだと、selectedには'osaka'か'tokyo'しか入れられない。例えば、'osaka'や'tokyo'以外の文字列は入れられない。
// ↑1. カッコ ( ) と 山カッコ < > の違い
// この一行には、プログラムに対する 2つの命令 が入っています。
// <'osaka' | 'tokyo'> （ジェネリクス）
// 命令： 「このコップには、『osaka』か『tokyo』という名前の付いた水しか入れちゃダメだよ！」という ルールの設定 です。
// ('osaka') （引数）
// 命令： 「コップを用意した瞬間に、とりあえず 『osaka』を最初に入れておいてね」という 最初のアクション です。



  const handleClick = (office: 'osaka' | 'tokyo') => {
    setSelected(office);
  };

  return (
    <section className="border border-blue-500 pt-20 text-white pb-20">
      <div className="max-w-[1156px] mx-auto border border-red-500">
        <h1 className="text-[40px] font-bold text-[#3B5CA9] text-center mb-10">交通アクセス</h1>
        <div className="selectBlock flex justify-between max-w-[400px] mx-auto border border-blue-500">
          <div
            className={`osaka border w-[50%] text-center cursor-pointer py-2 ${
              selected === 'osaka' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
            onClick={() => handleClick('osaka')}
          >
            大阪オフィス
          </div>
          <div
            className={`tokyo border w-[50%] text-center cursor-pointer py-2 ${
              selected === 'tokyo' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
            onClick={() => handleClick('tokyo')}
          >
            東京オフィス
          </div>
        </div>
      </div>
    </section>
  );
}