function scrollyNavbar() {
  const handleScrolly = () => {
    const scrolly = window.scrollY || document.documentElement.scrollTop;
    const headerBottomArea =
      document.getElementsByClassName("header-bottom-area")[0];
    if (scrolly > 445) {
      headerBottomArea.classList.add("sticky-active");
    } else {
      headerBottomArea.classList.remove("sticky-active");
    }
  };
  handleScrolly();
  window.addEventListener("scroll", handleScrolly);
}
export default scrollyNavbar;
