let d = new Date(2010, 7, 5);
let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
const date = `${da}-${mo}-${ye}`;
export { date };
