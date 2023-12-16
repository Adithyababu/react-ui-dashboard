import {Menu,Image, Typography} from "antd";
import {AiTwotoneAppstore} from "react-icons/ai";
import {FaQuestion} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SideMenu() {
    return (<div className="SideMenu">
    <Image style={{paddingTop:'20px',paddingLeft:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" width="100px" ></Image>
        <Typography.Title level={5} style={{paddingLeft:"30px"}}>Ram Mohan ></Typography.Title> 
        <Typography.Title style={{paddingLeft:"10px",fontSize:"13px",paddingRight:"20px"}}>rammohan2@gmail.com</Typography.Title>
<Menu className="menu" items={[
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