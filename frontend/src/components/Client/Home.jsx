import React, { useState, useEffect , useRef} from 'react';
import 'tailwindcss/tailwind.css';
import { gsap } from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for arrow icons

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/premium-photo/assorted-indian-food-black-background-copy-space_1319109-8691.jpg',
      content: 'from the freshest ingredients to the most innovative techniques, we have spared no effort in bringing you a dining experience that is truly exceptional. Join us and savor the flavors of the season.',
    },
    {
      image: 'https://www.shutterstock.com/image-photo/close-professional-chef-serving-pasta-600nw-2481669133.jpg',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/037/349/394/non_2x/ai-generated-this-is-a-male-chef-on-a-commercial-cooking-stove-free-photo.jpg',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
    {
      image: 'https://i.ytimg.com/vi/vwLvogxr0uU/sddefault.jpg',
      content: 'from the freshest ingredients to the most innovative techniques, we have spared no effort in bringing you a dining experience that is truly exceptional. Join us and savor the flavors of the season.',
    },
    {
      image: 'https://img.freepik.com/premium-photo/bowl-coffee-with-coffee-beans-floating-air_719364-1600.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717632000&semt=ais_user',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
  ];

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    // GSAP animation to move the <h2> from below to its normal position
    gsap.fromTo(
      ".gsap-h2",
      { y: 50, opacity: 0 },  // Starting point (50px below, invisible)
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }  // Ending point (normal position, visible)
    );
  }, [currentIndex]); // Re-run animation when slide changes

  useEffect(() => {
    // GSAP ScrollTrigger animation for <p> tag
    gsap.from(".gsap-p", {
      x: -100, // Start 100px left
      opacity: 1, // Start invisible
      duration: 1, // Duration of the animation
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gsap-p", // Trigger animation when <p> comes into view
        start: "top 80%", // Animation starts when the top of <p> reaches 80% of the viewport height
        toggleActions: "play none none reset", // Play the animation, no action on other states
      },
    });
  }, [currentIndex]);

  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scroll and update background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // for cards
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(card, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);


  return (
    <>
 <div className="mt-[138px] h-[70vh] w-full px-4 md:px-8 lg:px-0 flex items-center justify-center">
  {/* Slider Container */}
  <div className="relative flex flex-col lg:flex-row w-full h-full">
    {/* Content Section */}
    <div className="flex-1 bg-gradient-to-r from-black via-gray-950 to-yellow-800 text-gray-300 p-4 md:p-6 lg:p-8 flex flex-col justify-center h-full order-2 lg:order-1 transition-all duration-500 ease-in-out">
      <button
        onClick={handlePrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover: rounded-full p-2 transition"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <h2 className="gsap-h2 text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:ml-20">
        Tasty Abbotsford, <br /> Get Ready!
      </h2>

      <p className="gsap-p text-base md:text-lg lg:text-2xl lg:ml-44 hover:text-yellow-400">
        {slides[currentIndex].content}
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 relative h-full order-1 lg:order-2">
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
      {/* Arrow Controls */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover: rounded-full p-2 transition"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</div>


{/* for carts */}
<div
  className={`min-h-screen transition-all duration-700 ease-in-out shadow-lg bg-black hover:bg-gradient-to-r from-black via-yellow-800 to-red-950`}
>
  {/* Cards Container */}
  <div className="flex justify-center gap-6 flex-wrap px-4 py-8 mt-8 sm:mt-16 md:mt-20 lg:mt-0">
    {/* Card 1 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto"
          src="https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Delicious Food</div>
          <p className="text-gray-300 text-xs">
            A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
          </p>
        </div>
        <div className="text-center pb-2">
          <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </div>
    </div>

    {/* Repeat for more cards (Card 2, Card 3, etc.) */}
    {/* Card 2 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto"
          src="https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Delicious Food</div>
          <p className="text-gray-300 text-xs">
            A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
          </p>
        </div>
        <div className="text-center pb-2">
          <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto"
          src="https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Delicious Food</div>
          <p className="text-gray-300 text-xs">
            A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
          </p>
        </div>
        <div className="text-center pb-2">
          <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </div>
    </div>

    {/* Add more cards here */}
  </div>
</div>


      
    
    
  
</>

  );
};

export default Home;
