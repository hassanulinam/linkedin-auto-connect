// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("linkedin.com/search")) {
//     console.log("Running in background >>>>", tab.url);

//     try {
//       chrome.tabs.sendMessage(tabId, {
//         type: "NEW",
//         name: "He He Boyyy...",
//       });
//     } catch (error) {
//       console.log("ERROR >>>> ", error.message);
//       console.log("HEY BOY ===>> caught in ERR");
//     }
//   } else console.log("NOT RUNNING...>>>");
// });
