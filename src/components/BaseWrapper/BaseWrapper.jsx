import './BaseWrapper.css'
import TopAppBar from "../Headers/TopAppBar.jsx";

function BaseWrapper(props) {
    return <>
        <div className="base-wrapper">
            {/*<NavRail></NavRail>*/}
            <div className="content">
                <TopAppBar title_text={props.top_bar_title}/>
                {props.children}
            </div>
        </div>
    </>
}

export default BaseWrapper