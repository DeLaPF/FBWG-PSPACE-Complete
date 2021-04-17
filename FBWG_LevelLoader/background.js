var patterns = ["https://html5-games.io/game/fireboy-and-watergirl/data/tutorials/*/*", "https://html5-games.io/game/fireboy-and-watergirl/data/forest/*/*"];
var levelLink = "https://raw.githubusercontent.com/DeLaPF/FBWG-PSPACE-Complete/master/forest_NTL.json";
var localLevelLinkNWL = "https://localhost/FBWG-PSPACE-Complete/forest_NWL.json";
var localLevelLinkNTL = "https://localhost/FBWG-PSPACE-Complete/forest_NTL.json";
var localLevelLinkP2T = "https://localhost/FBWG-PSPACE-Complete/forest_P2T.json";
var localLevelLinkAP2T = "https://localhost/FBWG-PSPACE-Complete/forest_AP2T.json";

function redirectRequest(e) {
  console.log(e);
  return {
    redirectUrl: localLevelLinkNWL
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirectRequest,
  {urls: patterns},
  ["blocking"]
);