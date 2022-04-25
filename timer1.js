const times = process.argv.slice(2);

for (let time in times) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('(', times[time], ')');
  }, times[time] * 1000);
}
