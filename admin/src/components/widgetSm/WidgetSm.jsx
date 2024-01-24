import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { USER_REQUEST } from "../../config.js";

export default function WidgetSm() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async (req, res) => {
            try {
                const response = await USER_REQUEST.get("user/findAll/?new=true");
                setUsers(response.data.data);
            } catch (err) {
                console.log("error ", err);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            {users.map((user) => (
                <ul className="widgetSmList" key={user.id}>
                    <li className="widgetSmListItem">
                        <img src={user.img} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.fristname}</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
}
