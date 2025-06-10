function minimum(...args) {
  if (args[0] < args[1]) {
    return args[0];
  } else {
    return args[1];
  }
}

console.log(minimum(2, 3));
