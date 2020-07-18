// 937. Reorder Data in Log Files
// You have an array of logs.  Each log is a space delimited string of words.
//
// For each log, the first word in each log is an alphanumeric identifier.  Then, either:
//
// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.
//
// Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.
//
// Return the final order of the logs.

// time O(n log n)
// space O(n)
function reorderLogFiles(logs) {
  let letterLogs = [];
  let digitsLogs = [];
  let result = [];

  for (let log of logs) {
    if (Number.isInteger(Number(log.split(' ')[1]))) digitsLogs.push(log);
    else letterLogs.push(log.split(' '));
  }

  letterLogs.sort((a, b) => {
    if (a.slice(1) < b.slice(1)) return -1;
    if (a.slice(1) > b.slice(1)) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
  });

  for (let letterLog of letterLogs) {
    result.push(letterLog.join(' '));
  }

  return result.concat([...digitsLogs]);
}