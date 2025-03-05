// import {useState} from 'react'
import './App.css'
import '@material/web/all.js'
import BaseWrapper from "./components/BaseWrapper/BaseWrapper.jsx";
import TitleHeader from "./components/Headers/TitleHeader.jsx";
import CircularProgress from "./components/CircularProgress/CircularProgress.jsx";
import Graph from "./components/Graph/Graph.jsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <BaseWrapper top_bar_title='Домашняя страница'>
                <TitleHeader text="Статистика"/>
                <div className="activity-progress">
                    <div className="circles">
                        <CircularProgress value={0.75} inner_text="1521 ккал."></CircularProgress>
                        <CircularProgress value={0.41} inner_text="11 дней"></CircularProgress>
                    </div>
                    <Graph values={[.2, .4, .7, .8, .4, .95, .6, 1, .6, 1, .8, 1]}/>
                </div>

                <TitleHeader text="Сегодня, 12 января"/>
            </BaseWrapper>
        </>
    )
}

export default App
