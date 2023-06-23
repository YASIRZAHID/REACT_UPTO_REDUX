import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContent";
import "./playButton.css";

export default function PlayButton({
  children,
  onPlay,
  onPause,
}) {
  // let playing = false; // do not use this approach
  const [ playing, setPlaying ] = useState(false)
  const themeContext = useContext(ThemeContext);
  function handleClick(e) {
    e.stopPropagation(); // very important to prevent event bubbling
    if (playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing);
  }
  return (
    <div className={`button ${themeContext}`} onClick={handleClick}>
      {children} {!playing && "▶️"} {playing && "⏸️"}
    </div>
  );
}
