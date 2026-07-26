import React from 'react'

function Video({ className = "" }) {
  return (
    <video 
      className={`h-full w-full object-cover ${className}`}
      autoPlay 
      loop 
      muted 
      src='/videos/video1.mp4' 
      type='video/mp4'
    />
  )
}

export default Video
