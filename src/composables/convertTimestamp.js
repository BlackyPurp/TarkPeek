export function convertTime (timestamp, withTime = false) {
  if (!timestamp || Number.isNaN(timestamp)) return 'Invalid Date'
  let ts = new Date(Number(timestamp))
  let date = `${('0' + ts.getDate()).slice(-2)}.${('0' + (ts.getMonth()+1)).slice(-2)}.${ts.getFullYear()}`
  let time = `${('0' + ts.getHours()).slice(-2)}:${('0' + ts.getMinutes()).slice(-2)} Uhr`
  let final = (withTime) ? `${date} um ${time}` : date
  return final;
}
