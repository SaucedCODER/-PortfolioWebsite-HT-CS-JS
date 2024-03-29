//navigation primary
const primaryNav = document.querySelector("#myNav");
let navHeight = primaryNav.offsetHeight;
document.documentElement.style.setProperty("--scroll-pad", navHeight + "px");
const text = `<span class="web-developer-text">
<span id="animated-text" style="font-size:clamp(25px,50%,1.5rem)">Hi there👋, I'm Zeus</span>
</span>
<br/>
<p style="text-align:center;font-style:italic;color:#e6e6e6;">
Passionate about making dynamic and user-friendly websites. I know databases, changing how pages look, and doing things on the server. I'm always learning new tech to get even better.
</p>
 <p style="text-align:center;font-style:italic;color:#e6e6e6;">
"My goal as a web maker is to make big and fast websites that are easy to use. I'm proud of fixing problems and making things great."
</p>
<p style="text-align:center;font-style:italic;color:#e6e6e6;">
Thanks for reading about me. I'm excited to keep going and make websites that people really like.
</p>
`;

const textcontainer = document.getElementById("typed-text");
let istypingcompleted = false;
let animationFrameId;

// Split the text into an array of words
const words = text.trim().split(/\s+/);
let currentWordIndex = 0;

function type(text, textcontainer) {
  const word = words[currentWordIndex];
  if (!word) {
    istypingcompleted = true;
    textcontainer.children[0].classList.add("animated-text"); // Add the class to the text container
    return;
  }
  textcontainer.style.fontSize = "clamp(20px,50%,1.3rem)";
  textcontainer.innerHTML = text + " " + word;

  currentWordIndex++;
  animationFrameId = requestAnimationFrame(() =>
    type(text + " " + word, textcontainer)
  );
}

function instantlyTyped(text, textcontainer) {
  textcontainer.style.fontSize = "clamp(20px,50%,1.3rem)";
  textcontainer.innerHTML = text; // Set the entire text at once
  textcontainer.children[0].classList.add("animated-text");
}

type("", textcontainer);
document.addEventListener("click", function () {
  if (!istypingcompleted) {
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
  event.preventDefault();
  const link = event.currentTarget;

  link.classList.add("cracked");

  setTimeout(() => {
    link.classList.remove("cracked");
  }, 2000);
}
