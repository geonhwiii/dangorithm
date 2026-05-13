export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sMap.has(sChar)) {
      sMap.set(sChar, tChar);
    }

    if (!tMap.has(tChar)) {
      tMap.set(tChar, sChar);
    }

    if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
      return false;
    }
  }
  return true;
}
