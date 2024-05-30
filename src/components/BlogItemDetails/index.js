// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogItemsList: updatedData})
    this.setState({isLoading: false})
    console.log(updatedData)
  }

  finalResList = () => {
    const {blogItemsList} = this.state
    const {author, avatarUrl, imageUrl, content, title} = blogItemsList

    return (
      <div className="bg-container">
        <h1>{title}</h1>
        <div className="card-1">
          <img src={avatarUrl} alt={author} className="img-1-bg-item" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="l-img-2 " />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader
            type="TailSpin"
            data-testid="loader"
            color="#00bfff"
            height={50}
            width={50}
          />
        ) : (
          this.finalResList()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
