import React, {useState, useEffect} from 'react'

export default function Intro() {
      const [animate, setAnimate] = useState(false);

      useEffect(() => {
        setAnimate(true);
      }, []);
  return (
    <div>
      <div className="intro-container">
        <h5>Hi, I Am</h5>
        <h1 className={animate ? "animated-h1" : ""}>Chikezie Ilodigwe</h1>
        <p>A Frontend Developer</p>
      </div>
    </div>
  );
}
