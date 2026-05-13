export function wordPattern(pattern: string, s: string): boolean {
  const patternMap = new Map<string, string>();
  const sMap = new Map<string, string>();

  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const pChar = pattern[i];
    const sChar = words[i];

    if (patternMap.has(pChar) && patternMap.get(pChar) !== sChar) {
      return false;
    }
    if (sMap.has(sChar) && sMap.get(sChar) !== pChar) {
      return false;
    }

    if (!patternMap.has(pChar)) {
      patternMap.set(pChar, sChar);
      sMap.set(sChar, pChar);
    }
  }
  return true;
}
