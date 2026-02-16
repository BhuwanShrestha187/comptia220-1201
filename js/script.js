// ============================================
// COMPTIA A+ 220-1201 EXAM STUDY GUIDE
// JavaScript Functionality
// ============================================

// Navigation Functions
function navigateTo(page) {
    window.location.href = page;
}

// Flashcard Data
const flashcardData = [
    // Mobile Devices
    { category: "Mobile Devices", question: "What are common mobile device battery types?", answer: "Lithium-ion (Li-ion) and Lithium Polymer (Li-Po). Li-ion is most common, while Li-Po is thinner and more flexible in design." },
    { category: "Mobile Devices", question: "What does MDM stand for?", answer: "Mobile Device Management - software for managing mobile devices in enterprise environments." },
    { category: "Mobile Devices", question: "What is eSIM?", answer: "Embedded SIM - a SIM card that's soldered to the device motherboard, eliminating the need for a physical SIM card." },
    { category: "Mobile Devices", question: "What is NFC used for on mobile devices?", answer: "Near Field Communication - used for contactless payments, data transfer, and device pairing." },
    { category: "Mobile Devices", question: "What is the difference between OAuth 2.0 and SAML for mobile?", answer: "OAuth 2.0 is an authorization framework, while SAML is an authentication standard. OAuth is more common for modern mobile apps." },
    
    // Networking
    { category: "Networking", question: "What port does FTP use?", answer: "Port 20 (data) and Port 21 (control) - both TCP protocol." },
    { category: "Networking", question: "What port does SSH use?", answer: "Port 22 - TCP protocol for secure remote access." },
    { category: "Networking", question: "What port does HTTPS use?", answer: "Port 443 - TCP protocol for encrypted web traffic." },
    { category: "Networking", question: "What is the difference between TCP and UDP?", answer: "TCP is connection-oriented with error checking and delivery confirmation. UDP is connectionless with faster transmission but no guarantee of delivery." },
    { category: "Networking", question: "What does DHCP stand for?", answer: "Dynamic Host Configuration Protocol - automatically assigns IP addresses to devices on a network." },
    { category: "Networking", question: "What are common 802.11 wireless standards?", answer: "802.11a (5GHz), 802.11b (2.4GHz), 802.11g (2.4GHz), 802.11n (2.4/5GHz), 802.11ac (5GHz), 802.11ax (2.4/5/6GHz - Wi-Fi 6)." },
    { category: "Networking", question: "What is APIPA?", answer: "Automatic Private IP Addressing - a link-local address range (169.254.0.0/16) assigned when DHCP is unavailable." },
    { category: "Networking", question: "What does DNS convert?", answer: "Domain names to IP addresses (forward lookup) and IP addresses to domain names (reverse lookup)." },
    
    // Hardware
    { category: "Hardware", question: "What is the difference between DIMM and SODIMM?", answer: "DIMM (Dual In-line Memory Module) is used in desktop computers. SODIMM (Small Outline DIMM) is used in laptops and small form factor devices." },
    { category: "Hardware", question: "What does DDR stand for?", answer: "Double Data Rate - a type of RAM that transfers data on both the rising and falling edges of the clock signal." },
    { category: "Hardware", question: "What is NVMe?", answer: "Non-Volatile Memory Express - a protocol for accessing high-speed storage media like SSDs via PCIe bus." },
    { category: "Hardware", question: "What is RAID?", answer: "Redundant Array of Independent Disks - multiple drives combined for performance, redundancy, or both." },
    { category: "Hardware", question: "What are common RAID levels?", answer: "RAID 0 (striping - performance), RAID 1 (mirroring - redundancy), RAID 5 (striping with parity), RAID 10 (mirrored striping)." },
    { category: "Hardware", question: "What is the difference between LCD and OLED displays?", answer: "LCD uses a backlight and liquid crystals. OLED pixels emit their own light, allowing for perfect blacks and thinner displays." },
    { category: "Hardware", question: "What is the purpose of a UPS?", answer: "Uninterruptible Power Supply - provides battery backup during power outages and protects against power surges." },
    { category: "Hardware", question: "What does POST stand for?", answer: "Power-On Self-Test - hardware diagnostic performed by BIOS/UEFI when computer starts." },
    
    // Virtualization & Cloud
    { category: "Virtualization", question: "What is a hypervisor?", answer: "Software that creates and manages virtual machines by abstracting hardware resources from the host OS." },
    { category: "Virtualization", question: "What is the difference between Type 1 and Type 2 hypervisors?", answer: "Type 1 (bare-metal) runs directly on hardware. Type 2 (hosted) runs as an application on an operating system." },
    { category: "Virtualization", question: "What does IaaS stand for?", answer: "Infrastructure as a Service - provides virtualized computing resources over the internet (e.g., AWS EC2, Azure VMs)." },
    { category: "Virtualization", question: "What does PaaS stand for?", answer: "Platform as a Service - provides a platform for developing, testing, and deploying applications (e.g., Heroku, Azure App Service)." },
    { category: "Virtualization", question: "What does SaaS stand for?", answer: "Software as a Service - delivers software applications over the internet (e.g., Office 365, Gmail, Salesforce)." },
    { category: "Virtualization", question: "What is VDI?", answer: "Virtual Desktop Infrastructure - virtual desktops hosted on a central server and accessed remotely by end users." },
    { category: "Virtualization", question: "What is multitenancy in cloud computing?", answer: "Multiple customers (tenants) share the same infrastructure while keeping their data isolated and secure." },
    
    // Troubleshooting
    { category: "Troubleshooting", question: "What are common signs of a failing hard drive?", answer: "Clicking sounds, slow performance, frequent freezes, S.M.A.R.T. warnings, boot failures, data corruption." },
    { category: "Troubleshooting", question: "What could cause a computer to overheat?", answer: "Dust buildup, failing fan, clogged vents, dried thermal paste, blocked air circulation, ambient temperature." },
    { category: "Troubleshooting", question: "What is capacitor swelling?", answer: "Capacitors on a motherboard or power supply bulge and leak electrolyte when they fail, causing system instability." },
    { category: "Troubleshooting", question: "What causes limited connectivity in Windows?", answer: "No IP address assigned, DHCP issues, DNS problems, network adapter driver issues, IP conflict." },
    { category: "Troubleshooting", question: "What causes paper jams in printers?", answer: "Misaligned paper, worn feed rollers, foreign objects, humidity affecting paper, overloaded trays." }
];

// Quiz Data
const quizData = {
    mobile: [
        {
            question: "Which type of battery is most commonly used in modern smartphones?",
            options: ["Nickel-Cadmium", "Lithium-ion", "Alkaline", "Lead-acid"],
            correct: 1
        },
        {
            question: "What does MDM help IT administrators manage on mobile devices?",
            options: ["Hardware specifications", "Device configurations and security policies", "Physical repairs", "Battery replacement schedules"],
            correct: 1
        },
        {
            question: "What is the maximum range of Bluetooth technology?",
            options: ["10 meters", "33 feet (10 meters)", "100 meters", "1 kilometer"],
            correct: 1
        },
        {
            question: "Which connector is commonly used for charging modern Android devices?",
            options: ["30-pin dock", "Lightning", "USB-C", "Mini-USB"],
            correct: 2
        },
        {
            question: "What is the purpose of an eSIM?",
            options: ["Extended SIM with more storage", "Embedded SIM chip", "External SIM card reader", "Enhanced security SIM"],
            correct: 1
        }
    ],
    networking: [
        {
            question: "Which port is used by DNS?",
            options: ["Port 53", "Port 80", "Port 443", "Port 25"],
            correct: 0
        },
        {
            question: "What is the difference between TCP and UDP?",
            options: ["TCP is faster than UDP", "TCP is connection-oriented, UDP is connectionless", "UDP has more overhead", "TCP is only used for web traffic"],
            correct: 1
        },
        {
            question: "What does DHCP provide to devices on a network?",
            options: ["Physical addresses", "IP addresses automatically", "Domain names", "Email services"],
            correct: 1
        },
        {
            question: "What is the purpose of a VLAN?",
            options: ["Increase internet speed", "Segment network traffic logically", "Provide wireless connectivity", "Encrypt network traffic"],
            correct: 1
        },
        {
            question: "What wireless standard operates on both 2.4GHz and 5GHz frequencies?",
            options: ["802.11a", "802.11b", "802.11n", "802.11g"],
            correct: 2
        }
    ],
    hardware: [
        {
            question: "Which RAM form factor is used in laptop computers?",
            options: ["DIMM", "SODIMM", "RIMM", "SIMM"],
            correct: 1
        },
        {
            question: "What does NVMe stand for?",
            options: ["Network Virtual Memory Engine", "Non-Volatile Memory Express", "New Virtual Memory Extension", "Non-Volatile Module Equipment"],
            correct: 1
        },
        {
            question: "Which RAID level provides both performance and redundancy?",
            options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
            correct: 3
        },
        {
            question: "What type of display technology uses a backlight?",
            options: ["OLED", "LED", "LCD", "Plasma"],
            correct: 2
        },
        {
            question: "What is the purpose of the POST?",
            options: ["Connect to the internet", "Test hardware during startup", "Install operating system", "Configure network settings"],
            correct: 1
        }
    ],
    virtualization: [
        {
            question: "What is a Type 1 hypervisor?",
            options: ["Hosted hypervisor", "Bare-metal hypervisor", "Cloud-based hypervisor", "Software hypervisor"],
            correct: 1
        },
        {
            question: "Which cloud model provides the most control to the customer?",
            options: ["SaaS", "PaaS", "IaaS", "Public cloud"],
            correct: 2
        },
        {
            question: "What is VDI?",
            options: ["Virtual Data Integration", "Virtual Desktop Infrastructure", "Visual Design Interface", "Virtual Device Integration"],
            correct: 1
        },
        {
            question: "What does multitenancy allow in cloud computing?",
            options: ["Multiple operating systems", "Multiple users sharing infrastructure securely", "Multiple data centers", "Multiple network connections"],
            correct: 1
        },
        {
            question: "Which of the following is an example of SaaS?",
            options: ["AWS EC2", "Azure App Service", "Microsoft Office 365", "Google Compute Engine"],
            correct: 2
        }
    ],
    troubleshooting: [
        {
            question: "What could cause a computer to display a blank screen on startup?",
            options: ["Software license expired", "Faulty RAM or video card", "Network cable disconnected", "Printer not connected"],
            correct: 1
        },
        {
            question: "What is a common symptom of a failing hard drive?",
            options: ["Screen flickering", "Clicking sounds", "Keyboard not responding", "USB ports not working"],
            correct: 1
        },
        {
            question: "What should you check when a printer has paper jams frequently?",
            options: ["Internet connection", "Paper tray and feed rollers", "Ink levels", "Network speed"],
            correct: 1
        },
        {
            question: "What causes limited connectivity in Windows?",
            options: ["No DHCP server available", "Printer offline", "Monitor disconnected", "Keyboard not detected"],
            correct: 0
        },
        {
            question: "What is capacitor swelling a symptom of?",
            options: ["Software corruption", "Failed capacitors on motherboard/PSU", "Overclocking CPU", "RAM failure"],
            correct: 1
        }
    ]
};

// Flashcard State
let currentFlashcardIndex = 0;
let currentQuizDomain = '';
let currentQuestionIndex = 0;
let quizScore = 0;

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Flashcard Functions
function startFlashcards() {
    currentFlashcardIndex = 0;
    updateFlashcard();
    openModal('flashcardModal');
}

function closeFlashcards() {
    closeModal('flashcardModal');
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function prevCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        updateFlashcard();
    }
}

function nextCard() {
    if (currentFlashcardIndex < flashcardData.length - 1) {
        currentFlashcardIndex++;
        updateFlashcard();
    }
}

function updateFlashcard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    
    const card = flashcardData[currentFlashcardIndex];
    const frontCategory = flashcard.querySelector('.flashcard-category');
    const frontQuestion = flashcard.querySelector('.flashcard-question');
    const backAnswer = flashcard.querySelector('.flashcard-answer');
    
    frontCategory.textContent = card.category;
    frontQuestion.textContent = card.question;
    backAnswer.textContent = card.answer;
    
    document.getElementById('currentCard').textContent = currentFlashcardIndex + 1;
    document.getElementById('totalCards').textContent = flashcardData.length;
}

// Quiz Functions
function startQuiz() {
    openModal('quizModal');
    document.getElementById('quizStart').style.display = 'block';
    document.getElementById('quizQuestion').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

function closeQuiz() {
    closeModal('quizModal');
}

function startQuizFor(domain) {
    currentQuizDomain = domain;
    currentQuestionIndex = 0;
    quizScore = 0;
    
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizQuestion').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    loadQuestion();
}

function loadQuestion() {
    const questions = quizData[currentQuizDomain];
    const question = questions[currentQuestionIndex];
    
    document.getElementById('quizProgress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionBtn);
    });
    
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('nextQuestionBtn').style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const questions = quizData[currentQuizDomain];
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');
    
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.correct) {
        quizScore++;
        feedback.textContent = 'Correct! Well done.';
        feedback.className = 'quiz-feedback show correct';
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${question.options[question.correct]}`;
        feedback.className = 'quiz-feedback show incorrect';
    }
    
    document.getElementById('nextQuestionBtn').style.display = 'block';
    
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('nextQuestionBtn').textContent = 'See Results';
    } else {
        document.getElementById('nextQuestionBtn').textContent = 'Next Question';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    const questions = quizData[currentQuizDomain];
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const questions = quizData[currentQuizDomain];
    document.getElementById('quizQuestion').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizTotal').textContent = questions.length;
    
    const percentage = (quizScore / questions.length) * 100;
    let message = '';
    if (percentage >= 80) {
        message = 'Excellent! You have a strong understanding of this topic.';
    } else if (percentage >= 60) {
        message = 'Good job! Review the topics you missed for even better results.';
    } else {
        message = 'Keep studying! Review the topic materials and try again.';
    }
    document.getElementById('quizMessage').textContent = message;
}

function resetQuiz() {
    startQuiz();
}

// Quick Reference Functions
function showQuickRef() {
    openModal('quickRefModal');
}

function closeQuickRef() {
    closeModal('quickRefModal');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = ['flashcardModal', 'quizModal', 'quickRefModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
};

// Keyboard navigation for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('flashcardModal');
        closeModal('quizModal');
        closeModal('quickRefModal');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlight on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Preload any necessary data
    console.log('CompTIA A+ 220-1201 Study Guide loaded successfully');
});
