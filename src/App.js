import './App.css';
import{Button,Container,Row,Col,Form} from 'react-bootstrap'
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import { useState,useEffect } from 'react';
import youtube from './api/youtube';
function App() {
const [videos,setVideos]=useState([])
const[clickVideo,setclickVideo]=useState(null)
const selectedVideo=clickVideo!=null? clickVideo :(videos.length!=0 ?videos[4]:null)


async function handleSubmit(searchTerm){
    // console.log(youtube,searchTerm)
   const response= await youtube.get("search",{
   params:{
    part:"snippet",
    maxResults:10,
    key:"AIzaSyCMHHywyZEMwADwVmoYGJHg6uXH7e5Ucog",
    q:searchTerm
  }
})
console.log(response)
setVideos(response.data.items)

}

const onVideoClick=(video)=>{
  setclickVideo(video)
}
useEffect(()=>{
  handleSubmit("jack sparrow")

},[])
  return (
    <div className="App">
      <Container>
       
        <SearchBar onSubmit={handleSubmit}/>
        <Row>
          <Col sm={8}>
            <VideoDetail video={selectedVideo}/>
          </Col>
          <Col sm={4}>
            <VideoList videos={videos} onVideoSelect={onVideoClick}/>
          </Col>
        </Row>
        
     </Container>

    </div>
  );
}

export default App;
