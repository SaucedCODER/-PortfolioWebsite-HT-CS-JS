const text = `<p>
<span class="web-developer-text">
      <span class="animated-text">Hi there👋, I'm Zeus Miguel Orilla, a Web Developer</span>
    </span> passionate about creating
<b>dynamic</b> and <b>user-friendly</b> websites.
 I have experience with
<b>databases</b>, <b>DOM manipulation</b>, and
<b>server-side scripting</b>, and I'm always exploring new
technologies to enhance my skills.
</p>

<p class="lowOpa">
My goal as a web developer is to create <b>scalable</b> and
<b>efficient</b> websites with intuitive interfaces. I take
pride in my ability to <b>problem-solve</b> and deliver
<b>high-quality</b> work. <p class="lowOpa">Thank you for taking the time to
learn about my skills and experience. I'm excited to continue my
journey and build websites that meet the needs of users.
</p>
</p>
<br>

`;

const textcontainer = document.getElementById("typed-text");
let istypingcompleted = false;
let animationFrameId;
function type(text, textcontainer) {
  let i = 0;
  const len = text.length;
  textcontainer.style.fontSize = "1.3rem";
  function update() {
    if (i <= len) {
      textcontainer.innerHTML = text.slice(0, i);
      i++;
      animationFrameId = requestAnimationFrame(update);
    }
  }
  animationFrameId = requestAnimationFrame(update);
}
function instantlyTyped(text, textcontainer) {
  textcontainer.style.fontSize = "1.3rem";
  textcontainer.innerHTML = text; // Set the entire text at once
}
type(text, textcontainer);

document.addEventListener("click", function () {
  console.log("click");
  if (!istypingcompleted) {
    console.log("work");
    cancelAnimationFrame(animationFrameId);

    instantlyTyped(text, textcontainer);
    istypingcompleted = true;
  }
  // Call the type function on click
});

const projects = document.getElementById("projects");
const scrollDownMsg = document.getElementById("scroll-message");

function animateProjects() {
  const projectsTop = projects.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > projectsTop) {
    projects.classList.add("animate");
  }
  const element = document.getElementById("codewars");
  const position = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("visible");
  }
  const scrollPos = window.scrollY;
  // check if the user is at the top of the page

  if (scrollPos != 0) {
    scrollDownMsg.classList.add("hide");
  }
}

window.addEventListener("scroll", animateProjects);

function scrollToProjects(e) {
  // Get the Projects section element by its ID
  console.log(e.target.dataset.linkId);
  const projectsSection = document.querySelector(`#${e.target.dataset.linkId}`);

  // Calculate the scroll position of the Projects section
  const scrollPosition = projectsSection.offsetTop - 20;

  // Scroll to the Projects section using the smooth scrolling behavior
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}

const categoryButtons = document.querySelectorAll("#category-buttons button");
const projectList = document.getElementById("project-list");

// Add click event listeners to the category buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Get the selected category
    const category = button.dataset.category;

    // Show/hide projects based on the selected category
    projectList.querySelectorAll(".project").forEach((project) => {
      if (category === "all" || project.dataset.category === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// burger
function toggleNav() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("menu-open");
}

// Demo Live Scripts
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  document.body.classList.add("modal-open");
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  document.body.classList.remove("modal-open");
  modal.style.display = "none";
}

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("liikkee")) {
    const modal = target.closest(".modalz");
    if (modal) {
      const likeButton = modal.querySelector(".like-button");
      likeButton.classList.toggle("liked");
      showLikeTooltip(modal);
    }
  }
});

// Function to show the like tooltip and handle "like" action
function showLikeTooltip(modal) {
  const likeTooltip = modal.querySelector(".like-tooltip");
  likeTooltip.textContent = "Liked!";
  setTimeout(function () {
    likeTooltip.textContent = "Click to Like";
  }, 2000);
}

// JavaScript for the crack animation
function crackAnimation(event) {
  const link = event.currentTarget;

  // Add the "cracked" class to trigger the animation
  link.classList.add("cracked");

  // After the animation is complete, remove the "cracked" class to reset the animation
  setTimeout(() => {
    link.classList.remove("cracked");
  }, 2000);

  // Prevent the link from being followed immediately
  event.preventDefault();
}
