/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import Youtube from './Youtube'
import Tweet from './Tweet'
import Side from './Side'
import Loader from './Loader'

class Newsfeed extends React.Component {
  state = {
    show: false,
    yt: false,
    tw: { 
      tw: false,
      media: false,
      info: false
    },
    i1: 0,
    i2: 10
  }

  async componentDidMount() {
    const d = (await axios.get('/api/all')).data
    this.setState({ 
      yt: d.yt, 
      tw: {
        tw: d.tw.data,
        info: d.tw.includes.users[0], 
        media: d.tw.includes.media
      } 
    },() => this.filter())
  }

  filter = (by) => {
    let show
    const { tw, yt } = this.state

    switch (by) {
      case 'tw':
        show = tw.tw
        break
      case 'yt':
        show = yt
        break
      case 'likes':
        show = [...yt, ...tw.tw].sort((a,b) =>
          (b.statistics ? b.statistics.likeCount : b.public_metrics.like_count ) 
          - (a.statistics ? a.statistics.likeCount : a.public_metrics.like_count))
        break
      default:
        show = [...yt, ...tw.tw].sort((a,b) => 
          new Date(b.created_at ? b.created_at : b.snippet.publishedAt ) 
          - new Date(a.created_at ? a.created_at : a.snippet.publishedAt))
    }

    this.setState({ show, i1: 0,i2: 10 })
  }

  page = (d) => {
    const { i1, i2 } = this.state
    d ? 
      this.setState({ i1: i1 + 10 , i2: i2 + 10 }) 
      : this.setState({ i1: i1 - 10 , i2: i2 - 10 })
    window.scrollTo(0, 0)
  }


  render () {

    const { show, tw, i1,i2  } = this.state
    if (!show) return <Loader/>

    return (
      
      <div className='flex'>
        <Side filter={this.filter}/>

        <div className='content'>
          {show.slice(i1, i2).map(s => s.kind ?
            <Youtube 
              key={s.id} 
              video={s}/>
            :
            <Tweet 
              key={s.id}
              tweet={s}
              info={tw.info}
              media={tw.media}/>
          )}

          <div className='arrows'>
            {i1 !== 0 ? 
              <p onClick={()=>this.page(false)} className='left'> ← </p> 
              : <p> </p>}
            {i2 !== 100 ? <p onClick={()=>this.page(true)} className='right'> → </p>
              : <p> </p>}
          </div>

        </div>
      </div>
    )
  }
}
export default Newsfeed