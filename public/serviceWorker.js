class Threads {
  constructor() {
    this.arr = [];
  }
  addThreads(message) {
    this.arr.push(
      setInterval(() => {
        console.log(message);
      }, 1000)
    );
  }
}

const th = new Threads();
th.addThreads("Hey This is my test Thread");
th.addThreads("Hey This is my test Threadxxx");

self.addEventListener("install", (event) => {
  console.log("Service worker installig...", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...", event);
});
