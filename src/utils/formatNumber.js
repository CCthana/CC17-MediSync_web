export default function formatNumber(number) {
  return (
    new Intl.NumberFormat('th-TH', {maximumFractionDigits: 0}).format(number)
  )
}
