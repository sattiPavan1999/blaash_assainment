import './index.css'
import { IoIosMusicalNotes } from "react-icons/io";
import { PiVideoLight } from "react-icons/pi";

const ProductPlayList = props => {
    const {eachItem} = props
    const {contentType, description, isTagged,
         modUrl, name, playListCode, playListId,
         postIds, url, urlCode} = eachItem
    return(
        <li className='list-element-playlist'>
            <IoIosMusicalNotes />
            <p className='music-name'>{name}</p>
            <div className='videos-length'>
                <PiVideoLight />
                <p className='music-name'>{postIds.length} Videos</p>
            </div>
            
        </li>
    )
}

export default ProductPlayList