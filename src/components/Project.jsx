import React from 'react'


const Project = ({ project: {img, description} }) => (
  <div className="project">
    <div className="project-img">
      <img
        src={ img || "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/74278754_270575034222709_2716214772756513224_n.jpg?_nc_cat=101&_nc_sid=b9115d&_nc_ohc=KHhseOF1n_kAX_VcQvy&_nc_ht=scontent.fsgn5-1.fna&oh=2171a8d2e59366c433f52e0eccfa5ba2&oe=5F22CA0B" }
        alt="project-img"
      />
    </div>
    <div className="description">
      { description }
    </div>
  </div>
)
export default Project
