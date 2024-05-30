// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {topic, title, avatarUrl, imageUrl, author, id} = listItem
  return (
    <div>
      <Link to={`/blogs/${id}`} className="nav-link-">
        <li className="list-item-container">
          <img src={imageUrl} alt="" className="blog-list-img" />
          <div className="card-1-list-cont">
            <p>{topic}</p>
            <h2>{title}</h2>
            <div className="inner-card-1-cont">
              <img src={avatarUrl} alt="" className="blog-list-img-2" />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default BlogItem
