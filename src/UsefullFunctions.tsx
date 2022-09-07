export const Eng2Fa = (s: string) => (
    s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
);

export const makeWebName = (fullName: string) => {
    const MAX_LEN = 10;
    if(fullName.length < MAX_LEN)
      return fullName;
    let reduced: string = fullName.slice(0,  MAX_LEN)
    return reduced + '...';
  }
  
