const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data
  conn.on("data", (messageFromServer) => {
    console.log(messageFromServer);
  });

  // confirm established connection with server
  conn.on("connect", () => {
    console.log("Successfully connected game to server");
    // send name to server
    conn.write("Name: KLB");
  })
  
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 1000);
  // });

  return conn;
};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

module.exports = { connect };