function convertNumberToPersianWords(number) {
  const units = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
  const teens = [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
  ];
  const tens = [
    "",
    "",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const hundreds = [
    "",
    "صد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];
  const scales = ["", "هزار", "میلیون", "میلیارد", "تریلیون"];

  if (number === 0) return "صفر";

  let word = "";
  let scaleIndex = 0;
  zzzz;
  while (number > 0) {
    let chunk = number % 1000;
    if (chunk > 0) {
      let chunkWord = "";
      if (chunk > 99) {
        chunkWord += hundreds[Math.floor(chunk / 100)] + " ";
        chunk %= 100;
      }
      if (chunk > 9 && chunk < 20) {
        chunkWord += teens[chunk - 10] + " ";
      } else {
        if (chunk >= 20) {
          chunkWord += tens[Math.floor(chunk / 10)] + " ";
          chunk %= 10;
        }
        if (chunk > 0) {
          chunkWord += units[chunk] + " ";
        }
      }
      word = chunkWord + scales[scaleIndex] + " " + word;
    }
    scaleIndex++;
    number = Math.floor(number / 1000);
  }

  return word.trim() + " تومان";
}

console.log(convertNumberToPersianWords(1250600));
