'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  words: string[];
  colors: string[];
  additionalStyle?: string;
}

export function TypingWord(props: Props) {
  const { additionalStyle, colors, words } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(``);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeWriter = (text: string, i: number, fnCallback: () => void) => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 50); // Adjust typing speed here
      } else if (typeof fnCallback === `function`) {
        setTimeout(fnCallback, 700); // Pause before starting next word
      }
    };

    const startTextAnimation = (i: number) => {
      if (i >= words.length) {
        setTimeout(() => {
          startTextAnimation(0);
        }, 2000); // Wait before restarting animation
      } else {
        typeWriter(words[i], 0, () => {
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsTyping(true);
          }, 1000); // Pause before typing the next word
        });
      }
    };

    if (isTyping) {
      setIsTyping(false);
      startTextAnimation(currentIndex);
    }
  }, [currentIndex, isTyping, words]);

  return (
    <div className={additionalStyle}>
      <span style={{ color: colors[currentIndex] }}>{displayedText}</span>
    </div>
  );
}
