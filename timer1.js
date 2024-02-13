const args = process.argv.slice(2).map(x => x * 1000).sort((a, b) => a - b);


for (let i of args) {
  if (i > 0){
    if (Number.isInteger(i)) {
      setTimeout(() => {
        process.stdout.write('\x07');
    }, i);
    }
  }
}



