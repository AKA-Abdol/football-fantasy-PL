export const Eng2Fa = (s: string) => (
    s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
);

export const Fa2Eng = (s: string) => (
  s.replace(/[۰-۹]/g, (d) => `${'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)}`)
);

export const makeWebName = (fullName: string) => {
  const MAX_LEN = 7;
  if(fullName.length < MAX_LEN + 3)
    return fullName;
  let reduced: string = fullName.slice(0,  MAX_LEN)
  return reduced + '...';
}

export const getNumberString = (num: number) => {
  const yekan = [" یک", " دو", " سه", " چهار", " پنج", " شش", " هفت", " هشت", " نه"];
  const dahgan = [" بیست", " سی", " چهل"];
  const dah = [" ده", " یازده", " دوازده", " سیزده", " چهارده", " پانزده", " شانزده", " هفده", " هیجده", " نوزده"];
  if(num > 0 && num < 10)
      return yekan[num - 1];
  if(num > 9 && num < 20)
      return dah[num - 10];
  if(num > 19)
      return dahgan[(Math.floor(num / 10)) - 2] + ((num % 10) ? `و${yekan[(num % 10) - 1]}` : '');
}

export const getOrderedString = (num: number) => {
  const yekan = [" یک", " دو", " سو", " چهار", " پنج", " شش", " هفت", " هشت", " نه"];
  const dahgan = [" بیست", " سی", " چهل"];
  const dah = [" ده", " یازده", " دوازده", " سیزده", " چهارده", " پانزده", " شانزده", " هفده", " هیجده", " نوزده"];
  if(num > 0 && num < 10)
      return `${yekan[num - 1]}م`;
  if(num > 9 && num < 20)
      return `${dah[num - 10]}م`;
  if(num > 19)
      return `${dahgan[(Math.floor(num / 10)) - 2] + ((num % 10) ? ` و${yekan[(num % 10) - 1]}` : '')}م`;
}