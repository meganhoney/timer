const times = process.argv.slice(2);

if (times.length === 0) {
  process.stdout.write('Please input a timer.\n');
}

for (let time in times) {
  if (times[time] > 0 && typeof parseInt(times[time]) === 'number') {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('(', times[time], ') seconds have elapsed.');
    }, times[time] * 1000);
  } else {
    process.stdout.write('Please input a valid timer.\n');
  }
}
