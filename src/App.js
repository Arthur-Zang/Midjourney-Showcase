import React, {Component} from 'react'
import CardList from './Components/CardList.js/CardList'
import SearchBox from './Components/SearchBox/SearchBox'
import { images } from './Components/List/images'
import Scroll from './Components/Scroll/Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      images: images,
      searchfield: ''
    }
  }

  componentDidMount() {
      document.body.style.background = 'linear-gradient(to right, #0f0c29, #302b63, #24243e)';
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const {images, searchfield} = this.state;
    const filteredImages = images.filter(image => {
      return image.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || image.prompt.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (!images.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <h1 style={{color: '#F8F8FF'}}>Midjourney Showcase</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList images={filteredImages} />
          </Scroll>
        </div>
      );
    }
  }
}



export default App