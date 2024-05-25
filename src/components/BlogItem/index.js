// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <div className="link-items-two">
        <img src={imageUrl} alt={`item${id}`} className="imageUrl-style" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div>
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="avatarUrl-style"
            />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
