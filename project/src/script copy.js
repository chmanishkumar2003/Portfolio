function downloadResume() {
    // This opens your resume in a new tab or triggers a download
    window.open('MANISH_DEVELOPER_RESUME.pdf', '_blank');
  }

// Typing Animation
        const texts = [
            "Aspiring Front End Developer",
            "Core Java Specalist", 
            "Problem Solver",
            "Tech Innovator"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typing-text');

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing animation
        typeText();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Certificate carousel
     let currentCert = 0;
const certificates = document.querySelectorAll(".certificate-card");
const dots = document.querySelectorAll(".carousel-dot");

function updateCertificate(index) {
  certificates.forEach((card, i) => {
    card.style.display = i === index ? "block" : "none";
    dots[i]?.classList.toggle("active", i === index);
  });
}

document.getElementById("prevCert").addEventListener("click", () => {
  currentCert = (currentCert - 1 + certificates.length) % certificates.length;
  updateCertificate(currentCert);
});

document.getElementById("nextCert").addEventListener("click", () => {
  currentCert = (currentCert + 1) % certificates.length;
  updateCertificate(currentCert);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentCert = index;
    updateCertificate(currentCert);
  });
});

updateCertificate(currentCert);




        // Resume download function
        function downloadResume() {
            const resumeContent = `CHINTAKAYALA MANISH KUMAR
Nizamabad | ch.manishkumar2003@gmail.com | +91 7989992982
https://www.linkedin.com/in/manish-kumar7989/ | https://github.com/ChManish2003

ABOUT ME
• Highly organized and detail-oriented worker, with a drive to exceed expectations. Ability to analyze data, develop strategies, and provide solutions to complex problems. Seeking to leverage skills and knowledge to contribute to team success.

EDUCATION
SSC, Sri Chaitanya School                                                    June 2018 – June 2019
• GPA: 9.0

TSBIE, Narayana Junior College                                               July 2019 – June 2021
• Percentage: 93%

Gitam University, B.Tech Computer Science and Engineering                    June 2021 – June 2025
• GPA: 7.42

PROJECTS
Stock Market Prediction (Major)                                             2024
• Developed a Stock Market Prediction application using Python and machine learning techniques to analyze historical stock data and predict future trends. The project incorporates data preprocessing, feature extraction, and model training to provide insight into stock price movements. It includes a user-friendly interface to visualize predictions and offers tools to assist users in making informed investment decisions. It is a combination of hybrid model of machine learning algorithms LSTM and Random Forest.
• Tools used: Python, SQL, Machine Learning, Databases.

Pill Reminder Application                                                    2023
• The Pill Reminder Project is a web-based application designed to help users track their medication schedules, monitor pill consumption, and receive timely reminders for taking their medication. The app will automatically update the pill count as doses are taken and alert users when a refill is needed. This application provides a practical solution to a common healthcare challenge, particularly benefiting users managing multiple medications or chronic conditions.
• Tools Used: Python, UI (User Interface), JavaScript, Database, SMS or Pop-up Notifications.

INTERNSHIP
Innovate Intern (DSA using Java)                                           2024
• During my internship, I applied my knowledge of Data Structures and Algorithms in Java to solve real-world problems efficiently. I worked with arrays, linked lists, stacks, and queues to manage data, and implemented algorithms like searching and sorting to optimize application performance. This hands-on experience helped me improve my coding skills and contributed to building scalable features in the projects I was involved in.

TECHNOLOGIES
Languages: Java, SQL, Python
Technologies: SQL Server, GitHub, VS Code
Soft Skills: Problem Solving, Teamwork, Critical Thinking

CERTIFICATES
• Structured Query Language - IBM
• Machine Learning - Duke University
• Data Structures - IBM`;

            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Chintakayala_Manish_Kumar_Resume.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        // Mobile menu toggle (if needed)
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }