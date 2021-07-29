var x = 99;

while (x <=200) {
  if (x % 3 === 0 && x % 5 === 0) {
      console.log("LoopyLighthouse");
  }else if (x % 5 === 0) {
      console.log("Loopy");
  }else if (x % 3 === 0 ) {
      console.log("Lighthouse");
  }else {
      console.log(x);
  }
  x = x + 1;
}