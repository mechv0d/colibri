import './NavRail.css'
import "@material/web/iconbutton/icon-button.js"
import '@material/web/button/text-button.js'
import "@material/web/icon/icon.js"
import "./DestinationButton/DestinationButton.jsx"

import Icon from '@mdi/react';
import {mdiAccount, mdiFoodApple, mdiFoodVariant, mdiHeartPulse, mdiHome, mdiMenu, mdiPlus} from '@mdi/js';
import DestinationButton from "./DestinationButton/DestinationButton.jsx";

import { useUser } from '/src/context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';


function NavRail() {
    const { logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    return <>
        <div className="nav-rail">
            <div className="nav-rail-menu">

                <md-icon-button className="nav-rail-menu-btn" id="nav-rail-menu-anchor"
                                onClick={() => document.body.querySelector("#nav-rail-menu-drop")?.show()}>
                    <md-icon>
                        <Icon path={mdiMenu} size={1}/>
                    </md-icon>
                </md-icon-button>
                <md-menu id="nav-rail-menu-drop" anchor="nav-rail-menu-anchor">
                    <md-menu-item href={"/about-us"}>
                        <div slot="headline">О нас</div>
                    </md-menu-item>
                    <md-menu-item href={"/contacts"}>
                        <div slot="headline">Контакты</div>
                    </md-menu-item>
                    <md-menu-item href={"/feedback"}>
                        <div slot="headline">Обратная связь</div>
                    </md-menu-item>
                </md-menu>


                <md-fab variant="tertiary" lowered={true} aria-label="Edit">
                    <md-icon slot="icon"><Icon path={mdiPlus} size={1}/></md-icon>
                </md-fab>
            </div>
            <div className="nav-rail-destinations">

                {/*<DestinationButton title="Главная" icon={mdiAccount} href={"/registration"}/>*/}
                <md-icon-button className="nav-rail-menu-btn" id="nav-rail-profile-anchor"
                                onClick={() => {
                                    document.body.querySelector("#nav-rail-profile-drop")?.show()
                                }}>
                    <md-icon>
                        <Icon path={mdiAccount} size={1}/>
                    </md-icon>
                </md-icon-button>
                <md-menu id="nav-rail-profile-drop" anchor="nav-rail-profile-anchor">
                    <md-menu-item href={"/registration"}>
                        <div slot="headline">Регистрация</div>
                    </md-menu-item>
                    <md-menu-item href={"/fill-profile"}>
                        <div slot="headline">Заполнить профиль</div>
                    </md-menu-item>
                    <md-menu-item href={"/auth"}>
                        <div slot="headline">Войти</div>
                    </md-menu-item>
                    <md-menu-item onClick={handleLogout}>
                        <div slot="headline">Выйти</div>
                    </md-menu-item>
                </md-menu>
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