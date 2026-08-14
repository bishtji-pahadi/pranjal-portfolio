# Linux System Administrator & DevOps Portfolio

A high-performance, dark-themed, interactive portfolio website tailored specifically for Linux System Administrators, SREs, and DevOps Engineers.

---

## 🚀 Key Features

- **Interactive Linux Terminal Simulator**: Run commands like `help`, `whoami`, `uptime`, `uname -a`, `skills`, `projects`, `status`, `certs`, `neofetch`, or click quick shortcut chips.
- **Telemetry & Live Status Badges**: High-availability metrics and live server status counters.
- **Skills Matrix**: Categorized competencies across OS & Kernel, Networking & Security, Automation & DevOps, and Observability.
- **Filterable Projects Grid**: Category filters for Automation, Networking, Monitoring, DevOps, and Linux performance tuning.
- **Verified Certifications Section**: Highlighting RHCSA, LFCS, CKA, AWS, and more.
- **Career Journey Timeline**: Clean chronological experience timeline.
- **Dark / Light Mode Toggle**: Smooth theme transition with local storage persistence.
- **Zero-Dependency Architecture**: Built with modern semantic HTML5, Vanilla CSS, and JavaScript. Zero build steps, instant load time, 100% SEO & mobile responsive.

---

## 🛠️ How to Customize with Your Own Details

All portfolio content is structured cleanly in one configuration file:
👉 **[`js/data.js`](js/data.js)**

Simply open `js/data.js` in any editor and replace:
1. `personal`: Your name, role, email, LinkedIn, and GitHub links.
2. `metrics`: Your custom stats (servers managed, uptime, deployments, etc.).
3. `skillCategories`: Your specific technologies and proficiency levels.
4. `projects`: Your real GitHub project repositories, descriptions, and feature lists.
5. `certifications`: Your actual certifications and issuers.
6. `experience`: Your employment history, roles, and accomplishments.

---

## 🌐 How to Deploy (Choose Any Option)

### Option 1: Deploy to GitHub Pages (Recommended & Free)
*Git is already installed on your system!*

1. Open PowerShell or Command Prompt in this directory (`C:\Users\hp\.gemini\antigravity\scratch\portfolio`).
2. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
3. Create a new repository on [GitHub](https://github.com/new) named `yourusername.github.io` (or any repository name like `sysadmin-portfolio`).
4. Link and push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
5. On GitHub, go to **Settings** > **Pages** > Select `main` branch under **Build and deployment** > Click **Save**.
6. Your portfolio is now live at `https://YOUR_USERNAME.github.io`!

---

### Option 2: Deploy to Netlify Drop (Instant 10-second Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `portfolio` folder directly into the browser window.
3. Your site is instantly live with a free HTTPS URL (e.g., `your-name.netlify.app`), and you can connect a custom domain anytime.

---

### Option 3: Deploy to Vercel
1. Go to [Vercel](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Import your GitHub repository, and click **Deploy**.
4. Vercel automatically deploys your static site with global CDN caching.

---

## 💻 Local Preview
To preview your portfolio locally, simply double-click [`index.html`](index.html) to open it in your default web browser!
