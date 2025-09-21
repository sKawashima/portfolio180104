/**
 * TwitterのURLからツイートIDとユーザー名を抽出する
 * @param url TwitterのURL
 * @returns {tweetId: string, username: string} または null
 */
export function extractTweetInfo(
  url: string,
): { tweetId: string; username: string } | null {
  const twitterUrlRegex =
    /https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/([^/]+)\/status\/(\d+)/
  const match = url.match(twitterUrlRegex)

  if (match) {
    return {
      username: match[1],
      tweetId: match[2],
    }
  }

  return null
}

/**
 * Markdownの中からTwitterリンクを見つけて埋め込みコンポーネントに置換する
 * @param content Markdownコンテンツ
 * @returns 置換済みのコンテンツ
 */
export function replaceTwitterLinks(content: string): string {
  const twitterLinkRegex =
    /\[Twitter: @([^\]]+)\]\((https?:\/\/(?:twitter\.com|x\.com)\/[^)]+)\)/g

  return content.replace(twitterLinkRegex, (match, _username, url) => {
    const tweetInfo = extractTweetInfo(url)
    if (tweetInfo) {
      return `<TwitterEmbed tweetId="${tweetInfo.tweetId}" username="${tweetInfo.username}" />`
    }
    return match
  })
}
