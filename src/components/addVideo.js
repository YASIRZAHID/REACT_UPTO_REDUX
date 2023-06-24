import { useContext, useEffect, useRef, useState } from "react";
import "./addVideo.css";
import ThemeContext from "../context/ThemeContent";
import useVideoDispatch from "../hooks/VideosDispatch";
// import VideoDispatchContext from "../context/VideoDispatchContext.js";

const initialState = {
  channel: "Coder Dost",
  time: "5 month ago",
  verified: true,
  title: "",
  views: "",
};

export default function AddVideo({
  // dispatch,
  editableVideo,
  SetEditableVideo,
}) {
  const [video, SetVideo] = useState(initialState);
  const theme = useContext(ThemeContext);
  // const dispatch=useContext(VideoDispatchContext)
  const dispatch= useVideoDispatch()
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({type:'UPDATE',payload:video})
      SetEditableVideo(null);
    } else {
      if (video !== initialState) {
        dispatch({type:'ADD',payload:video});
      }
    }
    SetVideo(initialState);
  }
  function handleChange(e) {
    // console.log(e.target.name,e.target.value)
    SetVideo({
      ...video,
      [e.target.name]: [e.target.value], // when using variable in place of string
    });
  }
  useEffect(() => {
    if (editableVideo) {
      SetVideo(editableVideo);
    }
    // inputRef.current.value='your name here';//this tyoes in a value
    inputRef.current.focus();// this brings cursor to end of typed value
    inputRef.current.placeholder=""
    "TYPE HERE".split('').forEach((char,i)=>{
      setTimeout(()=>{
        // inputRef.current.value=inputRef.current.value + char
        inputRef.current.placeholder=inputRef.current.placeholder + char
      },100*i)
    })

  }, [editableVideo]);

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Video Title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value={video.views}
      />
      <button className={`button ${theme}`} onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} VIDEO
      </button>
    </form>
  );
}
