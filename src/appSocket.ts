import IO from 'socket.io-client';

export const appSocket = IO("https://chat-jeffersontpadua.herokuapp.com/", {
  secure: true
});
