import React from 'react'
import VideoListItem from './video_list_item'

// example of function based component with props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} vide={video} />
  })

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList
