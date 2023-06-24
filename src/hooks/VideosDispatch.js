import VideoDispatchContext from "../context/VideoDispatchContext";
const { useContext } = require("react");


export default function useVideoDispatch(){
    return  useContext(VideoDispatchContext)
}
