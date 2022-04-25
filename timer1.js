const times = process.argv.slice(2);

if (times.length === 0) {
  process.stdout.write('Please input a timer\n');
}

for (let time in times) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('(', times[time], ')');
  }, times[time] * 1000);
}
