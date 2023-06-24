import VideosContext from "../context/VideosContext";

const { useContext } = require("react");


export default function useVideos(){
    return  useContext(VideosContext)
}
