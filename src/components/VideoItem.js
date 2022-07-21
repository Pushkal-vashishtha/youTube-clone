import {Row,Col, Container} from 'react-bootstrap'

function VideoItem({VideoItem,onVideoSelect}){

    return(
        <Container>
            <Row onClick={()=>onVideoSelect(VideoItem)}>
    <Col sm={8} style={{marginTop:"20px"}}>
        <img src={VideoItem.snippet.thumbnails.default.url} width="200"/>


    </Col>
    <Col sm={4}>
        <p>{VideoItem.snippet.title}</p>
    </Col>
</Row>
</Container>
    )
}
export default VideoItem