// ดึง link จาก .sidebar-right nav
const links = document.querySelectorAll('.sidebar-right nav a');
const sections = document.querySelectorAll('section');

// Smooth Scroll
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active Highlight
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const activeLink = document.querySelector(
                `.sidebar-right nav a[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// bar
window.addEventListener('scroll', () => {
    const bar = document.querySelector('.bar');
    
    if (window.scrollY === 0) {
        bar.classList.remove('scrolled');
    } else {
        bar.classList.add('scrolled');
    }
});
// certificate
const  area_certificate = document.querySelector('.area_certificate')
const  academic_certificate = document.querySelector('.view_certificate');
const  modal_certificate = document.querySelector('.cert_section');
const  academic_medal = document.querySelector('.view_medal');
const  modal_medal = document.querySelector('.medal_section');
const close_btn = document.querySelectorAll('.btn_close_c');

academic_certificate.addEventListener('click',()=>{
    // area_certificate.style.display = 'none';
    // modal_certificate.style.display = 'flex';
    // modal_medal.style.display = 'none';
    modal_certificate.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // ← lock scroll
})

academic_medal.addEventListener('click',()=>{
    // area_certificate.style.display = 'none';
    // modal_medal.style.display = 'flex';
    // modal_certificate.style.display = 'none';
    modal_medal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // ← lock scroll
})

// close_btn.addEventListener('click',()=>{
//     area_certificate.style.display = 'block';
//     modal_certificate.style.display = 'none';
//     modal_medal.style.display = 'none';
// })

close_btn.forEach((btn)=>{
    btn.addEventListener('click', () => {
        // area_certificate.style.display = 'flex';
        // modal_certificate.style.display = 'none';
        // modal_medal.style.display = 'none';
        modal_certificate.style.display = 'none';
        modal_medal.style.display = 'none';
        document.body.style.overflow = ''; // ← unlock scroll
    });
})

// skill
const technical_btn = document.querySelector('.btn_technical_skills');
const soft_btn = document.querySelector('.btn_soft_skills');

const container_technical = document.querySelector('.technical_skills_container');
const container_soft = document.querySelector('.soft_skills_container');

technical_btn.addEventListener('click', () => {
    container_technical.style.display = 'block';
    container_soft.style.display = 'none';

    // technical_btn.classList.add('active');
    // soft_btn.classList.remove('active');
});

soft_btn.addEventListener('click', () => {
    container_soft.style.display = 'block';
    container_technical.style.display = 'none';

    // soft_btn.classList.add('active');
    // technical_btn.classList.remove('active');
});


// experience
const  internship_card = document.querySelector('.internship_detail')
const  cert_btn = document.querySelector('.btn_intern_cert');
const  internship_cert = document.querySelector('.intern_cert_section');
const  close_modal_btn = document.querySelector('.btn_close');


cert_btn.addEventListener('click',()=>{
    // internship_card.style.display = 'none';
    // internship_cert.style.display = 'flex';

    internship_cert.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // ← lock scroll
})

close_modal_btn.addEventListener('click',()=>{
    // internship_card.style.display = 'flex';
    internship_cert.style.display = 'none';
    document.body.style.overflow = ''; // ← เพิ่มบรรทัดนี้ unlock scroll
})

// scrolled Y
const viewer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');    // เลื่อนลง → โชว์
        } else {
            entry.target.classList.remove('visible'); // เลื่อนขึ้น → reset
        }
    });
}, { threshold: 0.2 });// 0.2 = โชว์เมื่อเห็น 20% ของ element

document.querySelectorAll('.introduction,.img_intro,.head_about_left,.about_me_text,.working,.head_education,.university,.high_school,.head_certificate,.area_certificate,.head_skills,.skills_switch,.technical_skills_top,.technical_skills_bottom,.soft_skills_top,.soft_skills_bottom,.head_experience,.internship_detail,.head_internship_projects,.internship_project_container,.head_internship_gallery,.internship_gallery_top,.internship_gallery_bottom,.head_project,.project_details')
    .forEach(el => viewer.observe(el));


// project card
    const projects = [
    {
        order: "PROJECT - 01",
        name: "To Do",
        nameHighlight: "List",
        description: `Built a full To-Do List system from the ground up to give users a clear and structured way to manage tasks across multiple projects within a single platform. I was responsible for designing and developing the system end-to-end — from user authentication, to the Create Project page for setting up new projects, to a Dashboard showing task status and progress, and a To-Do List page for adding, editing, and deleting tasks with status and priority filters.`,
        techs: [
        { label: "HTML/CSS",    bg: "#fff3e0", color: "#bf360c", border: "#ffa726" },
        { label: "JavaScript",  bg: "#fffde7", color: "#f57f17", border: "#fbc02d" },
        { label: "Node.js",     bg: "#d0f8ce", color: "#0d5302", border: "green"   },
        { label: "PostgreSQL",  bg: "#e1f5fe", color: "#01579b", border: "#039be5" },
        ],
        github: "",
        demo: "https://to-do-list.aonwanya-palanan24.workers.dev/Login",
        image: "imge/Todoliast.png",
        url: "https://to-do-list.aonwanya-palanan24.workers.dev/Login"
    },
    {
        order: "PROJECT - 02",
        name: "Weather",
        nameHighlight: "App",
        description: `คำอธิบาย project ที่ 2...`,
        techs: [
        { label: "HTML/CSS",   bg: "#fff3e0", color: "#bf360c", border: "#ffa726" },
        { label: "JavaScript", bg: "#fffde7", color: "#f57f17", border: "#fbc02d" },
        ],
        github: "",
        demo: "",
        image: "imge/weather.png",
        url: "weather-app.dev"
    }
    ];

function createProjectCard(p) {
  const techTags = p.techs.map(t => `
    <div class="tech_tag" style="background-color:${t.bg};color:${t.color};border:${t.border} solid 0.5px;">
      <p class="tech">${t.label}</p>
    </div>
  `).join("");

  return `
    <div class="project_card_1">
      <div class="project_image_container">
        <div class="browser_frame">
            <div class="browser_bar">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="browser_url">${p.url}</span>
            </div>
            <img src="${p.image}" alt="${p.name}">
        </div>
      </div>
      <div class="project_card_content">
        <div class="project_overview">
            <p class="project_order">${p.order}</p>
            <b class="project_name">${p.name} <b style="color:#e65100;">${p.nameHighlight}</b></b>
            <p class="project_card_description">${p.description}</p>
        </div>
        <div class="project_card_meta">
            <p class="tech_stack">TECH STACK</p>
            <div class="project_languages">${techTags}</div>
            <div class="project_links">
                <button class="github_link_button">
                    <a class="github_link" href="${p.github}">
                        <img class="github_logo" src="imge/github2.png" alt="">
                        <p style="color:white;">Source Code</p>
                    </a>
                </button>
                <button class="project_link_button">
                <a class="demo_link" href="${p.demo}">
                        <p>🔴 Live Demo</p>
                    </a>
                </button>
            </div>
        </div>
      </div>
    </div>
  `;
}

// ครอบแค่ส่วนนี้ที่แตะ DOM
document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".project_details");
  container.innerHTML = projects.map(createProjectCard).join("");

  let currentIndex = 0;
  const cards = document.querySelectorAll(".project_card_1");

  function showCard(index) {
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
  }

  showCard(currentIndex);

  document.querySelector(".slider_next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  document.querySelector(".slider_prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

});