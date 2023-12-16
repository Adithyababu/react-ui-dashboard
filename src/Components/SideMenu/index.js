import {Menu} from "antd";
import {AiTwotoneAppstore} from "react-icons/ai";
import {FaQuestion} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SideMenu() {
    return (<div className="SideMenu">
        <Menu items={[
            {
            label:"Dashboard",
            icon:<AiTwotoneAppstore/>,
            key:"/"
            },
            {
            label:"Perks",
            key:"Perks"
            },
            {
            label:"Addons",
            icon:<FontAwesomeIcon icon=" fa-regular fa-puzzle-piece" />,
            key:"Addons"
            },
            {
            label:"FAQ",
            icon:<FaQuestion/>,
            key:"FAQ"
            },
            {
            label:"Support",
            icon:<FontAwesomeIcon icon="fa-regular fa-comments-question-check" />,

            key:"Support"
            },
        ]}>

        </Menu>
    </div>
    );
}
export default SideMenu;