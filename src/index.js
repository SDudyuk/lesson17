function randomDelayPrint(message) {
  Array.from(message).forEach(char => {
    setTimeout(() => {
      console.log(char)
    }, Math.random()*1000);
  });
}

randomDelayPrint('Hello!');