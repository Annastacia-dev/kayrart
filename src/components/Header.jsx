import { useState } from "react";

const Header = () => {

  const [showCredentials, setShowCredentials] = useState(false)

  return (
    <header
      className="min-h-screen bg-cover bg-fixed md:bg-center bg-right bg-no-repeat relative"
      style={{
        backgroundImage: `url('images/cover.jpeg')`,
      }}
      onMouseEnter={() => setShowCredentials(true)}
      onMouseLeave={() => setShowCredentials(false)}
    >
      <div className="absolute bg-black/1 min-h-screen w-full flex justify-center">
        <h1 className="text-white font-ojuju font-bold uppercase lg:text-6xl mt-10 text-4xl">amazing art of <span className="bg-primary text-black">kayra</span></h1>
      </div>
      { showCredentials && (<div className="glass px-4 py-2 h-20 rounded-lg font-bold absolute bottom-4 right-2 flex justify-center items-center text-white">
        Cover art by <a href="https://twitter.com/deanne_go" target="_blank" className="hover:underline hover:text-primary cursor-pointer ml-1"> @deanne_go</a>
      </div>)}
    </header>
  );
};

export default Header;