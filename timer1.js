const times = process.argv.slice(2);

if (times.length === 0) {
  // console.log('Please input a timer.');
  // including suggestion from code review to throw error
  throw Error('No input parameters were provided');
}

for (let time in times) {
  if (times[time] > 0 && typeof parseInt(times[time]) === 'number') {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('(', times[time], ') seconds have elapsed.');
    }, times[time] * 1000);
  } else {
    console.log('Please input a valid timer.');
  }
}
