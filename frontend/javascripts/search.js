const searchButton = () => document.querySelector("#search-button")

const searchForm = () => document.querySelector("#search-form")

handleSearch = (e) => {
    e.preventDefault()
    debugger
}

showSearch = () => {
    // <%= form_with(url: '/results', method: :get, class: "search-form") do |f|%>
    contentDiv().innerHTML = `
    <div id="cover">
    <form id="search-form">
      <div class="tb">
        <div class="td"><input type="text" autocomplete="off" name="search[query]" placeholder="Search" required></div>
        <div class="td" id="s-cover">
          <button type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>
  </div>
`
searchForm().addEventListener("submit", handleSearch)
}

searchButton().addEventListener("click", showSearch)