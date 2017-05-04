export function rollStats() {
  let flag = false;
  let tries = 1;
  let stats = [];
  while (!flag) {
    let count = 0;
    for (var i = 0; i < 6; i++) {
      let stat = [];
      for (var j = 0; j < 4; j++) {
        stat.push(Math.floor(Math.random() * 6) + 1);
      }
      stat = stat.sort();
      stat = stat.slice(1, 4);
      stat = stat.reduce((a, b) => a + b, 0);
      if (stat >= 15) {
        count++;
      }
      stats.push(stat);
    }
    if (count >= 2) {
      flag = true;
    } else {
      tries++;
      stats = [];
    }
  }
  let plural;
  if (tries === 1) {
    plural = "try";
  } else {
    plural = "tries";
  }
  let message = `Took ${tries} ${plural} to roll these scores.`;
  return [message, stats];
}

export function colvilleStats() {
  let flag = false;
  let tries = 1;
  let stats = {
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0
  };
  while (!flag) {
    let count = 0;
    for (let score in stats) {
      let stat = [];
      for (var j = 0; j < 4; j++) {
        stat.push(Math.floor(Math.random() * 6) + 1);
      }
      stat = stat.sort();
      stat = stat.slice(1, 4);
      stat = stat.reduce((a, b) => a + b, 0);
      if (stat >= 15) {
        count++;
      }
      stats[score] = stat;
    }
    if (count >= 2) {
      flag = true;
    } else {
      tries++;
      stats = {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0
      };
    }
  }
  let plural;
  if (tries === 1) {
    plural = "try";
  } else {
    plural = "tries";
  }
  let message = `Took ${tries} ${plural} to roll these scores.`;
  return [message, stats];
}
