import VideoItem from "./VideoItem"

function VideoList({videos,onVideoSelect}){
    if(videos.length==0) return <h1>LOADING.....</h1>
    return(
        <>
      {videos.map((video,idx) => <VideoItem key={idx} VideoItem={video} onVideoSelect={onVideoSelect}/>)}
        </> 
    )
}
export default VideoList