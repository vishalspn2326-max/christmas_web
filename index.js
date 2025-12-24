function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");
}

// function goNext() {
//   window.location.href = "fourthpage.html"; // apna page name
// }
// function goNext() {
//     document.getElementById("nextSection").scrollIntoView({
//       behavior: "smooth"
//     });
//   }