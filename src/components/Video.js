import "./Video.css";
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

  return (
    <div className="container">
      <button onClick={()=>dispatch({type:'DELETE',payload:id})} className="close">X</button>
      <button onClick={()=>updateVideo(id)} className="edit">Edit</button>
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
