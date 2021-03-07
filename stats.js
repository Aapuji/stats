function stats(out, ...nums) {
  // Mean
  let mean = nums.reduce((accumulator, current) => {return accumulator += current}) / nums.length;
  // Median
  let median;
  let sort = nums.sort();
  if (nums.length % 2 === 0) {
    median = (sort[sort.length / 2] + sort[sort.length / 2 + 1]) / 2;
  } else {
    median = sort[(sort.length - 1) / 2];
  }
  // Mode
  return {'mean': mean, 'median': median, /*'mode': mode, 'range': range*/};
}
