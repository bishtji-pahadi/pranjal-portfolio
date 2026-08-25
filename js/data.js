// Portfolio Data Configuration for Pranjal Bisht
// Synchronized with latest Enterprise Linux Administrator Resume

const portfolioData = {
  personal: {
    name: "Pranjal Bisht",
    title: "Linux System Administrator",
    tagline: "Dedicated and results-driven Linux System Administrator with over 2 years of enterprise-level experience managing high-availability production environments across RHEL, CentOS, and SUSE Linux. Proven expertise in Logical Volume Management (LVM) storage architecture, automated patch management via Ansible, VM lifecycle orchestration on VMware vSphere, and robust Bash scripting. Strong reputation for resolving critical incidents through deep-dive L2/L3 diagnostic troubleshooting and system performance profiling.",
    location: "Indore, India",
    email: "pranjalbishtji@gmail.com",
    phone: "+91 94248-84630",
    github: "https://github.com/bishtji-pahadi",
    linkedin: "https://www.linkedin.com/in/pranjal-bisht-772381234",
    uptime: "99.9%",
    kernel: "RHEL 8/9 / CentOS / SUSE Linux",
    status: "Linux Administrator @ Tata Consultancy Services Limited"
  },
  
  metrics: [
    { label: "Production SLA Uptime", value: "99.9%", icon: "activity" },
    { label: "Enterprise Experience", value: "2+ Years", icon: "briefcase" },
    { label: "Core OS Platforms", value: "RHEL 8/9 & CentOS", icon: "server" },
    { label: "Incident Resolution & RCA", value: "L2 / L3 Tier", icon: "shield-check" }
  ],

  skillCategories: [
    {
      name: "Operating Systems & Platforms",
      icon: "terminal",
      skills: [
        { name: "Red Hat Enterprise Linux (RHEL) 8/9", level: "Expert" },
        { name: "CentOS & SUSE Linux", level: "Expert" },
        { name: "Ubuntu Server (20.04 / 22.04 LTS)", level: "Expert" },
        { name: "IBM AIX Systems (Monitoring)", level: "Intermediate" },
        { name: "Windows Server Environment", level: "Intermediate" }
      ]
    },
    {
      name: "Automation & Scripting",
      icon: "cpu",
      skills: [
        { name: "Bash Shell Scripting", level: "Expert" },
        { name: "Ansible Playbooks & Automation", level: "Expert" },
        { name: "Automated Patch Management", level: "Expert" },
        { name: "Cron Jobs & Scheduled Automation", level: "Expert" },
        { name: "Vulnerability Remediation Automation", level: "Advanced" }
      ]
    },
    {
      name: "Storage & Virtualization",
      icon: "hard-drive",
      skills: [
        { name: "Logical Volume Management (LVM)", level: "Expert" },
        { name: "VMware vSphere (VM Lifecycle)", level: "Expert" },
        { name: "Disk Partitioning & Swap Management", level: "Expert" },
        { name: "Dell EMC NetWorker", level: "Advanced" },
        { name: "Data Domain Storage OS", level: "Advanced" }
      ]
    },
    {
      name: "Troubleshooting, Security & Tools",
      icon: "shield",
      skills: [
        { name: "L2/L3 Root Cause Analysis (top, iostat, netstat, dmesg)", level: "Expert" },
        { name: "Security Auditing & Logs (syslog, who, last)", level: "Expert" },
        { name: "ServiceNow ITSM & Incident Management", level: "Advanced" },
        { name: "SSH, PuTTY & Secure Networking Protocols", level: "Expert" },
        { name: "ITIL Framework & Confluence SOP Documentation", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Automated Patch Management & Compliance via Ansible",
      category: "automation",
      tag: "Automation & Compliance",
      summary: "Designed automated patch-deployment pipelines across multi-node Linux nodes. Incorporated pre-patch system configuration checks and automated health verification scripts, cutting average host-patching windows significantly.",
      features: [
        "Orchestrated automated patching cycles and vulnerability remediation using Ansible Playbooks",
        "Integrated pre-patch system configuration checks and filesystem state validation",
        "Automated health verification scripts and service restarts, reducing maintenance downtime",
        "Ensured consistent configuration compliance across heterogeneous RHEL and CentOS clusters"
      ],
      techStack: ["Ansible", "RHEL", "CentOS", "Bash", "ServiceNow"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    },
    {
      id: "proj-2",
      title: "Production Ubuntu Fleet OS Migration (20.04 to 22.04 LTS)",
      category: "linux",
      tag: "OS Upgrade & Migration",
      summary: "Guided full OS migrations for client-facing cloud configurations. Resolved package dependencies, configured virtual adapter states, and conducted post-upgrade performance benchmarks with zero production downtime.",
      features: [
        "Conducted thorough package dependency resolution, kernel compatibility, and repository analysis",
        "Configured virtual network adapter states and storage layouts in virtualized environments",
        "Executed staged testing, rollbacks, and comprehensive post-upgrade performance benchmarks",
        "Achieved seamless enterprise OS cutover with 100% data integrity and zero production downtime"
      ],
      techStack: ["Ubuntu Server", "Bash", "Systemd", "SSH", "LVM"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    },
    {
      id: "proj-3",
      title: "Dell EMC Data Domain OS Upgrade (8.3.1.20 to 8.3.1.30)",
      category: "storage",
      tag: "Storage & Backup Infrastructure",
      summary: "Executed major operating system upgrade of enterprise-scale storage nodes. Managed health diagnostics for deduplication pools, scheduled backup downtime cuts with client stakeholders, and verified backup flows via Dell EMC NetWorker.",
      features: [
        "Administered health diagnostics and integrity validation for deduplication storage pools",
        "Scheduled and coordinated backup downtime windows with enterprise client stakeholders",
        "Verified end-to-end backup flows and replication streams via Dell EMC NetWorker CLI",
        "Maintained mission-critical backup readiness and high data availability post-upgrade"
      ],
      techStack: ["Dell EMC Data Domain", "NetWorker", "Storage Architecture", "CLI"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    },
    {
      id: "proj-4",
      title: "LVM Storage Architecture & Dynamic Capacity Optimization",
      category: "storage",
      tag: "LVM & Storage Architecture",
      summary: "Optimized enterprise server disk provisioning through Logical Volume Management (LVM), executing online expansion, partition tables, and swap layouts with zero downtime.",
      features: [
        "Executed live volume group extension (vgextend) and logical volume resizing (lvextend)",
        "Configured dynamic partition tables and optimized swap memory for resource-heavy workloads",
        "Prevented filesystem saturation through proactive I/O and threshold monitoring",
        "Maintained continuous system availability during live storage modifications"
      ],
      techStack: ["LVM", "xfs / ext4", "VMware vSphere", "iostat", "Bash"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    },
    {
      id: "proj-5",
      title: "L2/L3 Root Cause Analysis & System Diagnostic Suite",
      category: "monitoring",
      tag: "RCA & Diagnostic Profiling",
      summary: "Led L2/L3 troubleshooting for critical service bottlenecks, utilizing performance monitors (iostat, vmstat, netstat, dmesg) to deliver comprehensive root cause analyses.",
      features: [
        "Conducted deep-dive diagnostic profiling for CPU load, memory starvation, and network bottlenecks",
        "Audited syslog entries and monitored security logs (who, last) to defend endpoints",
        "Accelerated incident triage and problem management aligned with ITIL framework",
        "Documented detailed SOPs, runbooks, and post-mortem RCA reports in Confluence"
      ],
      techStack: ["top / vmstat", "iostat / netstat", "dmesg", "ServiceNow", "Syslog"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    },
    {
      id: "proj-6",
      title: "Enterprise DR Testing & L2 Automation Pipelines",
      category: "automation",
      tag: "DR Drills & Shell Scripting",
      summary: "Handled L2 operational recovery tasks during enterprise DR drills and automated client agent patching, service restarts, and daemon health checks using Ansible and Bash.",
      features: [
        "Handled server and database restore verifications using Dell EMC NetWorker during DR drills",
        "Authored modular Bash scripts for database log compression and automated directory cleanups",
        "Automated client agent patching, daemon health checks, and scheduled cron workflows",
        "Significantly minimized operational downtime and manual maintenance workloads"
      ],
      techStack: ["Ansible", "Bash Scripting", "Dell EMC NetWorker", "Cron", "Confluence"],
      githubUrl: "https://github.com/bishtji-pahadi",
      demoUrl: ""
    }
  ],

  certifications: [
    {
      title: "Red Hat Certified System Administrator (RHCSA – EX200)",
      issuer: "Red Hat Training Curriculum / Udemy Coursework",
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
    },
    {
      title: "Microsoft Certified: Azure Fundamentals / Administrator (AZ-104)",
      issuer: "Microsoft",
      date: "Certified / Coursework",
      badge: "Azure (AZ-104)",
      description: "Expertise in managing Azure identities and governance, implementing storage, deploying compute resources, and configuring virtual networking."
    }
  ],

  experience: [
    {
      role: "Linux Administrator",
      company: "Tata Consultancy Services Limited",
      period: "May 2024 – Present",
      location: "Noida, India",
      highlights: [
        "Infrastructure Management: Managed and maintained scalable RHEL, CentOS, and SUSE Linux environments within virtualized architectures, securing 99.9% production uptime.",
        "Ansible Automation: Orchestrated automated patching cycles and vulnerability remediation using Ansible Playbooks, ensuring consistent configuration compliance.",
        "LVM & Storage: Optimized server disk provisioning through Logical Volume Management (LVM), executing online expansion (vgextend, lvextend), partition tables, and swap layouts with zero downtime.",
        "VMware Integration: Administered VM lifecycle operations (commissioning/decommissioning) in VMware vSphere, maintaining rigorous inventory management records.",
        "System Scripting: Created robust Bash shell scripts for database log compression, automated directory cleanups, and system alerts, decreasing manual maintenance workloads.",
        "Incident Resolution & RCA: Led L2/L3 troubleshooting for critical service bottlenecks, utilizing performance monitors (iostat, vmstat, netstat, dmesg) to deliver comprehensive root cause analyses.",
        "Security Compliance: Audited syslog entries and monitored security logs (who, last) to defend endpoints against unauthorized access and comply with internal standards.",
        "Backup & Recovery Operations: Supervised server recovery profiles and executed scheduled offline database backups via Dell EMC NetWorker CLI; ensured high availability across hybrid environments with a 99%+ backup success rate and timely ITIL-aligned data restores.",
        "Cross-Platform Operations: Supported AIX legacy systems with routine monitoring and basic administrative checkups to execute offline backups.",
        "Incident & Operations Management: Handled L2/L3 incidents, change requests, and problem management aligned with ITIL framework; leveraged automated Ansible workflows to accelerate incident triage and resolution.",
        "Release & Deployment Support: Supported multi-environment deployments, kernel/package patching, and configuration management; created Ansible verification playbooks for automated pre/post-release health checks.",
        "Knowledge & Governance: Maintained comprehensive SOPs, runbooks, and technical documentation in Confluence, ensuring standard operating guidelines and audit compliance across the Linux infrastructure.",
        "DR Testing & L2 Automation: Handled L2 operational recovery tasks during enterprise DR drills, performing server and database restore verifications using Dell EMC NetWorker; automated client agent patching, service restarts, and daemon health checks using Ansible and Bash, minimizing operational downtime."
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
