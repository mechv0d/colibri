import './NavRail.css'
import "@material/web/iconbutton/icon-button.js"
import '@material/web/button/text-button.js'
import "@material/web/icon/icon.js"
import "./DestinationButton/DestinationButton.jsx"

import Icon from '@mdi/react';
import {mdiFoodApple, mdiFoodVariant, mdiHeartPulse, mdiHome, mdiMenu, mdiPlus} from '@mdi/js';
import DestinationButton from "./DestinationButton/DestinationButton.jsx";

// import {toggleMenu} from "./MenuScript.js"

// let menuEl = toggleMenu()


function NavRail() {
    return <>
        <div className="nav-rail">
            <div className="nav-rail-menu">

                <md-icon-button className="nav-rail-menu-btn" id="nav-rail-menu-anchor" onClick={() => document.body.querySelector("#nav-rail-menu-drop").show()}>
                    <md-icon>
                        <Icon path={mdiMenu} size={1}/>
                    </md-icon>
                </md-icon-button>
                <md-menu id="nav-rail-menu-drop" anchor="nav-rail-menu-anchor">
                    <md-menu-item>
                        <div slot="headline">О нас</div>
                    </md-menu-item>
                    <md-menu-item href={"/contacts"}>
                        <div slot="headline">Контакты</div>
                    </md-menu-item>
                    <md-menu-item>
                        <div slot="headline">Обратная связь</div>
                    </md-menu-item>
                </md-menu>

                <md-fab variant="tertiary" lowered aria-label="Edit">
                    <md-icon slot="icon"><Icon path={mdiPlus} size={1}/></md-icon>
                </md-fab>
            </div>
            <div className="nav-rail-destinations">

                <DestinationButton title="Главная" icon={mdiHome} href={"/"}/>
                <DestinationButton title="Трекер" icon={mdiHeartPulse}/>
                <DestinationButton title="Блюда" icon={mdiFoodApple}/>
                <DestinationButton title="Питание" icon={mdiFoodVariant}/>
            </div>
        </div>

        {/*<script type="module" src="./MenuScript.js">console.log(1)</script>*/}
    </>
}

export default NavRail;