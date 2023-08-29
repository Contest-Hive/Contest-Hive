const startTime = Date.now();

function secondsToTime(s) {
  let m, h, d;
  [m, s] = [Math.floor(s / 60), s % 60];
  [h, m] = [Math.floor(m / 60), m % 60];
  [d, h] = [Math.floor(h / 24), h % 24];
  d = parseInt(d);
  h = parseInt(h);
  m = parseInt(m);
  let result = "";
  if (d > 0) {
    result += `${d} day${d > 1 ? "s" : ""}`;
  }
  if (h > 0) {
    result += ` ${h} hour${h > 1 ? "s" : ""}`;
  }
  if (m > 0) {
    result += ` ${m} minute${m > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${s} second${s > 1 ? "s" : ""}`;
  }
  return result.trim();
}

export async function GET(req, res) {
  const currentTime = Date.now();
  const time = Math.floor((currentTime - startTime) / 1000);
  return new Response(secondsToTime(time));
}
