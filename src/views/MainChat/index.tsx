import "./index.css"

import LeftSide from "./components/LeftSide"
import MainContentChat from "./components/MainContentChat"
import SocketEvent from "../../Wrapper/SocketEvent"

function MainChat() {
    return (
        <SocketEvent>
            <div id="messages-main-body">
                <LeftSide />
                <MainContentChat />
            </div>
        </SocketEvent>
    )
}

export default MainChat