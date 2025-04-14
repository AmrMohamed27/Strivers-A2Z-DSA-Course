export function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  const concatenated = s + s;
  return concatenated.includes(goal);
}
