// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogLists: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(e => ({
      author: e.author,
      avatarUrl: e.avatar_url,
      id: e.id,
      title: e.title,
      topic: e.topic,
      imageUrl: e.image_url,
    }))
    this.setState({blogLists: updatedData})
    this.setState({isLoading: false})
  }

  render() {
    const {blogLists, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="pink" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {blogLists.map(e => (
              <BlogItem key={e.id} listItem={e} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
