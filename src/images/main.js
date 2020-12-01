module.exports = {
  noice: (message) => image(message, 'noice.gif'),
  fgm: (message) => image(message, 'feels-good-man.jpg'),
  right: (message) => image(message, 'just-right.jpg'),
};

function image(message, image) {
  return message.channel.send('', { files: [`./assets/images/${image}`] });
}
