

import logo from '../assets/header/logo.png'; 
import english from '../assets/header/english.png'; 


export default function Header() {
  return (
    <header className="border border-blue-500 sticky top-0 z-50 ">
      <div className="max-w-[1286px] mx-auto px-[40px] border border-red-500">
        <div className="flex justify-between items-center h-16">
          {/* ロゴエリア */}
          <div className="flex-shrink-0 flex items-center">
            {/* <span className="text-2xl font-bold text-blue-600">MyBrand</span> */}
            <img src={logo} alt="ロゴ" className="h-10 w-auto" />
          </div>

          {/* ナビゲーション（PC用） */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">青山の特徴</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">資格者紹介</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">事業所情報</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">事業所情報</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">ニュース</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">ニュース</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</a>
          </nav>
          <div className="flex md:hidden">
            <img src={english} alt="ロゴ" className="h-10 w-auto" />
          </div>
      
        </div>
      </div>
    </header>
  );
}