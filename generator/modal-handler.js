function createModal(modalData) {
  const modalContainer = document.querySelector(".modals-container");
  const modalTemplate = document.createElement("div");
  modalTemplate.className = "modalz";

  // making modal HTML dynamically
  modalTemplate.innerHTML = `
      <div class="modal-content">
        <span class="close-button" onclick="closeModal(this)">&times;</span>
        <h2 class="animated-text">${modalData.title}</h2>
        <div class="gif-demo">
          <iframe src="${modalData.liveLink}" frameborder="0" width="100%" height="500"></iframe>
        </div>
        <div class="interaction-section">
          <div class="like-button liikkee">
            <i class="far fa-heart liikkee"></i>
          </div>
          <div class="like-tooltip">Click to Like</div>
          <a class="fork-repo-link" href="${modalData.repoLink}" target="_blank">
            <i class="fas fa-code-branch"></i> Fork on GitHub
          </a>
        </div>
      </div>
    `;

  modalContainer.appendChild(modalTemplate);
}
const modalData = [
  {
    title: "TodoList with React: Cloned from frontendMentor.io Challenge",
    repoLink: "https://github.com/Callmesauce/FrontEndMentor-TodoList.git",
    liveLink: "https://github.com/Callmesauce/FrontEndMentor-TodoList/",
  },
  {
    title:
      "Simple TodoList App | using Functional Programming Approach bare coded",
    link: "https://github.com/Callmesauce/Basic_todolistApp.git",
    liveLink: "https://github.com/Callmesauce/Basic_todolistApp/",
  },
  // Add more modal data objects as needed
];

// looping through all the data
modalData.forEach((data) => createModal(data));
//closing modal
function closeModal(closeButton) {
  const modal = closeButton.closest(".modalz");
  modal.remove();
}
