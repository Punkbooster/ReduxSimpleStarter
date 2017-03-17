import React from 'react'

// example of function based component with props
const VideoList = (props) => {
  return (
    <ul className='col-md-4 list-group'>
      {props.videos.length}
    </ul>
  )
}

export default VideoList
