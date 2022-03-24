import React, { useEffect, useState } from "react";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);


    return (
        <div className="to-top">
          {isVisible && 
          <div onClick={scrollToTop}>
              <img src="/img/scrollToTop.svg" alt="to top" />
          </div>}
        </div>
    )

}