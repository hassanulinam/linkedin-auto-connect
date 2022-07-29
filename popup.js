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

async function startConnecting() {
  console.log("Scripting from my extension.....");
  const buttons = document.getElementsByClassName("artdeco-button");
  console.log(buttons.length, "elements found");
  console.log(this);
  for (let i = 0; i < buttons.length; i++) {
    setTimeout(() => {
      if (buttons[i].innerText === "Connect") {
        buttons[i].click();
        setTimeout(() => {
          const modalButtons = document.querySelectorAll(
            ".artdeco-modal__actionbar .artdeco-button"
          );
          for (let b of modalButtons) {
            if (b.innerText === "Send") b.click();
          }
          console.log("In modal now...");
        }, 100);
      }
    }, i * 1000 + 100);
  }
}
