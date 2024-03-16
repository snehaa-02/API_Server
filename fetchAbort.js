"use strict";

function abortFetch() {
  const controller = new AbortController();
  const signal = controller.signal;
  const url = "https://soliton.glitch.me/all-timezone-cities";

  const downloadBtn = document.querySelector(".download");
  const abortBtn = document.querySelector(".abort");

  downloadBtn.addEventListener("click", async () => {
    try {
      const response = await fetch(url, { signal });
      console.log("Download complete", response);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
    console.log(signal);
  });

  abortBtn.addEventListener("click", () => {
    controller.abort();
    console.log("Download aborted");
    console.log(signal);
  });
}

export { abortFetch };
