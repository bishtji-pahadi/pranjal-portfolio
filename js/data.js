// Portfolio Data Configuration - Easily edit your personal details here!
const portfolioData = {
  personal: {
    name: "Alex Morgan", // Replace with your name
    title: "Linux System Administrator & DevOps Enthusiast",
    tagline: "Architecting resilient infrastructure, automating workflows, and securing high-availability Linux environments.",
    location: "Global / Remote",
    email: "alex.morgan.sysadmin@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    uptime: "99.99%",
    kernel: "Linux 6.x / Enterprise Ready",
    status: "Available for full-time roles & consulting"
  },
  
  metrics: [
    { label: "Systems Managed", value: "250+", icon: "server" },
    { label: "Infrastructure Uptime", value: "99.99%", icon: "activity" },
    { label: "Automated Deployments", value: "1,200+", icon: "zap" },
    { label: "Incident MTTR Reduction", value: "45%", icon: "shield-check" }
  ],

  skillCategories: [
    {
      name: "Linux & OS Administration",
      icon: "terminal",
      skills: [
        { name: "RHEL / Rocky / CentOS", level: "Expert" },
        { name: "Ubuntu / Debian Server", level: "Expert" },
        { name: "Kernel Tuning & sysctl", level: "Advanced" },
        { name: "systemd & Process Mgmt", level: "Expert" },
        { name: "LVM, ZFS & RAID Storage", level: "Advanced" },
        { name: "Package Management (yum/apt/dnf)", level: "Expert" }
      ]
    },
    {
      name: "Networking & Security",
      icon: "shield",
      skills: [
        { name: "iptables / nftables / UFW", level: "Advanced" },
        { name: "SELinux & AppArmor", level: "Advanced" },
        { name: "SSH Hardening & Fail2ban", level: "Expert" },
        { name: "Nginx / Apache Reverse Proxy", level: "Expert" },
        { name: "DNS (BIND9, Route53)", level: "Advanced" },
        { name: "SSL/TLS & PKI Management", level: "Expert" },
        { name: "VPN (WireGuard, OpenVPN)", level: "Advanced" }
      ]
    },
    {
      name: "DevOps & Automation",
      icon: "cpu",
      skills: [
        { name: "Bash & POSIX Shell Scripting", level: "Expert" },
        { name: "Ansible Playbooks & Roles", level: "Advanced" },
        { name: "Docker & Containerd", level: "Advanced" },
        { name: "Kubernetes / K3s", level: "Intermediate" },
        { name: "Git & CI/CD Pipelines", level: "Advanced" },
        { name: "Terraform (IaC)", level: "Intermediate" }
      ]
    },
    {
      name: "Monitoring & Observability",
      icon: "bar-chart-2",
      skills: [
        { name: "Prometheus & Grafana", level: "Advanced" },
        { name: "ELK Stack / Loki Log Parsing", level: "Advanced" },
        { name: "Nagios / Zabbix", level: "Advanced" },
        { name: "Cron, logrotate & Backup Automation", level: "Expert" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Automated Multi-Node Linux Cluster Hardening",
      category: "automation",
      tag: "Security & Ansible",
      summary: "Created idempotent Ansible roles implementing CIS Benchmark Level 2 hardening across 50+ Ubuntu and RHEL nodes with automated audit reporting.",
      features: [
        "Automated SSH certificate authentication and root lockout",
        "SELinux/AppArmor automated profile enforcement",
        "Kernel parameter hardening for network flood mitigation",
        "Automated daily vulnerability scanning and Slack alerting"
      ],
      techStack: ["Ansible", "RHEL 9", "Ubuntu 22.04", "Bash", "CIS Benchmark"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-2",
      title: "High-Availability Load-Balanced Web Infrastructure",
      category: "networking",
      tag: "High Availability",
      summary: "Designed and deployed a fault-tolerant infrastructure with Keepalived, Nginx reverse proxy cluster, and automated SSL certificate rotation.",
      features: [
        "VRRP Virtual IP failover with zero downtime",
        "Dynamic rate limiting and geo-blocking with Nginx",
        "Automated ACME / Let's Encrypt renewal pipeline",
        "Real-time health check probes and self-healing daemon"
      ],
      techStack: ["Keepalived", "Nginx", "HAProxy", "Let's Encrypt", "Systemd"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-3",
      title: "Enterprise Observability & Real-Time Alerting Stack",
      category: "monitoring",
      tag: "Monitoring & Logs",
      summary: "Constructed complete telemetry and centralized logging for a distributed server fleet using Prometheus, Node Exporter, Grafana, and Alertmanager.",
      features: [
        "Custom Node Exporter metrics for specific background services",
        "Multi-tier Grafana dashboards with executive and on-call views",
        "Alertmanager rules for disk saturation, CPU throttling, and latency spikes",
        "Logstash parsing pipelines for centralized security log analysis"
      ],
      techStack: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter", "Loki"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-4",
      title: "Zero-Downtime Backup & Disaster Recovery Pipeline",
      category: "automation",
      tag: "Backup & Recovery",
      summary: "Built automated snapshot, incremental backup, and verification system with Restic, Borg, and encrypted cloud offloading with automated test restores.",
      features: [
        "Deduplicated and end-to-end encrypted storage archives",
        "Weekly automated dry-run sandbox restore verification",
        "Discord/Email status webhooks upon backup completion or anomaly",
        "Zero-impact LVM snapshotting for live database consistency"
      ],
      techStack: ["BorgBackup", "Restic", "LVM Snapshots", "Bash", "AWS S3"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-5",
      title: "Containerized Microservices on Lightweight Kubernetes (K3s)",
      category: "devops",
      tag: "Containers & K8s",
      summary: "Configured lightweight production-ready K3s cluster on bare-metal Linux nodes with MetalLB, Traefik ingress, and persistent NFS volume provisioners.",
      features: [
        "Bare-metal load balancing via MetalLB in Layer 2 mode",
        "Automated secret management with HashiCorp Vault integration",
        "Continuous deployment via GitHub Actions & webhook triggers",
        "Resource quotas and network policies restricting namespace traffic"
      ],
      techStack: ["K3s", "Docker", "MetalLB", "Traefik", "Helm", "GitOps"],
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "proj-6",
      title: "Linux Server Performance Profiling & Tuning Toolkit",
      category: "linux",
      tag: "Performance Tuning",
      summary: "Engineered an open-source suite of diagnosis scripts utilizing eBPF, perf, and sysstat to isolate CPU lockups, I/O bottlenecks, and network buffer bloat.",
      features: [
        "One-click diagnosis collecting flame graphs and I/O traces",
        "Automated recommendation engine for sysctl / hugepages tuning",
        "Memory leak detector with process cgroup monitoring",
        "HTML diagnostic report generation with charts"
      ],
      techStack: ["eBPF / BCC", "perf", "sysstat", "Bash", "Python"],
      githubUrl: "https://github.com",
      demoUrl: ""
    }
  ],

  certifications: [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "Active / Verified",
      badge: "RHCSA",
      description: "Core system administration skills across Red Hat Enterprise Linux environments."
    },
    {
      title: "Linux Foundation Certified System Administrator (LFCS)",
      issuer: "Linux Foundation",
      date: "Active / Verified",
      badge: "LFCS",
      description: "Comprehensive administration, storage management, and networking on live Linux systems."
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "In Progress / Active",
      badge: "CKA",
      description: "Cluster configuration, networking, storage, security, and troubleshooting."
    },
    {
      title: "AWS Certified Solutions Architect / SysOps",
      issuer: "Amazon Web Services",
      date: "Active",
      badge: "AWS",
      description: "Cloud infrastructure deployment, VPC networking, and high availability systems."
    }
  ],

  experience: [
    {
      role: "Linux System Administrator",
      company: "Enterprise Cloud Solutions",
      period: "2023 - Present",
      location: "Remote / Hybrid",
      highlights: [
        "Administer 200+ physical and virtual Linux servers running RHEL and Ubuntu.",
        "Automated patching and provisioning with Ansible, cutting maintenance windows by 60%.",
        "Maintained 99.99% infrastructure uptime with 24/7 on-call incident response and root-cause analysis.",
        "Hardened edge servers with fail2ban, nftables, and automated SSL management."
      ]
    },
    {
      role: "Junior Systems & Network Administrator",
      company: "TechNet Infrastructure",
      period: "2021 - 2023",
      location: "On-site",
      highlights: [
        "Configured and maintained DNS, DHCP, NFS, and Samba file storage across heterogeneous client networks.",
        "Implemented automated daily backup routines with BorgBackup and verified test restores quarterly.",
        "Built custom Bash monitoring scripts sending metrics into Prometheus & Grafana.",
        "Provided L2/L3 Linux technical support and hardware diagnostics for server racks."
      ]
    },
    {
      role: "IT Support Specialist & Linux Lab Admin",
      company: "University Computing Center",
      period: "2019 - 2021",
      location: "On-site",
      highlights: [
        "Managed 80+ dual-boot Linux workstations and configured LDAP network user authentication.",
        "Created custom PXE network boot images for fast operating system rollouts.",
        "Troubleshot network connectivity, SSH access, and user permission hierarchies."
      ]
    }
  ]
};
