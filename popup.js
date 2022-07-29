const btn = document.getElementById("btn-1");

btn.classList.add("connect-btn");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startConnecting,
  });

  console.log(tab);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startConnecting() {
  console.log("Scripting from my extension.....");
  const buttons = document.getElementsByClassName("artdeco-button");
  console.log(buttons.length, "elements found");
  for (let btn of buttons) {
    if (btn.innerText === "Connect") {
      console.log("clicking...");
      btn.click();
      console.log(innerButtons);
      for (let ibtn of innerButtons) {
        if (ibtn.innerText === "Send") {
          console.log("Found the the button in the modal....");
        }
      }
    }
  }
}
