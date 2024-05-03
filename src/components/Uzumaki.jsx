const Uzumaki = () => {
  return (
    <div className="lg:px-20 lg:py-12 px-8 py-5 grid lg:grid-cols-2 lg:gap-20 gap-10">
      <div>
        <img src="images/uzumaki.jpeg" />
      </div>
      <div className="flex-col gap-4 flex justify-center">
        <h1 className="font-ojuju font-bold capitalize text-3xl">Uzumaki?</h1>
        <p className="leading-7 lg:w-3/4">
          <a href="https://twitter.com/LetstalkFlashGL"
            target="_blank"
            className="hover:underline hover:font-bold cursor-pointer ml-1 ">@LetstalkFlashGL</a> also imagined Kayra in a different light, picturing her as an Uzumaki Lady, adding an intetersting twist to her look.
          <br/>
          &quot;Uzumaki Lady?&quot;
        </p>
      </div>
    </div>
  );
};

export default Uzumaki;
