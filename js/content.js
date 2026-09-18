/**
 * =============================================================================
 * EDIT YOUR PORTFOLIO HERE
 * =============================================================================
 * This is the only file you need for most updates:
 *   name, about, skills, projects, training, certificates, links, images.
 *
 * Images live in /assets/images/
 *   - Profile:        assets/images/profile.jpg
 *   - Projects:       assets/images/projects/<folder>/...
 *   - Certificates:   assets/images/certificates/<file>
 *
 * To replace an image: drop the new file in that folder with the SAME name,
 * or change the path below. Missing images show a clean placeholder.
 * =============================================================================
 */
window.PORTFOLIO = {
  profile: {
    firstName: "Moaz",
    lastName: "Osama Elkholy",
    fullName: "Moaz Osama Elkholy",
    role: "Communication & Electronics Engineering Student",
    headline: "Building connected systems across IoT, embedded hardware, and networks.",
    interests: ["IoT", "Embedded Systems", "Networking", "Cloud / DevOps", "Software", "Data / AI"],
    typingLines: [
      "Communication & Electronics Engineer",
      "IoT · Embedded Systems · Networking",
      "Cloud, software, and applied AI"
    ],
    location: "Egypt",
    education: "B.Sc. Communication & Electronics Engineering — Canadian International College (CIC), 2022–2027 · GPA 3.53",
    image: "assets/images/profile.jpg",
    cv: "assets/Moaz_Elkholy_CV.pdf"
  },

  about: {
    summary:
      "Motivated Communication and Electronics student with a strong foundation in IoT, networking, embedded systems, and applied AI. I design and simulate connected systems with ESP32, STM32, Packet Tracer, C, and Python — combining hardware, firmware, and software to solve practical engineering problems.",
    extra:
      "Comfortable troubleshooting networks, integrating sensors and MCUs, and turning training projects into working prototypes. Looking for internships and junior engineering roles where I can contribute and keep learning."
  },

  contact: {
    email: "moazosamaaa1@gmail.com",
    phone: "01159477991",
    phoneHref: "tel:+201159477991",
    github: "https://github.com/Mo3az1x",
    githubLabel: "github.com/Mo3az1x",
    linkedin: "https://www.linkedin.com/in/moaz-elkholy",
    linkedinLabel: "linkedin.com/in/moaz-elkholy"
  },

  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" }
  ],

  /**
   * Skills are grouped so the section stays scannable.
   * Add/remove items inside each `items` array.
   */
  skills: [
    {
      id: "iot",
      title: "IoT",
      items: ["ESP32", "MQTT", "HiveMQ", "ThingSpeak", "Blynk"]
    },
    {
      id: "networking",
      title: "Networking",
      items: ["Cisco Packet Tracer", "DHCP", "VLANs", "Routing & Switching", "Subnetting", "RIP / OSPF", "HCIA–DataCom"]
    },
    {
      id: "embedded",
      title: "Embedded Systems",
      items: ["STM32", "Arduino", "FreeRTOS", "SPI / I2C / UART", "ADC / GPIO", "Sensors", "PID Control"]
    },
    {
      id: "programming",
      title: "Programming",
      items: ["C", "C++", "Python", "Java", "MATLAB", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      id: "tools",
      title: "Tools",
      items: ["Git / GitHub", "Proteus", "Wokwi", "Microsoft Office"]
    }
  ],

  /**
   * Projects
   * Fields:
   *   id, title, period, summary, description[], highlights[], tech[],
   *   image (card cover), gallery[{src, caption}], github, demo, page
   */
  projects: [
    {
      id: "iot-temperature",
      title: "Smart Temperature Control System",
      period: "NTI IoT Training · Aug 2025",
      summary:
        "ESP32 IoT system for temperature monitoring and control over MQTT (HiveMQ), with automatic threshold logic and manual ON/OFF of a relay and LED. Simulated in Wokwi.",
      description: [
        "Designed an IoT remote control and monitoring solution that combines live temperature sensing with cloud messaging.",
        "Supports two modes: manual remote control via MQTT, and automatic temperature-threshold actuation of a relay and LED.",
        "Developed and validated on the Wokwi simulator using ESP32, a temperature sensor, relay, and LED, with HiveMQ as the MQTT broker."
      ],
      highlights: [
        "ESP32-based sensing and actuation",
        "MQTT + HiveMQ cloud communication",
        "Automatic threshold control and manual ON/OFF",
        "Relay and LED outputs",
        "Wokwi simulation for hardware-free testing"
      ],
      tech: ["ESP32", "MQTT", "HiveMQ", "Wokwi", "IoT"],
      image: "assets/images/projects/iot-temperature/iot.jpeg",
      gallery: [{ src: "assets/images/projects/iot-temperature/iot.jpeg" }],
      github: "",
      demo: "",
      page: "projects/iot-temperature.html"
    },
    {
      id: "seat-controller",
      title: "Seat Controller ECU",
      period: "Embedded Meetup / ITI · Sep–Oct 2025 · Team Leader",
      summary:
        "STM32F411RE NUCLEO seat-control ECU with FreeRTOS, multi-protocol communication, EEPROM HIL, an Arduino bridge to the desktop, and a Java BusSniffer application.",
      description: [
        "Implemented an automotive-style seat controller ECU on STM32 Nucleo F411RE running FreeRTOS, with cooperating Arduino boards for PC communication and EEPROM hardware-in-the-loop.",
        "Used SPI, I2C, and UART across the stack; EEPROM stored profile and calibration data. A Java desktop BusSniffer monitored and analyzed serial traffic between microcontrollers."
      ],
      highlights: [
        "STM32F411RE NUCLEO + FreeRTOS control logic",
        "SPI / I2C / UART between MCUs",
        "EEPROM HIL for profiles and calibration",
        "Bridge between STM32 and desktop",
        "Java BusSniffer GUI for live protocol monitoring",
        "Fault detection and emergency-stop paths"
      ],
      tech: ["STM32", "FreeRTOS", "SPI", "I2C", "UART", "EEPROM", "Java", "Arduino"],
      image: "assets/images/projects/seat-controller/hardware.jpg",
      gallery: [
        { src: "assets/images/projects/seat-controller/hardware.jpg", caption: "Hardware setup" },
        { src: "assets/images/projects/seat-controller/hardware-setup.png", caption: "Architecture diagram" },
        { src: "assets/images/projects/seat-controller/bus-sniffer.png", caption: "Bus Sniffer application" },
        { src: "assets/images/projects/seat-controller/eeprom.png", caption: "EEPROM interface" }
      ],
      github: "https://github.com/Mo3az1x/Seat-Controller",
      demo: "",
      page: "projects/seat-controller.html",
      architecture:
        "STM32 Nucleo (F411RE, FreeRTOS) ⇄ I2C ⇄ Arduino Nano (Bridge) ⇄ UART ⇄ PC Bus Sniffer (Java)\n        │\n        └─ SPI ⇄ Arduino Uno (EEPROM HIL)"
    },
    {
      id: "campus-network",
      title: "Smart Campus Network",
      period: "Pixels Egypt · Feb 2025",
      summary:
        "Multi-building campus network in Cisco Packet Tracer with subnetting, VLANs, DHCP, routing (RIP/OSPF), and secured remote access.",
      description: [
        "Designed a multi-building network in Cisco Packet Tracer using structured IP addressing, VLANs, and DHCP for scalable campus connectivity.",
        "Configured RIP and OSPF, and secured Telnet access as part of a practical network-design exercise with Pixels Egypt."
      ],
      highlights: [
        "Multi-building topology in Packet Tracer",
        "DHCP and VLAN segmentation",
        "Subnetting and addressing plan",
        "RIP / OSPF routing",
        "Secured Telnet access"
      ],
      tech: ["Cisco Packet Tracer", "DHCP", "VLANs", "RIP", "OSPF", "Subnetting"],
      image: "assets/images/projects/campus-network/n1.png",
      gallery: [{ src: "assets/images/projects/campus-network/n1.png" }],
      github: "",
      demo: "",
      page: "projects/campus-network.html"
    },
    {
      id: "gesture-car",
      title: "Gesture-Controlled Robot Car",
      period: "Academic project · Nov–Dec 2024",
      summary:
        "Arduino robot driven by hand gestures: MPU6050 on a wearable controller, HC-05 Bluetooth to an Uno + motor driver on the car.",
      description: [
        "Two Arduino nodes: a wearable Nano reads orientation from an MPU6050 and sends motion commands over Bluetooth; an Uno on the chassis drives DC motors through an L298N.",
        "Real-time gesture mapping (stop, forward, back, left, right) implemented in C/C++ with sensor calibration at startup."
      ],
      highlights: [
        "Arduino Nano + MPU6050 wearable controller",
        "HC-05 Bluetooth link to the robot",
        "Arduino Uno + L298N motor driver",
        "Gesture-to-motion mapping in C"
      ],
      tech: ["Arduino", "MPU6050", "HC-05", "C / C++"],
      image: "assets/images/projects/gesture-car/robot-car.jpg",
      gallery: [
        { src: "assets/images/projects/gesture-car/robot-car.jpg", caption: "Robot car" },
        { src: "assets/images/projects/gesture-car/four-wheel.png", caption: "Four-wheel variant" },
        { src: "assets/images/projects/gesture-car/controller.png", caption: "Gesture controller" },
        { src: "assets/images/projects/gesture-car/control.jpg", caption: "Control demo" }
      ],
      github: "https://github.com/Mo3az1x/geasture-controlled-car",
      demo: "",
      page: "projects/gesture-car.html"
    },
    {
      id: "self-balancing",
      title: "Self-Balancing System",
      period: "Academic project · Mar–May 2025",
      summary:
        "Real-time self-balancing plant using Arduino, MPU6050 feedback, and PID control to keep the system upright.",
      description: [
        "Applied control theory on an Arduino platform: IMU feedback from an MPU6050 and a tuned PID loop to maintain stability in real time."
      ],
      highlights: [
        "Arduino + MPU6050 sensing",
        "PID control for balance",
        "Real-time embedded control loop"
      ],
      tech: ["Arduino", "MPU6050", "PID", "Control Systems"],
      image: "assets/images/projects/self-balancing/s1.jpeg",
      gallery: [
        { src: "assets/images/projects/self-balancing/s1.jpeg"  },
        { src: "assets/images/projects/self-balancing/s2.jpeg" }
      ],
      github: "https://github.com/Mo3az1x/Self-balancing-robot",
      demo: "",
      page: "projects/self-balancing.html"
    },
    {
      id: "ai-feedback",
      title: "AI Customer Feedback Intelligence",
      period: "ITI Artificial Intelligence Training · Aug–Sep 2026",
      summary:
        "Sentiment analysis on product-review text (women’s clothing reviews) using TF-IDF, Logistic Regression, Random Forest, and clustering.",
      description: [
        "Built as part of ITI AI training covering Python, Pandas, NumPy, preprocessing, EDA, machine learning, and NLP.",
        "Modeled review sentiment with TF-IDF features, Logistic Regression and Random Forest classifiers, plus K-Means clustering with silhouette analysis. Training also introduced TensorFlow/Keras CNN concepts."
      ],
      highlights: [
        "Product-review sentiment analysis",
        "TF-IDF text features",
        "Logistic Regression and Random Forest",
        "SVD / clustering (K-Means, silhouette)",
        "Python data/ML workflow"
      ],
      tech: ["Python", "TF-IDF", "Logistic Regression", "Random Forest", "Clustering", "NLP"],
      image: "assets/images/projects/ai-feedback/ai.png",
      gallery: [{ src: "assets/images/projects/ai-feedback/ai.png" }],
      github: "",
      demo: "",
      page: "projects/ai-feedback.html"
    }
  ],

  experience: [
    {
      title: "Artificial Intelligence Training",
      org: "Information Technology Institute (ITI)",
      dates: "Aug–Sep 2026",
      points: [
        "Python, Pandas, NumPy, preprocessing, EDA, machine learning, NLP, and computer vision.",
        "Built an AI customer-feedback intelligence system (TF-IDF, Logistic Regression, Random Forest, K-Means).",
        "Introduced to TensorFlow/Keras: CNNs, transfer learning, augmentation, convolution, ReLU, pooling."
      ]
    },
    {
      title: "CCNA Training",
      org: "National Telecommunication Institute (NTI)",
      dates: "Jan–Apr 2026",
      points: [
        "Networking, IP addressing, routing (RIP/OSPF), switching (VLANs/STP).",
        "DHCP, NAT, ACLs, and basic security practices.",
        "Labs in design, configuration, and troubleshooting."
      ]
    },
    {
      title: "Cloud Services Training",
      org: "National Telecommunication Institute (NTI)",
      dates: "Nov 2025–Jan 2026",
      points: [
        "Cloud models (IaaS, PaaS, SaaS), VMs, storage, and networking.",
        "Architecture for scalability, high availability, and load balancing.",
        "IAM, data protection, and service monitoring basics."
      ]
    },
    {
      title: "Embedded Systems Intern — Team Leader",
      org: "Embedded Meetup (ITI Collaboration)",
      dates: "Sep–Oct 2025",
      points: [
        "Led the Seat Controller project on STM32 with FreeRTOS and SPI/I2C/UART.",
        "EEPROM HIL for profile management and calibration.",
        "Desktop BusSniffer to monitor serial traffic between microcontrollers."
      ]
    },
    {
      title: "Cyber Security Training",
      org: "National Telecommunication Institute (NTI)",
      dates: "Aug–Sep 2025",
      points: [
        "Networking, web security, and penetration-testing fundamentals.",
        "OWASP Top 10; tools including Burp Suite, Wireshark, Nmap, Metasploit, Kali Linux.",
        "Linux commands and TCP/IP packet analysis."
      ]
    },
    {
      title: "IoT Training",
      org: "National Telecommunication Institute (NTI)",
      dates: "Jul–Aug 2025",
      points: [
        "MQTT, HiveMQ, HTTP, CoAP, and ESP32 programming.",
        "Smart Temperature Control System using Wokwi and Master of Things."
      ]
    },
    {
      title: "Introduction to Web Technologies",
      org: "Information Technology Institute (ITI)",
      dates: "Aug–Sep 2024",
      points: [
        "Front-end development with HTML, CSS, and JavaScript.",
        "Built responsive, user-facing pages."
      ]
    }
  ],

  /**
   * Certificate cards (text-only for now).
   * Uncomment each `image` path when you add the file under assets/images/certificates/
   */
  certificates: [
    {
      title: "HCIA–DataCom",
      issuer: "Huawei Technologies",
      dates: "Aug–Oct 2025",
      // image: "assets/images/certificates/hcia-datacom.png"
    },
    {
      title: "Raspberry Pi Interfacing & IoT",
      issuer: "Embinux",
      dates: "2025",
      // image: "assets/images/certificates/raspberry-pi-iot.png"
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      dates: "2025",
      // image: "assets/images/certificates/cisco-intro-iot.png"
    },
    {
      title: "IoT Course",
      issuer: "ITIDA — EME Innovation Labs",
      dates: "2025",
      // image: "assets/images/certificates/itida-iot.png"
    },
    {
      title: "Python Programming",
      issuer: "Sprints × Microsoft",
      dates: "2025",
      // image: "assets/images/certificates/sprints-python.png"
    },
    {
      title: "SPL01 System Programming in Linux",
      issuer: "Udemy",
      dates: "2025",
      // image: "assets/images/certificates/udemy-spl01.png"
    },
    {
      title: "IoT Development",
      issuer: "Udemy",
      dates: "2024",
      // image: "assets/images/certificates/udemy-iot-development.png"
    }
  ],

  activities: [
    "Computer Networks — Pixels Egypt (Jan–Feb 2025)",
    "IEEE CIC Technical Chapter (2024–2025): AI training, events, and workshops",
    "AI Fundamentals Course — IEEE CIC Technical (May 2025)"
  ]
};
