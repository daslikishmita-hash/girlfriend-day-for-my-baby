/* ================================= */
/* PAGE NAVIGATION */
/* ================================= */

function nextPage(currentPage) {

  const current = document.getElementById(
    "page" + currentPage
  );

  const next = document.getElementById(
    "page" + (currentPage + 1)
  );


  if (!current || !next) {
    return;
  }


  // Remove current page

  current.classList.remove("active");


  // Show next page

  next.classList.add("active");


  // Scroll to top

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  // Extra hearts when moving forward

  createHeartBurst();

}



/* ================================= */
/* RESTART WEBSITE */
/* ================================= */

function restartWebsite() {

  // Hide all pages

  document.querySelectorAll(".page").forEach(
    function(page) {

      page.classList.remove("active");

    }
  );


  // Show first page

  document
    .getElementById("page1")
    .classList.add("active");


  // Go to top

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* ================================= */
/* CREATE ONE FLOATING HEART */
/* ================================= */

function createHeart() {

  const heart =
    document.createElement("div");


  heart.className = "heart";


  // Random heart

  const hearts = [
    "♡",
    "♥",
    "❤",
    "✦"
  ];


  heart.innerHTML =
    hearts[
      Math.floor(
        Math.random() *
        hearts.length
      )
    ];


  // Random position

  heart.style.left =
    Math.random() * 100 + "vw";


  // Random size

  heart.style.fontSize =
    (Math.random() * 15 + 12) + "px";


  // Random speed

  heart.style.animationDuration =
    (Math.random() * 3 + 4) + "s";


  // Add to page

  document
    .getElementById("heart-container")
    .appendChild(heart);


  // Remove after animation

  setTimeout(
    function() {

      heart.remove();

    },
    7000
  );

}



/* ================================= */
/* HEART BURST */
/* ================================= */

function createHeartBurst() {

  for (
    let i = 0;
    i < 12;
    i++
  ) {

    setTimeout(
      function() {

        createHeart();

      },
      i * 100
    );

  }

}



/* ================================= */
/* CONTINUOUS FLOATING HEARTS */
/* ================================= */

setInterval(
  createHeart,
  900
);
