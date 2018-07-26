window.renderComplete = true;
let d = new URLSearchParams(window.location.search),
    e = d.get('search'),
    SearchTango = document.getElementById('SearchWord'),
    LiteSite = document.getElementById("LiteSite"),
    LiteSiteIframe = document.getElementById("LiteSiteIframe"),
    SearchResults = document.getElementById('SearchResults'),
    close = document.getElementById('close'),
    fragment = document.createDocumentFragment(),
    xhr = new XMLHttpRequest(),
    hss = ' | HSSearch',
    urlWord = "https://www.googleapis.com/customsearch/v1?key=AIzaSyD4HoWPYCz9YDWiQCAPARVVbXDh5wq28WA&cx=001556139409281098772:eyu92k6escc&filter=1&q=";
if (d.has('search')) {
  SearchTango.value = e;
  GoogleSearch(e);
}
function GoogleSearch(SearchWord) {
  SearchResults.textContent = null;
  xhr.open("GET", urlWord + SearchWord, true);
  xhr.onload = function() {
    let json = JSON.parse(xhr.response).items,
        length = json.length,
        prerender = document.createElement("link"),
        prefetch = document.createElement("link");
    for (let i = 0; i < length | 0; i = (i + 1) | 0) {
      let a = document.createElement("a"),
          div = document.createElement("div"),
          strong = document.createElement("strong"),
          p = document.createElement("p");
      a.setAttribute("onclick", 'Open("' + json[i].link + '");');
      a.appendChild(div);
      div.appendChild(strong);
      strong.textContent = json[i].title;
      div.appendChild(p);
      p.textContent = json[i].snippet;
      fragment.appendChild(a);
      SiteResult(json[0].link);
      a.addEventListener("mouseover", SiteResult(json[i].link));
    }
    SearchResults.appendChild(fragment);
    prerender.rel = "prerender";
    prerender.href = json[0].link;
    document.head.appendChild(prerender);
    prefetch.rel = "prefetch";
    prefetch.href = json[0].link;
    prefetch.as = "html";
    prefetch.crossorigin = "anonymous";
    document.head.appendChild(prefetch);
  }
  xhr.send();
  document.title = SearchWord + hss;
}
function SiteResult(url) {
  return () => {
    LiteSiteIframe.src = url;
  }
}
function Open(url) {
  if (LiteSiteIframe.src =! url) {
    alert(url);
    SiteResult(url);
  }
  LiteSite.style = "visibility:visible;bottom:0;";
  close.style = "visibility:visible;opacity: 1;";
}
function Close() {
  LiteSite.style = "";
  LiteSiteIframe.src = "";
  close.style = "";
}
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
document.onkeydown = function(e) {
  if (e.which == 27) {
    Close();
  }
}