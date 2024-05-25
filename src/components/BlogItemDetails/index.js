// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updateData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updateData, isLoader: false})
  }

  renderBlogItemsDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt={author} className="avatarUrl-style" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="imageurl-style" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#000BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemsDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
