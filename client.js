const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

  return conn;
};

module.exports = { connect };