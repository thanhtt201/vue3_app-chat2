import Socket from "socket.io-client";

const url = "http://localhost:3000";
const socket = Socket(url, { autoConnect: false });

export default socket;
