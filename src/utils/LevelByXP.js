const xpByLevel = {
  1: 50,
  2: 100,
  3: 150,
  4: 200,
  5: 300,
  6: 400,
  7: 500,
  8: 600,
  9: 800,
  10: 1000,
  11: 1200,
  12: 1400,
  13: 1600,
  14: 2000,
  15: 2500,
  16: 3000,
  17: 3500,
  18: 4000,
  19: 4500,
  20: 5000
};

export function getLevel(xp) {
  let level = 1;
  Object.keys(xpByLevel).forEach((lv) => {
    if (xpByLevel[lv] <= xp) {
      level = lv;
    }
  });
  return level;
}
