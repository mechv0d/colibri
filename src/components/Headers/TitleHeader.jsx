import '@material/web/typography/md-typescale-styles.js'
import './TitleHeader.css'

function TitleHeader(props) {
    return <>
        <span className="title-header"><h2 className="md-typescale-title-large">{props.text}</h2></span>
    </>
}

export default TitleHeader;