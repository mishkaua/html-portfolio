import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { TERipple } from "tw-elements-react";

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <TERipple rippleColor="light">
          <button
            onClick={backToTop}
            className={` ${
              showButton ? "fixed bottom-[40px] right-[40px]" : "hidden"
            }
        rounded-full p-2 transition transform ease-out animate-bounce text-white bg-sky-900 shadow-md hover:bg-sky-500 hover:shadow-lg`}
          >
            <IoArrowUpCircleOutline size={36} />
          </button>
        </TERipple>
      )}
    </div>
  );
}
