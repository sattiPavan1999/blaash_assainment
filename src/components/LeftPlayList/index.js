import './index.css'

const LeftPlayList = props => {
    const {each} = props
    const {thumbnailTitle, thumbnailURL, videoDuration} = each
    return(
        <li className='list-left-playList'>
            <img src={thumbnailURL}
                 className='image'/>
            <p className='title'>{thumbnailTitle}</p>
        </li>
    )
}

export default LeftPlayList