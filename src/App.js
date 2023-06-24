import { useReducer, useState } from "react";
import "./App.css";
import videosDB from "./data/data";
import AddVideo from "./components/addVideo";
import VideoList from "./components/videoList";
import ThemeContext from "./context/ThemeContent";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

function App() {
  const [video, dispatch] = useReducer(videoReducer, videosDB);
  function videoReducer(video, action) {
    switch (action.type) {
      case "ADD":
        return [...video, { ...action.payload, id: video.length + 1 }];
      case "DELETE":
        return video.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = video.findIndex(
          (video) => video.id === action.payload.id
        );
        const videosUpdated = [...video];
        videosUpdated.splice(index, 1, action.payload);
        return videosUpdated;
      default:
        return video;
    }
  }

  // const themeContext = useContext(ThemeContext)

  // const [ video, setVideo ] = useState(videosDB);
  const [editableVideo, SetEditableVideo] = useState(null);
  const [mode, SetMode] = useState("darkmode");
  // function videoAdder(video){
  //   dispatch({type:'ADD',payload:video});
  //   //action : {type:'Add',payload:video}
  //   // setVideo([
  //   //   ...video,
  //   //   {...newVideo,id:video.length+1}
  //   // ]);
  // }

  // function deleteVideo(id){
  //   dispatch({type:'DELETE',payload:id});
  //   // setVideo(video.filter(video=>video.id !== id))
  // }
  function updateVideo(id) {
    SetEditableVideo(video.find((video) => video.id === id));
  }
  // function editVideo(updatedVideoData){
  //   dispatch({type:'UPDATE',payload:updatedVideoData});
  //   // const index = video.findIndex(video=>video.id === updatedVideoData.id)
  //   // const videosUpdated = [...video]
  //   // videosUpdated.splice(index,1,updatedVideoData);
  //   // setVideo(videosUpdated)
  // }

  return (
    <>
      <section className={`App ${mode}`}>
        <ThemeContext.Provider value={mode}>
          <VideosContext.Provider value={video}>
            <VideoDispatchContext.Provider value={dispatch}>

          <button
            className={`button ${mode}`}
            onClick={() =>
              SetMode(mode === "darkmode" ? "lightmode" : "darkmode")
            }
            >
            THEME
          </button>

          <AddVideo
            SetEditableVideo={SetEditableVideo}
            // dispatch={dispatch}
            editableVideo={editableVideo}
            ></AddVideo>
          {/* <div>
          <button className="button" onClick={()=>{
            setVideo([...video,{
              id: video.length+1,
              title: "aagi aik or video",
              channel: "Coder Dost",
              views: "600",
              time: "5 month ago",
            }]);
          }}>ADD VIDEO</button>
        </div> */}
          <VideoList
            updateVideo={updateVideo}
            // dispatch={dispatch}
            // video={video}
            ></VideoList>
            </VideoDispatchContext.Provider>
        </VideosContext.Provider>
        </ThemeContext.Provider>
      </section>
    </>
  );
}

export default App;
