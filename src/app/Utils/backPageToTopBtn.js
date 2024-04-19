export function BackPageToTop() {
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo(0, 0);
  }
}
