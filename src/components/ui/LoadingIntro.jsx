import React, { useEffect, useState } from "react";

function LoadingIntro({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Kartik Turak/>";
  const progress = (text.length / fullText.length) * 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 flex flex-col items-center justify-center">
      {/* Typing Text */}
      <div className="mb-6 text-2xl md:text-5xl font-mono font-bold tracking-wider">
        {text}
        <span className="animate-pulse ml-1 text-blue-500">|</span>
      </div>

      {/* Progress Bar */}
      <div className="w-[250px] h-[6px] bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out shadow-[0_0_10px_#3b82f6]"
        ></div>
      </div>

    </div>
  );
}

export default LoadingIntro;
