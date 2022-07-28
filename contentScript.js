(() => {
  console.log("Content Script >>>>");

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, name } = obj;

    if (type === "NEW") {
      currentName = name;
    }
  });
})();
