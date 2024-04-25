export function detectFlag(flag: '--lg') {
  return process.argv.includes(flag);
}
