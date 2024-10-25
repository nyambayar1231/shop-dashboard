// Mongolian character transliteration mapping
const mongolianToLatin: { [key: string]: string } = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'ye',
  ё: 'yo',
  ж: 'j',
  з: 'z',
  и: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  ө: 'u',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ү: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'i',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  А: 'a',
  Б: 'b',
  В: 'v',
  Г: 'g',
  Д: 'd',
  Е: 'ye',
  Ё: 'yo',
  Ж: 'j',
  З: 'z',
  И: 'i',
  Й: 'i',
  К: 'k',
  Л: 'l',
  М: 'm',
  Н: 'n',
  О: 'o',
  Ө: 'u',
  П: 'p',
  Р: 'r',
  С: 's',
  Т: 't',
  У: 'u',
  Ү: 'u',
  Ф: 'f',
  Х: 'h',
  Ц: 'ts',
  Ч: 'ch',
  Ш: 'sh',
  Щ: 'sch',
  Ъ: '',
  Ы: 'i',
  Ь: '',
  Э: 'e',
  Ю: 'yu',
  Я: 'ya',
};

interface SlugOptions {
  lowercase?: boolean;
  separator?: string;
  transliterate?: boolean;
  maxLength?: number;
  useEnglishAlias?: boolean;
}

interface CategoryTranslation {
  mn: string;
  en?: string;
}

export const generateSlug = (
  text: string | CategoryTranslation,
  options: SlugOptions = {}
): string => {
  const {
    lowercase = true,
    separator = '-',
    transliterate = true,
    maxLength = 100,
    useEnglishAlias = false,
  } = options;

  // If text is a translation object and English alias is preferred
  if (typeof text !== 'string' && useEnglishAlias && text.en) {
    return generateSlug(text.en, { ...options, transliterate: false });
  }

  // Get the Mongolian text if input is a translation object
  const inputText = typeof text === 'string' ? text : text.mn;

  let slug = inputText;

  // Transliterate Mongolian characters if enabled
  if (transliterate) {
    slug = slug
      .split('')
      .map((char) => mongolianToLatin[char] || char)
      .join('');
  }

  // Convert to lowercase if enabled
  if (lowercase) {
    slug = slug.toLowerCase();
  }

  // Replace spaces and unwanted characters
  slug = slug
    // Replace spaces with separator
    .replace(/\s+/g, separator)
    // Remove non-word chars (keep Mongolian unicode if transliteration is disabled)
    .replace(transliterate ? /[^\w-]+/g : /[^\w\u0400-\u04FF-]+/g, '')
    // Replace multiple separators with single
    .replace(new RegExp(`${separator}+`, 'g'), separator)
    // Remove leading/trailing separator
    .replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');

  // Trim to max length without breaking words
  if (maxLength && slug.length > maxLength) {
    slug = slug
      .substring(0, maxLength)
      .replace(new RegExp(`${separator}\\w*$`), '');
  }

  return slug;
};
