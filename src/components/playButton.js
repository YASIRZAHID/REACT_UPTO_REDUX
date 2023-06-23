import { useState } from "react";
import "./playButton.css";

export default function PlayButton({
  children,
  onPlay,
  onPause,
}) {
  // let playing = false; // do not use this approach
  const [ playing, setPlaying ] = useState(false)
  function handleClick(e) {
    e.stopPropagation(); // very important to prevent event bubbling
    if (playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing);
  }
  return (
    <div className="button" onClick={handleClick}>
      {children} {!playing && "▶️"} {playing && "⏸️"}
    </div>
  );
}
