import {logo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full pt-3 mb-10'>
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button type="button" className="black_btn" onClick={() => window.open('https://github.com/nirban256/ai_summarizer.git')}>
          Github
        </button>
      </nav>

      <h1 className="head_text">
          Summarize articles with <br className="max-md:hidden"/> <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Save your time by reading with Sumz, an open-source article summarizer that provides summaries of lengthy articles in a clear and concise way
      </h2>
    </header>
  )
}

export default Hero