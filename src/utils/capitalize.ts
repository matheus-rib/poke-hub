export default function (text: string) {
  const texts = text.replaceAll('-', ' ').split(' ')
  const capitalizedTexts = texts.map(
    text => text.charAt(0).toUpperCase() + text.slice(1),
  )
  return capitalizedTexts.join(' ')
}
