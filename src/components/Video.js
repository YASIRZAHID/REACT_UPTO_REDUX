import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContent";
export default function Video({
  id = 1,
  title = "",
  channel = "",
  views = "",
  time = "",
  verified = false,
  children,
  dispatch,
  updateVideo
}) {
  const theme = useContext(ThemeContext)

  return (
    <div className={`container ${theme}`}>
      <button  onClick={()=>dispatch({type:'DELETE',payload:id})} className={`close button ${theme}`}>X</button>
      <button  onClick={()=>updateVideo(id)} className={`edit button ${theme}`}>Edit</button>
      <img
        className="pic"
        src={`https://picsum.photos/id/${id}/160/90`}
        alt="aaho"
      />
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✅"}
      </div>
      <div className="views">
        {views}views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
