export const Eng2Fa = (s: string) => (
    s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
);
