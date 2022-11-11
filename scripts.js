/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search



/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"XEC6wu3S4kkCB0Zy","label":"reddit","bookmarks":[{"id":"huZPpydlUwMd8UvG","label":"r/startpages","url":"https://www.reddit.com/r/startpages/"},{"id":"VqHGdl48hbqKA5X4","label":"r/typescript","url":"https://www.reddit.com/r/typescript/"},{"id":"cUoIjHI4YCLFBG86","label":"r/reactjs","url":"https://www.reddit.com/r/reactjs/"}]},{"id":"Vu2BqAxhwIlMOEle","label":"design tools","bookmarks":[{"id":"JthBjYab148eheYM","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"lDe5ETItPb2Tlu5s","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"smtyfHAkQfzm02qW","label":"haikei","url":"https://app.haikei.app/"},{"id":"I9RbCq5M61pY0LLX","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"3ALWGXQWqW5cmpoa","label":"worth reading","bookmarks":[{"id":"gWNQI0AJQonARI2S","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"mg2pJgYhGTenEcHb","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"kvOukPmycehAL2qm","label":"react docs","url":"https://reactjs.org/docs/getting-started.html"}]},{"id":"UUWjNhVGxA6ll2Xo","label":"sources","bookmarks":[{"id":"UJUv75wjRhUoRUq9","label":"icons","url":"https://feathericons.com/"},{"id":"sXCyDFfponSst5Cs","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"IEF34rHohTKJznps","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"SsQ7C7IUDiiIToka","label":"author","url":"https://prettycoffee.github.io/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
