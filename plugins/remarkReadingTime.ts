import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

interface File {
  data: {
    astro: {
      frontmatter: {
        minutesRead: number
        words: number
        [key: string]: unknown
      }
    }
  }
}

export function remarkReadingTime() {
  return function (tree: unknown, file: File) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    const frontmatter = file.data.astro.frontmatter

    frontmatter.minutesRead = readingTime.minutes
    frontmatter.words = readingTime.words
  }
}
