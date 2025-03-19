import { useState } from "react";
import "./styles.css"; // Import the CSS file

const images = [
  { src: "/jellyfish.jpg", leftDescription: "02.25.2035", rightDescription: "좋았어, 우리", 
    text: "Poem hereeee" },
  { src: "/rat.jpg", leftDescription: "01.23.2010", rightDescription: "Flowers for Rat", 
    text: "Imma add my haiku here." },
  { src: "/fish.jpg", leftDescription: "09.23.2024", rightDescription: "Sea Rants", 
    text: "Imma add another poem thingy here." }
];

export default function PoemDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="poem-container">
      {!showFullScreen ? (
        <>
          <div className="image-wrapper">
            <img 
              src={images[currentIndex].src} 
              alt="Poem Image" 
              className="poem-image" 
              onClick={handleImageClick}
            />
            <button className="arrow-button" onClick={handleNextImage}>
              ▲
            </button>
          </div>
          <div className="text-container">
            <p className="left-description">{images[currentIndex].leftDescription}</p>
            <p className="right-description">{images[currentIndex].rightDescription}</p>
          </div>
        </>
      ) : (
        <div className="full-screen" onClick={handleCloseFullScreen}>
          <p className="full-screen-text">{images[currentIndex].text}</p>
        </div>
      )}
    </div>
  );
}