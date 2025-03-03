import {useState} from 'react'
import './App.css'
import '@material/web/all.js'
import BaseWrapper from "./components/BaseWrapper/BaseWrapper.jsx";
import TitleHeader from "./components/Headers/TitleHeader.jsx";
import CircularProgress from "./components/CircularProgress/CircularProgress.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BaseWrapper top_bar_title='Привет!'>
                <TitleHeader text="Статистика"/>
                <div className="activity-progress">
                    <div className="circles">
                        <CircularProgress value={0.75} inner_text="1521 ккал."></CircularProgress>
                        <CircularProgress value={0.75} inner_text="1521 ккал."></CircularProgress>
                    </div>
                </div>

                <TitleHeader text="Сегодня, 12 января"/>
            </BaseWrapper>
        </>
    )
}

export default App
