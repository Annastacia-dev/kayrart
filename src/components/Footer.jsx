const Footer = () => {
  return (
    <div className='bg-black lg:px-20 lg:py-12 px-8 py-5 grid lg:grid-cols-4 gap-10 text-white'>
      <div className="flex flex-col gap-4">
        <p className="font-ojuju font-bold capitalize text-primary tracking-wider text-xl">muse</p>
        <a
            href="https://twitter.com/kayraszn"
            target="_blank"
            className="hover:underline cursor-pointer hover:font-bold"
          >
            @kayraszn
          </a>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-ojuju font-bold capitalize text-primary tracking-wider text-xl">designer</p>
        <a
            href="https://twitter.com/kemsdesigns"
            target="_blank"
            className="hover:underline cursor-pointer hover:font-bold"
          >
            @kemsdesigns
          </a>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-ojuju font-bold capitalize text-primary tracking-wider text-xl">developer</p>
        <a
            href="https://twitter.com/annetotoh_"
            target="_blank"
            className="hover:underline cursor-pointer hover:font-bold"
          >
            @annetotoh_
          </a>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-ojuju font-bold capitalize text-primary tracking-wider text-xl">links</p>
        <a
            href="/submit_art"
            className="hover:underline cursor-pointer hover:font-bold"
          >
            submit my art
          </a>
      </div>
      
    </div>
  )
}

export default Footer
