// Portfolio Data Configuration for Pranjal Bisht
const portfolioData = {
  personal: {
    name: "Pranjal Bisht",
    title: "Linux System Administrator",
    tagline: "Dedicated Linux Administrator with hands-on expertise in managing enterprise RHEL, CentOS & virtualized environments. Specializing in high-availability systems, LVM storage architecture, Ansible automation, and proactive L2/L3 infrastructure troubleshooting.",
    location: "Indore, India",
    email: "pranjalbishtji@gmail.com",
    phone: "+91 94248-84630",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/pranjal-bisht-772381234",
    uptime: "99.9%",
    kernel: "RHEL / CentOS / Enterprise Linux",
    status: "Active Linux Administrator @ Tata Consultancy Services (TCS)"
  },
  
  metrics: [
    { label: "Production Uptime", value: "99.9%", icon: "activity" },
    { label: "Enterprise Experience", value: "2+ Years", icon: "briefcase" },
    { label: "Key OS Platforms", value: "RHEL & CentOS", icon: "server" },
    { label: "Incident Resolution", value: "L2 / L3 Tier", icon: "shield-check" }
  ],

  skillCategories: [
    {
      name: "Operating Systems & Platforms",
      icon: "terminal",
      skills: [
        { name: "Red Hat Enterprise Linux (RHEL)", level: "Expert" },
        { name: "CentOS & SUSE Linux", level: "Expert" },
        { name: "Ubuntu Server (20.04 / 22.04)", level: "Expert" },
        { name: "IBM AIX Systems", level: "Intermediate" },
        { name: "Windows Server Environment", level: "Intermediate" }
      ]
    },
    {
      name: "Automation & Scripting",
      icon: "cpu",
      skills: [
        { name: "Bash Shell Scripting", level: "Expert" },
        { name: "Ansible Playbooks & Automation", level: "Advanced" },
        { name: "Automated Patch Management", level: "Expert" },
        { name: "Cron & Maintenance Automation", level: "Expert" },
        { name: "Offline Database Backup Automation", level: "Advanced" }
      ]
    },
    {
      name: "Storage & Virtualization",
      icon: "hard-drive",
      skills: [
        { name: "Logical Volume Management (LVM)", level: "Expert" },
        { name: "VMware vSphere (VM Lifecycle)", level: "Advanced" },
        { name: "Disk Partitioning & Swap Optimization", level: "Expert" },
        { name: "Dell EMC NetWorker", level: "Advanced" },
        { name: "Data Domain Storage OS", level: "Advanced" }
      ]
    },
    {
      name: "Troubleshooting, Security & Tools",
      icon: "shield",
      skills: [
        { name: "L2/L3 Incident & RCA (top, iostat, netstat, dmesg)", level: "Expert" },
        { name: "Security Audit & User Monitoring (who, last)", level: "Expert" },
        { name: "ServiceNow (ITSM / Incident Mgmt)", level: "Advanced" },
        { name: "SSH, PuTTY, WinSCP & Secure Protocols", level: "Expert" },
        { name: "Vulnerability Remediation", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Automated Patch Management & Compliance via Ansible",
      category: "automation",
      tag: "Automation & Patching",
      summary: "Architected automated patch management and vulnerability remediation workflows using Ansible Playbooks across multi-node RHEL, CentOS, and SUSE production clusters.",
      features: [
        "Automated quarterly OS update cycles reducing maintenance downtime",
        "Pre-patching filesystem and snapshot state validation",
        "Automated service restarts and post-update health verification",
        "Standardized configuration across heterogeneous Linux distributions"
      ],
      techStack: ["Ansible", "RHEL", "CentOS", "Bash", "ServiceNow"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-2",
      title: "Production Ubuntu Fleet OS Migration (20.04 to 22.04 LTS)",
      category: "linux",
      tag: "OS Upgrade & Migration",
      summary: "Successfully executed end-to-end operating system upgrades from Ubuntu 20.04 LTS to 22.04 LTS across production server instances with zero data loss.",
      features: [
        "Conducted thorough dependency, kernel compatibility, and repository analysis",
        "Executed staged testing and rollback mechanisms in isolated environments",
        "Validated critical background daemons, network routing, and firewall rules post-upgrade",
        "Completed migration with zero unplanned application downtime"
      ],
      techStack: ["Ubuntu 22.04 LTS", "Linux Kernel", "Bash", "SSH", "LVM"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-3",
      title: "Data Domain Operating System Upgrade (8.3.1.20 to 8.3.1.30)",
      category: "storage",
      tag: "Storage & Backup Infrastructure",
      summary: "Spearheaded the successful upgrade of Dell EMC Data Domain storage operating system from version 8.3.1.20 to 8.3.1.30 for enterprise data preservation.",
      features: [
        "Pre-upgrade health checks of storage pools, MTrees, and deduplication engine",
        "Coordinated with enterprise storage teams to schedule minimal disruption windows",
        "Verified replication streams, backup data integrity, and system logs post-upgrade",
        "Maintained continuous backup readiness with Dell EMC NetWorker"
      ],
      techStack: ["Data Domain OS", "Dell EMC NetWorker", "Storage Architecture", "CLI"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-4",
      title: "LVM Storage Architecture & Dynamic Capacity Optimization",
      category: "storage",
      tag: "LVM & Filesystem Management",
      summary: "Implemented scalable Logical Volume Management (LVM) architectures to dynamically extend volumes, partition disks, and manage swap memory without service disruption.",
      features: [
        "Live volume group expansion (vgextend) and logical volume resize (lvextend)",
        "Proactive monitoring of high I/O filesystem thresholds to avoid saturation",
        "Architected optimized swap allocation strategies for memory-heavy workloads",
        "Enforced clean storage partitioning guidelines across virtual machines"
      ],
      techStack: ["LVM", "xfs / ext4", "VMware vSphere", "iostat", "Bash"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-5",
      title: "System Performance Profiling & L2/L3 Incident Resolution Suite",
      category: "monitoring",
      tag: "RCA & Performance Diagnostics",
      summary: "Established standard operating procedures and diagnostic workflows for deep-dive CPU, memory, process, and network bottleneck evaluations during critical incidents.",
      features: [
        "Root cause analysis for process hangs, memory starvation, and high load averages",
        "In-depth analysis using top, vmstat, iostat, netstat, dmesg, and system logs",
        "Audited system security and unauthorized access tracking via who and last",
        "Documented detailed post-mortem RCA reports in ServiceNow"
      ],
      techStack: ["Linux Performance Tools", "dmesg", "ServiceNow", "Systemd", "Syslog"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-6",
      title: "Automated Maintenance & Offline Database Backup Pipelines",
      category: "automation",
      tag: "Bash & Scripting",
      summary: "Authored modular, robust Bash shell scripts to automate routine maintenance, log compression, VM provisioning records, and CLI database backup routines.",
      features: [
        "Automated backup triggers for databases and IBM AIX system files",
        "Log archiving and automated disk space recovery routines",
        "Scheduled verification of Dell EMC NetWorker backup completion status",
        "Error alerting and execution logging for all background cron jobs"
      ],
      techStack: ["Bash Scripting", "Cron", "IBM AIX", "Dell EMC NetWorker", "Linux CLI"],
      githubUrl: "https://github.com",
      demoUrl: ""
    }
  ],

  certifications: [
    {
      title: "Linux Red Hat Certified System Administrator (RHCSA – EX200)",
      issuer: "Udemy / Red Hat Training Curriculum",
      date: "Completed Coursework & Hands-on Labs",
      badge: "RHCSA (EX200)",
      description: "Comprehensive administration of Red Hat Enterprise Linux, user/group security, storage management, LVM, systemd services, and network configuration."
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Verified Certification",
      badge: "Azure (AZ-900)",
      description: "Foundational knowledge of cloud concepts, Azure core services, security, privacy, compliance, and cloud infrastructure management."
    }
  ],

  experience: [
    {
      role: "Linux Administrator",
      company: "Tata Consultancy Services Limited (TCS)",
      period: "May 2024 – Present",
      location: "Noida, India",
      highlights: [
        "Engineered and maintained scalable RHEL, CentOS, & SUSE Linux environments within virtualized architecture, ensuring 99.9% uptime & high availability.",
        "Optimized filesystem utilization by architecting Logical Volume Management (LVM) solutions & implementing proactive disk partitioning & swap management strategies.",
        "Streamlined server lifecycle management by executing end-to-end commissioning & decommissioning of VMs on VMware vSphere, while maintaining precise infrastructure inventory logs.",
        "Reduced manual overhead by authoring robust Bash shell scripts to automate recurring system upgrades, patching & configuration tasks.",
        "Ensured continuous compliance by auditing system security logs & monitoring user activity (using who, last), proactively mitigating potential security risks.",
        "Spearheaded complex L2/L3 troubleshooting for production environments, utilizing advanced performance monitoring tools (top, iostat, netstat, dmesg) to resolve critical system incidents.",
        "Executed precise root cause analysis (RCA) by conducting deep-dive CPU, memory & process evaluations, resulting in faster resolution times for infrastructure bottlenecks.",
        "Implemented quarterly patch management and vulnerability remediation cycles, automating updates via Ansible to maintain a secure & compliant Linux infrastructure.",
        "Oversaw mission-critical data integrity by managing backup & restore operations via Dell EMC NetWorker and performing database backup operations via CLI, ensuring high availability.",
        "Conducted basic monitoring and administrative tasks on IBM AIX systems & database for initiating offline backups."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor's Degree in Petrochemical Technology",
      institution: "University Institute of Technology – RGPV, Bhopal",
      period: "2019 – 2023"
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "St. Joseph's Convent Senior Secondary School, Ratlam",
      period: "2017 – 2018"
    },
    {
      degree: "Higher Secondary (10th)",
      institution: "St. Joseph's Convent Senior Secondary School, Ratlam",
      period: "2015 – 2016"
    }
  ]
};
