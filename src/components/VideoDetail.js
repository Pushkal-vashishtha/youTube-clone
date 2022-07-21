import {Card} from 'react-bootstrap'

function VideoDetail({video}){

if(!video) return<h2>Loading...</h2>
const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    return( <Card>
        <iframe  height="345" src={videoSrc}>
</iframe>
        <Card.Body>
          <Card.Title>{video.snippet.title}</Card.Title>
          <Card.Title>{video.snippet.channelTitle}</Card.Title>
          <Card.Text>
            {video.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
      )
}
export default VideoDetail