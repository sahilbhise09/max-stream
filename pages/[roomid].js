import { useSocket } from "@/context/socket"
import { useEffect } from "react"

import usePeer from "@/hooks/usePeer"
const Room = () => {
    const socket = useSocket()
    useEffect(() => {
        socket?.on("connect", () => {
            console.log(socket.id);
        });
    }, [socket])
}

export default Room