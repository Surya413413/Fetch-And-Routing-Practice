// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsData: [], isLoader: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formateData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogsData: formateData, isLoader: false})
  }

  render() {
    const {blogsData, isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem blogData={each} key={each.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
