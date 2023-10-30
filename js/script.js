// Dark & Light mode
let theme = document.querySelector("html");

const mode = JSON.parse(localStorage.getItem("mode"));

if (mode) {
  theme.dataset.theme = mode;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("light")) {
    theme.dataset.theme = "light";
    localStorage.setItem("mode", JSON.stringify("light"));
  }

  if (e.target.classList.contains("dark")) {
    theme.dataset.theme = "dark";
    localStorage.setItem("mode", JSON.stringify("dark"));
  }
});

// ALl Elements
const content = document.querySelector(".wrapper-content");
const projectsSection = document.querySelector(".projects-section");
const resumeSection = document.querySelector(".resume-section");
const contactSection = document.querySelector(".contact-section");
const loader = document.querySelector(".loader");
const navLink = document.querySelectorAll(".nav-link");
const projectsContainer = document.querySelector(".projects-container");
const projectDetails = document.querySelector(".project-details");
const videoSection = document.querySelector(".video-section");
const video = document.querySelector(".video-section video");
const closeVideo = document.querySelector(".video-section .close");

document.addEventListener("click", (e) => {
  if (e.target.id === "projects") {
    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";
      projectsSection.classList.remove("hidden");
      resumeSection.classList.add("hidden");
      contactSection.classList.add("hidden");
      projectDetails.classList.add("hidden");
    }, 1000);
  }

  if (e.target.id === "resume") {
    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";
      resumeSection.classList.remove("hidden");
      projectsSection.classList.add("hidden");
      contactSection.classList.add("hidden");
      projectDetails.classList.add("hidden");
    }, 1000);
  }

  if (e.target.id === "contact") {
    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";
      contactSection.classList.remove("hidden");
      projectsSection.classList.add("hidden");
      resumeSection.classList.add("hidden");
      projectDetails.classList.add("hidden");
    }, 1000);
  }
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLink.forEach((e) => {
      e.classList.remove("active");
      link.classList.add("active");
    });
  });
});

// ====================== Projects ====================== //

let projects = [
  {
    id: 1,
    image: "assets/images/projects/project-2.jpg",
    video: "assets/videos/project-2.mp4",
    type: "Web app",
    title: "ToDo List App",
    description:
      "Create todo App Using HTML, CSS, And JavaScript. you can add a new task and filtering the task [finished, not finished or deleted]",
    links: {
      github: "https://github.com/KareemRoshdy2/todo-app",
      url: "https://kareemroshdy2.github.io/todo-app/",
      youtube: "https://youtu.be/CwUuylqQzeg",
    },
  },
  {
    id: 2,
    image: "assets/images/projects/project-1.png",
    video: "assets/videos/project-1.mp4",
    type: "Web app",
    title: "E-Commerce App",
    description:
      "Create E-Commerce App Using HTML, CSS, And JavaScript. The Application Contains A Login Page And An Account Creation Page In Addition To The Home Page Will Find All Products And You Can Add Any Product In Your Shopping Cart And Delete Any Product You Added In Addition To The Profile Page That You Can Find All Your Own Information And Products You Add And You Can Change Your Name, Email Or Your Password",
    links: {
      github: "https://github.com/KareemRoshdy2/e-commerce_js_pro",
      url: "https://kareemroshdy2.github.io/e-commerce_js_pro/",
      youtube: "",
    },
  },
  {
    id: 3,
    image: "assets/images/projects/project-3.png",
    video: "assets/videos/project-3.mp4",
    type: "Web app",
    title: "Restaurant App",
    description:
      "create a professional restaurant using HTML, CSS, and javascript. the website contains 5 pages [home, book table, restaurant, shop, content]",
    links: {
      github: "https://github.com/KareemRoshdy2/restaurant",
      url: "https://kareemroshdy2.github.io/restaurant/",
      youtube: "https://youtu.be/I5DOho4wPmk",
    },
  },
  {
    id: 4,
    image: "assets/images/projects/project-4.png",
    video: "assets/videos/project-4.mp4",
    type: "Web app",
    title: "Animated Navigation",
    description:
      "create Navigation menu using HTML, CSS, and javascript. simple animated navigation",
    links: {
      github: "https://github.com/KareemRoshdy2/navigation_menu",
      url: "https://kareemroshdy2.github.io/navigation_menu/",
      youtube: "https://kareemroshdy2.github.io/navigation_menu/",
    },
  },
  {
    id: 5,
    image: "assets/images/projects/project-5.png",
    video: "assets/videos/project-5.mp4",
    type: "Website",
    title: "Portfolio Website",
    description:
      "create Portfolio Website using HTML and CSS. this website was training on frontend technologies HTML and CSS",
    links: {
      github: "https://github.com/KareemRoshdy2/personal-portfolio",
      url: "https://kareemroshdy2.github.io/personal-portfolio/",
      youtube: "https://youtu.be/fhnaqZ8g31k",
    },
  },
  {
    id: 6,
    image: "assets/images/projects/project-6.jpg",
    video: "assets/videos/project-6.mp4",
    type: "Web app",
    title: "Form validation",
    description:
      "create Form Validation using HTML, CSS, and JavaScript. registration and login forms",
    links: {
      github: "https://github.com/KareemRoshdy2/js_form_validation",
      url: "https://kareemroshdy2.github.io/js_form_validation/",
      youtube: "",
    },
  },
  {
    id: 7,
    image: "assets/images/projects/project-7.jpg",
    video: "assets/videos/project-7.mp4",
    type: "Web app",
    title: "Weather App",
    description:
      "The application display many details about the weather such as [current temperature, address, today's date, sunrise and sunset date, humidity, pressure level, visibility, feeling, and weather during the whole day] in addition to displaying the expected weather during the next three days",
    links: {
      github: "https://github.com/KareemRoshdy/react_weather_app",
      url: "https://weather-app-kr.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 8,
    image: "assets/images/projects/project-8.png",
    video: "assets/videos/project-8.mp4",
    type: "Web Site",
    title: "GitHub Clone",
    description:
      "Create a design for GitHub using NextJS. The first page of GitHub will be displayed and it has been professionally implemented.",
    links: {
      github: "https://github.com/KareemRoshdy/github-clone",
      url: "https://kr-github.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 9,
    image: "assets/images/projects/project-9.png",
    video: "assets/videos/project-8.mp4",
    type: "Web App",
    title: "Notepad App",
    description:
      "This application enables you to create a list of your notes, and you can edit or delete any note you have created",
    links: {
      github: "https://github.com/KareemRoshdy/notepad",
      url: "https://kr-notepad.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 10,
    image: "assets/images/projects/project-10.png",
    video: "assets/videos/project-10.mp4",
    type: "Web App",
    title: "Quick Quiz",
    description:
      "This application displays some of the questions, the correct answer is chosen from among the existing answers, the number of correct answers is determined, and through it the percentage of correct answers is calculated.",
    links: {
      github: "https://github.com/KareemRoshdy/quizApp",
      url: "https://kr-quiz-app.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 11,
    image: "assets/images/projects/project-11.png",
    video: "assets/videos/project-11.mp4",
    type: "Web App",
    title: "Movies App",
    description:
      "This application displays many movies, and you can view details for each movie, and you can search for any movie and it will be shown directly to you.",
    links: {
      github: "https://github.com/KareemRoshdy/react-movies-app",
      url: "https://kr-movies-app.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 12,
    image: "assets/images/projects/project-12.png",
    video: "assets/videos/project-12.mp4",
    type: "Web App",
    title: "Prayer Times",
    description:
      "This app shows prayer times according to the city you search of, and shows you how much is left for the next prayer.",
    links: {
      github: "https://github.com/KareemRoshdy/react-ts-prayer-timings",
      url: "https://kr-prayer-times.vercel.app/",
      youtube: "",
    },
  },
  {
    id: 13,
    image: "assets/images/projects/project-13.png",
    video: "assets/videos/project-13.mp4",
    type: "Web App",
    title: "Todo App",
    description:
      "You can use this application to add your daily tasks in addition to additional tasks related to the main task, and you can delete or modify any task that you have added.",
    links: {
      github: "https://github.com/KareemRoshdy/ts_todo_app",
      url: "https://kr-todo.vercel.app/",
      youtube: "",
    },
  },
];

projects.map((project) => {
  projectsContainer.innerHTML += `
    <div class="project-box" 
      data-project=${project.id}>
      <div class="image">
        <img class="project-image"
          src=${project.image}
          alt="projectImage"
          data-project=${project.id} />
      </div>

      <div class="project-type"
        data-project=${project.id}>
          <p class="project-subtitle"
            data-project=${project.id}>
            ${project.type}
          </p>
      </div>

      <div class="project-title" data-project=${project.id}>
        <a class="project-link" 
          data-project=${project.id}>
          ${project.title}
        </a>
      </div>
  </div>
  `;
});

// ========================= Project Details ========================= //
let currentProject;
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("project-box") ||
    e.target.classList.contains("project-title") ||
    e.target.classList.contains("project-link") ||
    e.target.classList.contains("project-image") ||
    e.target.classList.contains("project-type") ||
    e.target.classList.contains("project-subtitle")
  ) {
    const projectID = e.target.dataset.project;
    currentProject = projects.find((p) => p.id === +projectID);

    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";
      projectDetails.classList.remove("hidden");
      contactSection.classList.add("hidden");
      projectsSection.classList.add("hidden");
      resumeSection.classList.add("hidden");
    }, 1000);

    showProject(currentProject);
  }
});

function showProject(project) {
  projectDetails.innerHTML = `
        <div class="project-image">
          <img
            src=${project.image}
            alt="projectImage"
          />
          <div class="play-icon">
           <i  title="play" id="playIcon" class="fas fa-play flex align-center justify-center"></i>
          </div>
        </div>

        <div class="project-info">
            <div class="project-text flex align-center space-between">
              <p class="project-details-title">
              ${project.title}
              </p>
              <p class="project-type">${project.type}</p>
            </div>

            <div class="project-desc">
              <p>
              ${project.description}
              </p>
            </div>

            <div class="project-links flex align-center gap-20">
              <a href='${
                project.links.url
              }' target="_blank" title="visit the website" class="link flex align-center gap-5">
                <i class="icon-link"></i>
                <p>visit</p>
              </a>

              <a href='${
                project.links.github
              }' target="_blank" title="github repo" class="link flex align-center gap-5">
                <i class="icon-social-github"></i>
                <p>repo</p>
              </a>

              ${
                project.links.youtube.length > 0
                  ? `<a
                    href="${project.links.youtube}"
                    target="_blank"
                    title="youtube video"
                    class="link flex align-center gap-5"
                  >
                    <i class="icon-social-youtube"></i>
                    <p>youTube</p>
                  </a>`
                  : ""
              }

            </div>
        </div>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.id === "playIcon") {
    videoSection.classList.add("open");
    video.src = currentProject.video;
  }
});

closeVideo.addEventListener("click", closingVideo);

window.addEventListener("scroll", () => {
  closingVideo();
});

function closingVideo() {
  videoSection.classList.add("close");
  video.pause();
  setTimeout(() => {
    videoSection.classList.remove("open");
    videoSection.classList.remove("close");
  }, 500);
}
