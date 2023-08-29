import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={'About Me'.split('')} idx={15} />
        </h1>
        <p>Having worked in the structural engineering industry and recently completing a rigorous full-stack software engineering intensive program, I aim to leverage my technical background to transition into software development, recognizing its vital role in society. As a problem solver at heart, I have always been drawn to math and logic-based challenges. Professionally, I’ve worn many hats including project manager, structural analyzer/designer, and tower climber/inspector.</p>
      </div>
    </div>
  )
}

export default About
