
document.addEventListener("DOMContentLoaded", function () {
  const experience = document.querySelector("#experience");

  if (!experience || experience.querySelector(".experience-side-photos")) {
    return;
  }

  const photos = document.createElement("div");
  photos.className = "experience-side-photos";

  photos.innerHTML = `
    <div class="experience-side-card">
      <img src="assets/dsc.jpeg" alt="">
      <div class="experience-side-caption">
        <strong>Data Science Club</strong>
        <p></p>
      </div>
    </div>

    <div class="experience-side-card">
      <img src="assets/fun-learning.jpeg" alt="">
      <div class="experience-side-caption">
        <strong>FUN LEARNING</strong>
        <p></p>
      </div>
    </div>
  `;

  experience.appendChild(photos);
});
