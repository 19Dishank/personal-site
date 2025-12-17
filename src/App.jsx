import { useState, useEffect, useRef } from 'react'
import LiquidEther from './component/LiquidEther'
import HeroSection from './component/HeroSection'
import DecryptedText from './component/DecryptedText';
import './App.css'

function App() {
  const [currentText, setCurrentText] = useState("Dishank Patel");
  const [key, setKey] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const firstText = "Dishank Patel";
    const secondText = "Flutter Developer";
    const speed = 50; // ms per character
    const delayAfterDecrypt = 2000; // 2 seconds to show the text before transitioning

    const scheduleNextSwitch = (text) => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Calculate time for decryption: text length * speed + delay
      const decryptTime = text.length * speed + delayAfterDecrypt;
      
      timeoutRef.current = setTimeout(() => {
        const nextText = text === firstText ? secondText : firstText;
        setCurrentText(nextText);
        setKey(prev => prev + 1); // Force re-render with new animation
        scheduleNextSwitch(nextText); // Schedule next switch
      }, decryptTime);
    };

    // Start the loop after first text decrypts
    scheduleNextSwitch(firstText);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <LiquidEther>
      <div className="landing-content">
        <HeroSection 
          nameComponent={
            <DecryptedText 
              key={key}
              text={currentText} 
              animateOn="immediate"
              sequential={true}
              speed={100}
              revealDirection="start"
            />
          }
          description="Welcome to my personal space"
          photoSrc="/hero-photo1.jpeg"
        />
      </div>
    </LiquidEther>
  )
}

export default App
