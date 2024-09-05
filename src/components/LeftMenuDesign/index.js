import './index.css'

const LeftMenuDesign = props => {
    const {each} = props
    return(
        <li className='listItem'>
            {each.name}
        </li>
    )
}

export default LeftMenuDesign