import Video from "./Video";
import PlayButton from "./playButton";

export default function VideoList({dispatch,video,updateVideo}){
    return (
        <div>
             <div>
            {video.map((video) => (
                <Video
                key={video.id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
                id={video.id}
                dispatch={dispatch}
                updateVideo={updateVideo}
                >
            <PlayButton
                onPlay={() => console.log("play",video.title)}
                onPause={() => console.log("pause",video.title)}
            >
                {video.title}
          </PlayButton>
            </Video>
          ))}
        </div>
      {/* <div >
        <Counter/>
      </div> */}
        </div>
    );
}