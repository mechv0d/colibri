import './BaseWrapper.css'
import '@material/web/color/_color.scss'

function BaseWrapper(props) {
    console.log(props)
    return <>
        <div className="base-wrapper">
        {/*<NavRail></NavRail>*/}
            <div className="content">
                <TopAppBar text="BaseWrapper">

                </TopAppBar>
            </div>
        </div>
    </>
}