

class Clock {
  counter(n, dt, inc) {
    return setInterval(() => {
      if (n.min || n.min == 0) if ((n.value + inc) < n.min) { n.value = n.default; }
      if (n.max) if ((n.value + inc) > n.max) { n.value = n.default; }
      n.value += inc;
    }, dt);
  }

}

export default new Clock();
