// import {bookmarkData} from './homepageData.js'

// TODOs

// animation/styling
  // add animation effect to search bar when it is focused on
  // add animations to search engine buttons

// funcitonality
  // fix stuff
  // add widgets
  // clean up code
  // export data to different file


// // make list of bookmarks
// // to specify
// //  - link      - icon label
// //  - title     - #columns 
// const bookmarks = [
//   // school bookmarks
//   {
//     'title': 'school',
//     'columns': 3,
//     'bookmarks': [
//       {
//         //LABEL - LINK - ICON
//         'label':  'courselink',
//         'link':   'https://courselink.uoguelph.ca/d2l/home',
//         'icon':   'library_books'
//       },
//       {
//         'label':  'outlook',
//         'link':   'https://outlook.office.com/mail/',
//         'icon':   'inbox'
//       },
//       {
//         'label':  'onedrive',
//         'link':   'https://uoguelphca-my.sharepoint.com/personal/sharlaar_uoguelph_ca/_layouts/15/onedrive.aspx',
//         'icon':   'cloud'
//       },
//       {
//         'label':  'onedrive',
//         'link':   'https://uoguelphca-my.sharepoint.com/personal/sharlaar_uoguelph_ca/_layouts/15/onedrive.aspx',
//         'icon':   'cloud'
//       },
//     ]
//   },

//   // entertainment bookmarks
//   {
//     'title': 'entertainment',
//     'columns': 3,
//     'bookmarks': [
//       {
//         //LABEL - LINK - ICON
//         'label':  'youtube',
//         'link':   'https://www.youtube.com/',
//         'icon':   'smart_display'
//       },
//       {
//         'label':  'netflix',
//         'link':   'https://www.netflix.com/ca/',
//         'icon':   'movie'
//       },
//       {
//         'label':  'sportsnet',
//         'link':   'https://watch.sportsnet.ca/',
//         'icon':   'sports_hockey'
//       },
//       {
//         'label':  'disney+',
//         'link':   'https://www.disneyplus.com/en-ca',
//         'icon':   'auto_graph'
//       },
//       {
//         'label':  'prime video',
//         'link':   'https://www.primevideo.com/hp/video/offers/nonprimehomepage/ref=dv_web_force_root?_encoding=UTF8&dvah=nonprimehomepage',
//         'icon':   'play_circle'
//       },

      
//     ]
//   },

//   // work bookmarks
//   {
//     'title': 'work',
//     'columns': 2,
//     'bookmarks': [
//       {
//         //LABEL - LINK - ICON
//         'label':  'courselink',
//         'link':   'https://courselink.uoguelph.ca/d2l/home',
//         'icon':   'library_books'
//       },
//       {
//         'label':  'outlook',
//         'link':   'https://outlook.office.com/mail/',
//         'icon':   'inbox'
//       },
//       {
//         'label':  'onedrive',
//         'link':   'https://uoguelphca-my.sharepoint.com/personal/sharlaar_uoguelph_ca/_layouts/15/onedrive.aspx',
//         'icon':   'cloud'
//       },
//     ]
//   },
// ];



// // add bookmarks into html

// // create each list item
// createListItem = ({label, link, icon}) => {
//   const listItem = document.createElement("li")


//   // create span
//   const iconSpan = document.createElement("span")
//   iconSpan.className = "material-symbols-outlined bookmarkicon"
//   iconSpan.innerHTML = icon


//   // create link
//   const linkRef = document.createElement("a")
//   linkRef.className = "bookmarktext"
//   linkRef.href = link
//   linkRef.innerHTML = label

//   // add to li
//   listItem.append(iconSpan)
//   listItem.append(linkRef)

//   return listItem
// }


// // make group of bookmarks
// placeBookmarkGroup = ({title, columns, bookmarks}) => {
//   // find div to place in
//   const bookmarkDiv = document.getElementById(title + "bookmarks")

//   // create div container
//   const listWrapper = document.createElement("div")
//   const list = document.createElement("ul")
//   list.className = "bookmarklist"
  
//   if( columns == 2 ){
//     list.classList.add("twocols")
//   } else if ( columns == 3 ){
//     list.classList.add("threecols")
//   }
  
//   // add each item
//   bookmarks.map(createListItem).forEach(listItem => list.append(listItem))
  
//   // add list to div
//   bookmarkDiv.append(listWrapper)
//   listWrapper.append(list)

//   return bookmarkDiv
// }


// const placeBookmarks = () => {
//   bookmarks.map(placeBookmarkGroup)
// }

// placeBookmarks();




// // function createIndicator( tick_n ){

// //   const indicator = document.createElement("div")

// //   // 5 min indicators
// //   if( tick_n % 5 == 0 ){
// //     indicator.className = "clock_indicator large"
// //     indicator.style.transform = `rotate(${30*tick_n}deg)`

// //   }
// //     // minute indicators
// //   // } else {
// //   //   indicator.className = "clock_indicator small"
// //   //   indicator.style.transform = `rotate(${6*tick_n}deg)`
// //   // }

// //   return indicator;
// // }


// // function indicators(){
// //   const n = 60;

// //   // make container
// //   const bookmarkDiv = document.getElementById("indicators")

// //   for (let i = 1; i <= n; i++){
// //     // make indicators
// //     const indicator = createIndicator(i)
// //     bookmarkDiv.append(indicator)
// //   }
// // }


// // indicators()



// // clock and date stuff
// var inc = 1000;

// clock();

// function clock() {
//   const date = new Date();

//   const hours = ((date.getHours() + 11) % 12 + 1);
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
  
//   const hour = hours * 30;
//   const minute = minutes * 6;
//   const second = seconds * 6;
  
//   document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
//   document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
//   document.querySelector('.second').style.transform = `rotate(${second}deg)`
// }

// setInterval(clock, inc);


function date() {
  const d = new Date();
  // set date
  const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
  const months = ["Jan","Feb","Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  document.getElementById('dateDay').innerHTML = weekday[d.getDay()];
  document.getElementById('dateMonth').innerHTML = months[d.getMonth()];
  document.getElementById('dateDate').innerHTML = d.getDate();
}

date();

function time(){
  const d = new Date();
 
  // set time
  const hours = ((d.getHours() + 11) % 12 + 1);
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  document.getElementById('timeHour').innerHTML = hours;
  document.getElementById('timeMinute').innerHTML = minutes;
  document.getElementById('timeSecond').innerHTML = seconds;
}

var inc = 100;
setInterval(time, inc);


// search handling

// search engines
const engines = {"google":"https://www.google.com/search?q=", "duckduckgo":"", "youtube":"https://www.youtube.com/results?q=", "bing":""};

// custom shortform searches
const lookup = {"imdb":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}

const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}


// search functionality
const isWebUrl = value => {
  try {
    // attempt to make new url with the input
    // if this fails its not a url
    const url = new URL(value)
    // return a check to seet if the protocol is one of the two:
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

function getTargetUrl(value, engine){
  // check to see if input is already a valid URL
  if (isWebUrl(value)) return value
  // check for a custom shortform input
  if (lookup[value]) return lookup[value]
  // else search it on engine -> google default
  return engines[engine] + value
}

const search = () => {
  // get searchword
  const searchWord = document.getElementById('searchWord').value;

  if ( !(searchWord == "" || searchWord == null) ){
    // get selected search engine
    const highButton = document.getElementById("highlightedButton");
    const searchEngine = highButton.innerHTML;

    // get url
    const targetUrl = getTargetUrl(searchWord, searchEngine);

    // navigate to new search
    window.open(targetUrl, "_self")
  }
}



// set listeners of button and enter 
const searchButton = document.getElementById('searchButton');
searchButton.onclick = search;

const searchBar = document.getElementById('searchWord');
searchBar.onkeyup = (event) => {
  if( event.key === "Enter" ){
    search();
  }
}



// get all the buttons

// set listener for every button
const buttons = document.getElementsByClassName('engineButton');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', highlight);
}

function highlight(event) {

  // if there is no input yet change the search engine
  const buttons = document.getElementsByClassName('engineButton');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].removeAttribute('id');
  }
  event.target.setAttribute('id', 'highlightedButton');

  search();
}






// * * * * * * * * * * *
//      Revamp stuff
// * * * * * * * * * * *

const bookmarkData = [
  {
    //LABEL - LINK - ICON
    'label':  'courselink',
    'link':   'https://courselink.uoguelph.ca/d2l/home',
    'icon':   'fa-book-open'
  },
  {
    'label':  'outlook',
    'link':   'https://outlook.office.com/mail/',
    'icon':   'fa-inbox'
  },
  {
    'label':  'onedrive',
    'link':   'https://uoguelphca-my.sharepoint.com/personal/sharlaar_uoguelph_ca/_layouts/15/onedrive.aspx',
    'icon':   'fa-cloud'
  },
  {
    'label':  'youtube',
    'link':   'https://www.youtube.com/',
    'icon':   'fa-youtube'
  },
  {
    'label':  'netflix',
    'link':   'https://www.netflix.com/ca/',
    'icon':   'fa-n'
  },
  {
    'label':  'sportsnet',
    'link':   'https://watch.sportsnet.ca/',
    'icon':   'fa-hockey-puck'
  },
  {
    'label':  'disney+',
    'link':   'https://www.disneyplus.com/en-ca',
    'icon':   'fa-plus'
  },
  {
    'label':  'prime video',
    'link':   'https://www.primevideo.com/hp/video/offers/nonprimehomepage/ref=dv_web_force_root?_encoding=UTF8&dvah=nonprimehomepage',
    'icon':   'fa-circle-play'
  },
];

// turn html string to html element
function elementFromHtml(htmlString){
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstElementChild;
}

function bookmarkToString(bookmark){
  returnString = '<div class="bookmarkContainer"> <span class="bookmarkIcon"> <i class="fa-solid ' +
    bookmark.icon +
    '"></i> </span> <h3 class="bookmarkLabel">' + 
    bookmark.label + 
    '</h3></div>'

  returnString = '<div class="bookmarkContainer"><a href="' +
  bookmark.link +
  '" class="bookmarkLink"><span class="bookmarkIcon"><i class="fa-solid ' + 
  bookmark.icon +
  '"></i> </span> <h3 class="bookmarkLabel">' +
  bookmark.label +
  '</h3> </a> </div>'


  return returnString;
}


function placeBookmarks(bookmarks){
  bmDiv = document.getElementById('bookmarkDivider');

  // for each bookmark
  bookmarks.map(bookmarkToString).forEach(bmString => {

    // turn to html and append
    bmDiv.append(elementFromHtml(bmString));
  });
}


placeBookmarks(bookmarkData);