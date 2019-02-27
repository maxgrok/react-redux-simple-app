import React from 'react';
import VideoList from './VideoList';

const VideoListItem = ({video}) =>{
    const videoItems = video;
    const imageUrl = video.snippet.thumbnails.default.url;
    
    console.log(video.snippet)
    return (
    <li className="list-group-item">
        <div className="video-list media" >
            <div className="media-left">
            <img src={imageUrl} className="media-object" />
                
            </div>
            <div className="media-body">
                <div className="media-heading">
                {video.snippet.title}
                </div>
            </div>
        </div>
    </li>
    )
}

export default VideoListItem;