import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client"

var endPoint = "http://127.0.0.1:3333"
interface WelcomeSocket {
    message: string;
    socket_id: string;
}
function SocketEvent({ children }: { children: any }) {

    const [socket, setSocket] = useState<Socket | null>(null);
    useEffect(() => {
        const newSocket: any = io(endPoint);
        setSocket(newSocket)
        return () => newSocket.close();
    }, [setSocket]);

    socket?.removeAllListeners()

    socket?.on("welcome", (data: WelcomeSocket) => {
        console.log(data.message, data.socket_id);

    })

    socket?.on("pong", (message) => {
        console.log(new Date().getTime(), message);
    })

    return (<>
        {children}
    </>)

}

export default SocketEvent