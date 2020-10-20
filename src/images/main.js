module.exports = {
  noice: (message) => image(message, 'noice.gif'),
  fgm: (message) => image(message, 'feelsGoodMan.jpg'),
};

function image(message, image) {
  return message.channel.send('', { files: [`./assets/images/${image}`] });
}
