function searchSO(amount = 10, cache = 0) {
    let searchBar = document.getElementById("stackoverflow-search-bar");
  
    oVal = searchBar.value;
    const val = encodeURIComponent(oVal);
    fetch(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=${amount}&order=desc&sort=activity&accepted=True&q=${val}&site=stackoverflow`
    ).then((v) =>
      v.json().then((data) => {
        if (data.items.length === 0) {
          document.getElementById("answers-container").innerHTML =
            "No Results found, please use more concise keywords!";
          return;
        }
  
        if (amount >= 100 || cache === data.items.length) {
          document.getElementById("Load-More").innerHTML =
            "<h5>Sorry, no more results</h5>";
        } else {
          document.getElementById(
            "Load-More"
          ).innerHTML = `<button class="load-more-button" type="button" onClick="searchSO(${
            amount + 10
          }, ${data.items.length})">Load More</button>`;
        }
  
        const d = data.items;
        console.log(d);
        const x = d.map(
          
          (a) => `<b>Title : </b> <a href="${a.link}" target=”_blank">${a.title}</a><br>
          
          <b>Is Query Answered : <b><i>${a.is_answered}</i><br> 
          
          <b>Number of Answers : </b><i>${a.answer_count}</><br>
          
          <b>Author : </b><i><a href="${a.owner.link}" target=”_blank">${a.owner.display_name}</a></i><hr>`
         
        );
        document.getElementById(
          "search-results"
        ).innerHTML = `Searching Results for ${oVal}:`;
        document.getElementById("answers-container").innerHTML = x.join("<br><br>");
      })
    );
  }
  
  document.addEventListener("keyup", function (e) {
    if (e.code == 13 || e.key == "Enter") {
      searchSO();
    }
  });