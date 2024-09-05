import {Component} from 'react'
import './index.css'
import LeftMenuDesign from '../LeftMenuDesign'
import ProductPlayList from '../ProductPlayList'
import LeftPlayList from '../LeftPlayList'

const menu = [
    {
        id: 1,
        name: 'Revenue'
    },
    {
        id: 2,
        name: 'Shoppable Video'
    },
    {
        id: 3,
        name: 'Story'
    },
    {
        id: 4,
        name: 'Live Commerce'
    },
    {
        id: 5,
        name: 'Playlist Manager'
    },
    {
        id: 6,
        name: 'One Click Post'
    },
    {
        id: 7,
        name: 'Calendar'
    },
    {
        id: 8,
        name: 'Hire Influencer'
    },
]

class Home extends Component{
    state = {
        apiData: [],
        apiData2: []
    }

    componentDidMount(){
        this.getApiCall()
        this.getApiCall2()
    }

    getApiCall = async () => {
        const url = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
                'X-Tenant-Key': 'TYKE070323',
              },
              body: JSON.stringify({ Content_Type: 2 }),  
        }
        const response = await fetch(url, options)
        const responseData = await response.json()
        const data = responseData.data
        const updatedData = data.map(each => ({
            contentType: each.Content_Type,
            description: each.Description,
            isTagged: each.IsTagged,
            modUrl: each.MOD_URL,
            name: each.Name,
            playListCode: each.PlayListCode,
            playListId: each.PlayListId,
            postIds: each.Post_Ids,
            url: each.URL,
            urlCode: each.URL_Code
        }))
        this.setState({
            apiData: updatedData
        })
    }

    getApiCall2 = async () => {
        const url = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
                'X-Tenant-Key': 'TYKE070323',
              },
              body: JSON.stringify({"Index":1,"ContentType":[2],"IsTagged":false,"URL":""}),  
        }
        const response = await fetch(url, options)
        const responseData = await response.json()  
        const data = responseData.data.Feeds
        const updatedData2 = data.map(each => ({
            thumbnailTitle: each.Thumbnail_Title,
            thumbnailURL: each.Thumbnail_URL,
            videoDuration: each.Video_duration
        }))
        this.setState({
            apiData2: updatedData2
        })
    }

    render(){
        const {apiData, apiData2} = this.state

        return(
            <div className='bg'>
                <div className='leftBox'>
                    <div className='blaash-heading'>
                    <h1>Blaash</h1>
                    </div>
                    <ul>
                        {menu.map(each => (
                            <LeftMenuDesign each={each}/>
                        ))}
                    </ul>
                    
                </div>
                <div className='middleBox'>
                    <div className='middleTopBox'>
                        <div>
                        <h1 className='heading'>Design Studio</h1>
                        </div>
                        <div className='middleTopBox2'>
                            <p className='para'>Support Request</p>
                            <p className='para'>Product Tour</p>
                            <input type="search" 
                                   placeholder='Search Project...'/>
                        </div>
                    </div>
                    <div className='middleBox2'>
                        <div className='middleMiddleBox'>
                            <ul className='unOrderedList'>
                                {apiData.map(eachItem => (
                                    <ProductPlayList eachItem={eachItem}/>
                                ))}
                            </ul>
                            
                        </div>
                        <div className='middleRightBox'>
                            <ul className='unOrderedList2'>
                                {apiData2.map(each => (
                                    <LeftPlayList each={each}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home