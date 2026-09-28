function d(v){const x=v instanceof Date?new Date(v):new Date(v);if(Number.isNaN(x.getTime()))throw new RangeError("Invalid date");return x;}
export function dateRange(start,end,options={}) {
  const first=d(start), last=d(end), unit=options.unit??"day", step=options.step??1, inclusive=options.inclusive!==false;
  if(!Number.isInteger(step)||step<=0)throw new RangeError("step must be positive");
  const out=[]; let current=first;
  const advance=(x)=>{const n=new Date(x);if(unit==="day")n.setUTCDate(n.getUTCDate()+step);else if(unit==="week")n.setUTCDate(n.getUTCDate()+7*step);else if(unit==="month")n.setUTCMonth(n.getUTCMonth()+step);else throw new RangeError("Unsupported unit");return n;};
  while (inclusive ? current<=last : current<last) { out.push(new Date(current)); current=advance(current); }
  return out;
}
