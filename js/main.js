// ==========================================================================
// Portfolio Logic & Interactive Elements
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPortfolioData();
  initNavigation();
  initProjectsFilter();
  initTerminal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* --------------------------------------------------------------------------
   Render Structured Data
   -------------------------------------------------------------------------- */
function renderPortfolioData() {
  if (typeof portfolioData === 'undefined') return;

  // Personal Info
  const p = portfolioData.personal;
  setText('hero-name', p.name);
  setText('hero-title', p.title);
  setText('hero-tagline', p.tagline);
  setText('contact-email-text', p.email);
  setText('uptime-badge-val', p.uptime);
  setText('system-status-val', p.status);
  
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) emailLink.href = `mailto:${p.email}`;
  
  const githubLink = document.getElementById('github-link');
  if (githubLink) githubLink.href = p.github;
  
  const linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink) linkedinLink.href = p.linkedin;

  // Metrics Grid
  const metricsContainer = document.getElementById('telemetry-metrics');
  if (metricsContainer && portfolioData.metrics) {
    metricsContainer.innerHTML = portfolioData.metrics.map(m => `
      <div class="metric-card">
        <span class="metric-val">${m.value}</span>
        <span class="metric-label">${m.label}</span>
      </div>
    `).join('');
  }

  // Skills Categories
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && portfolioData.skillCategories) {
    skillsContainer.innerHTML = portfolioData.skillCategories.map(cat => `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          </div>
          <h3 class="skill-cat-title">${cat.name}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <span class="skill-name">${s.name}</span>
              <span class="skill-level-badge ${s.level}">${s.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Projects Grid
  renderProjects(portfolioData.projects);

  // Certifications Grid
  const certsContainer = document.getElementById('certifications-container');
  if (certsContainer && portfolioData.certifications) {
    certsContainer.innerHTML = portfolioData.certifications.map(c => `
      <div class="cert-card">
        <span class="cert-badge">${c.badge}</span>
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-issuer">${c.issuer} • <span class="text-muted">${c.date}</span></p>
        <p class="cert-desc">${c.description}</p>
      </div>
    `).join('');
  }

  // Experience Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer && portfolioData.experience) {
    timelineContainer.innerHTML = portfolioData.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <p class="timeline-company">${exp.company} &bull; ${exp.location}</p>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <ul class="timeline-highlights">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value;
}

function renderProjects(projectsList) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (!projectsList || projectsList.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align:center; grid-column: 1/-1;">No projects found in this category.</p>`;
    return;
  }

  container.innerHTML = projectsList.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-top">
        <span class="project-tag">${p.tag}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <ul class="project-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="project-tech-stack" style="margin-bottom: 1rem;">
          ${p.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View Repo
          </a>
          <span class="text-dim" style="font-family: var(--font-mono); font-size: 0.75rem;">Production Ready</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Projects Filter
   -------------------------------------------------------------------------- */
function initProjectsFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(portfolioData.projects);
      } else {
        const filtered = portfolioData.projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Navigation & Scroll
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Highlight
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
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

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Interactive Linux Terminal Simulator
   -------------------------------------------------------------------------- */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-history');
  const clearBtn = document.getElementById('terminal-clear-btn');
  const shortcutChips = document.querySelectorAll('.shortcut-chip');

  if (!terminalInput || !terminalOutput) return;

  const commands = {
    'help': () => `
Available Commands:
  <span class="t-output-highlight">whoami</span>        - Display SysAdmin profile & role
  <span class="t-output-highlight">uptime</span>        - Show current system uptime & load
  <span class="t-output-highlight">uname -a</span>      - Kernel & OS environment information
  <span class="t-output-highlight">skills</span>        - List core sysadmin competencies
  <span class="t-output-highlight">projects</span>      - View high-impact infrastructure projects
  <span class="t-output-highlight">certs</span>         - Display verified certifications
  <span class="t-output-highlight">status</span>        - Check infrastructure health status
  <span class="t-output-highlight">contact</span>       - Get direct email and social endpoints
  <span class="t-output-highlight">neofetch</span>      - Display system summary ASCII art
  <span class="t-output-highlight">clear</span>         - Clear the terminal console
`,
    'whoami': () => `
<span class="t-output-cyan">User:</span> ${portfolioData.personal.name}
<span class="t-output-cyan">Role:</span> ${portfolioData.personal.title}
<span class="t-output-cyan">Location:</span> ${portfolioData.personal.location}
<span class="t-output-cyan">Status:</span> ${portfolioData.personal.status}
`,
    'uptime': () => `
14:32:00 up 942 days, 18:45, 1 user, load average: 0.08, 0.04, 0.01
[OK] Infrastructure Uptime: <span class="t-output-highlight">99.99%</span>
`,
    'uname -a': () => `
Linux sysadmin-node1 6.6.14-enterprise-lts #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
`,
    'skills': () => `
<table class="t-table">
  <tr><th>Domain</th><th>Key Tools</th></tr>
  <tr><td>OS & Kernel</td><td>RHEL, Ubuntu, Debian, systemd, LVM, ZFS</td></tr>
  <tr><td>Security & Net</td><td>iptables, nftables, SELinux, Nginx, WireGuard</td></tr>
  <tr><td>Automation</td><td>Bash, Ansible, Docker, K3s/Kubernetes, GitOps</td></tr>
  <tr><td>Observability</td><td>Prometheus, Grafana, Alertmanager, ELK</td></tr>
</table>
`,
    'projects': () => `
Found ${portfolioData.projects.length} featured infrastructure repositories:
${portfolioData.projects.map((p, idx) => `[${idx + 1}] <span class="t-output-highlight">${p.title}</span> (${p.tag})`).join('<br>')}
`,
    'certs': () => `
Verified Credentials:
${portfolioData.certifications.map(c => `▸ <span class="t-output-cyan">${c.badge}</span>: ${c.title} (${c.issuer})`).join('<br>')}
`,
    'status': () => `
[System Diagnostics]
● nginx.service         - <span class="t-output-highlight">active (running)</span>
● keepalived.service    - <span class="t-output-highlight">active (master)</span>
● prometheus.service    - <span class="t-output-highlight">active (collecting)</span>
● fail2ban.service      - <span class="t-output-highlight">active (0 threats pending)</span>
Memory Usage: 3.2G / 32G (10%) | Root Disk: 24% used
`,
    'contact': () => `
Direct Email : <a href="mailto:${portfolioData.personal.email}" class="t-output-highlight">${portfolioData.personal.email}</a>
GitHub       : <a href="${portfolioData.personal.github}" target="_blank" class="t-output-cyan">${portfolioData.personal.github}</a>
LinkedIn     : <a href="${portfolioData.personal.linkedin}" target="_blank" class="t-output-cyan">${portfolioData.personal.linkedin}</a>
`,
    'neofetch': () => `
<span class="t-output-highlight">
       .---.       </span><span class="t-output-cyan">sysadmin@infrastructure</span>
<span class="t-output-highlight">      /     \\      </span>-----------------------
<span class="t-output-highlight">     | () () |     </span><span class="t-output-cyan">OS:</span> Linux Enterprise LTS
<span class="t-output-highlight">      \\  _  /      </span><span class="t-output-cyan">Host:</span> High-Availability Cluster
<span class="t-output-highlight">       /___\\       </span><span class="t-output-cyan">Uptime:</span> 99.99% Reliability
<span class="t-output-highlight">      /     \\      </span><span class="t-output-cyan">Shell:</span> bash 5.2 / zsh
<span class="t-output-highlight">     / |   | \\     </span><span class="t-output-cyan">Role:</span> Linux SysAdmin & DevOps
<span class="t-output-highlight">    /  |   |  \\    </span><span class="t-output-cyan">Status:</span> Ready for hire
`,
    'sudo rm -rf /': () => `
<span class="t-output-warning">sudo: permission denied: Nice try! 😉 SELinux and root guards are actively enforcing security.</span>
`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    
    // Create prompt history entry
    const entry = document.createElement('div');
    entry.className = 't-line';
    entry.innerHTML = `
      <div class="t-prompt">
        <span class="t-user">sysadmin</span><span class="t-symbol">@</span><span class="t-host">node01</span><span class="t-symbol">:</span><span class="t-path">~</span><span class="t-symbol">$</span>
        <span class="t-command">${escapeHtml(rawCmd)}</span>
      </div>
    `;

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const outputDiv = document.createElement('div');
    outputDiv.className = 't-output';

    if (commands[cmd]) {
      outputDiv.innerHTML = commands[cmd]();
    } else if (cmd === '') {
      outputDiv.innerHTML = '';
    } else {
      outputDiv.innerHTML = `<span class="t-output-warning">bash: command not found: ${escapeHtml(rawCmd)}. Type <span class="t-output-highlight">'help'</span> to see valid commands.</span>`;
    }

    entry.appendChild(outputDiv);
    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      executeCommand(val);
      terminalInput.value = '';
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = '';
    });
  }

  shortcutChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = '';
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* --------------------------------------------------------------------------
   Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    // Direct mailto fallback or Formspree integration
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    status.className = 'form-status success';
    status.textContent = 'Opening your email client to send message...';
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
  });
}
