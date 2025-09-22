document.querySelectorAll(".product").forEach((p, i) => {
  if (i === 0) {
    p.classList.add("highlight");
  }
});
console.log("✅ Home Page Loaded");