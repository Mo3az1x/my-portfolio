/**
 * Home page renderer. Content comes from js/content.js.
 */
(function () {
  const data = window.PORTFOLIO;
  const ui = window.PortfolioUI;
  if (!data || !ui) return;

  ui.renderHeader(data, "#home");
  ui.renderFooter(data);

  document.title = data.profile.fullName + " — Portfolio";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      data.profile.fullName +
        " — " +
        data.profile.role +
        ". IoT, embedded systems, networking, cloud, and software."
    );
  }

  const hero = document.querySelector("[data-hero]");
  if (hero) {
    hero.innerHTML = "";
    const copy = ui.el("div", { class: "hero-copy" });
    copy.appendChild(ui.el("p", { class: "eyebrow", text: "Portfolio / " + data.profile.location }));
    copy.appendChild(
      ui.el("h1", {}, [
        ui.el("span", { class: "hero-hello", text: "I’m " }),
        ui.el("span", { class: "hero-name", text: data.profile.firstName + " " + data.profile.lastName })
      ])
    );
    copy.appendChild(ui.el("p", { class: "hero-role", text: data.profile.role }));
    copy.appendChild(ui.el("p", { class: "hero-lead", text: data.profile.headline }));

    const typeWrap = ui.el("p", { class: "hero-type" });
    const typeTarget = ui.el("span", { id: "typing-text" });
    typeWrap.appendChild(typeTarget);
    typeWrap.appendChild(ui.el("span", { class: "typing-cursor", text: "_" }));
    copy.appendChild(typeWrap);

    const chips = ui.el("ul", { class: "interest-chips" });
    data.profile.interests.forEach(function (item) {
      chips.appendChild(ui.el("li", { text: item }));
    });
    copy.appendChild(chips);

    const ctas = ui.el("div", { class: "cta-row" });
    ctas.appendChild(ui.el("a", { class: "button primary", href: "#projects", text: "View projects" }));
    ctas.appendChild(
      ui.el("a", {
        class: "button",
        href: ui.withPrefix(data.profile.cv),
        target: "_blank",
        rel: "noopener",
        text: "Download CV"
      })
    );
    ctas.appendChild(ui.el("a", { class: "button ghost", href: "#contact", text: "Contact" }));
    copy.appendChild(ctas);

    const photo = ui.el("div", { class: "hero-photo" });
    photo.appendChild(ui.mediaFrame(data.profile.image, data.profile.fullName, "photo-ring"));

    const grid = ui.el("div", { class: "hero-grid" });
    grid.appendChild(copy);
    grid.appendChild(photo);
    hero.appendChild(grid);

    const lines = data.profile.typingLines || [];
    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    function tick() {
      if (!lines.length) return;
      const current = lines[lineIndex];
      if (!deleting) {
        typeTarget.textContent = current.slice(0, charIndex + 1);
        charIndex += 1;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
        setTimeout(tick, 42);
      } else {
        typeTarget.textContent = current.slice(0, charIndex - 1);
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
          setTimeout(tick, 280);
          return;
        }
        setTimeout(tick, 24);
      }
    }
    setTimeout(tick, 400);
  }

  const about = document.querySelector("[data-about]");
  if (about) {
    about.innerHTML = "";
    about.appendChild(ui.el("p", { class: "lede", text: data.about.summary }));
    about.appendChild(ui.el("p", { text: data.about.extra }));
    about.appendChild(ui.el("p", { class: "edu-line", text: data.profile.education }));
    if (data.activities && data.activities.length) {
      about.appendChild(ui.el("h3", { text: "Activities" }));
      const ul = ui.el("ul", { class: "plain-list" });
      data.activities.forEach(function (item) {
        ul.appendChild(ui.el("li", { text: item }));
      });
      about.appendChild(ul);
    }
  }

  const skills = document.querySelector("[data-skills]");
  if (skills) {
    skills.innerHTML = "";
    data.skills.forEach(function (group) {
      const card = ui.el("article", { class: "skill-card", "data-skill": group.id });
      card.appendChild(ui.el("h3", { text: group.title }));
      card.appendChild(ui.tags(group.items));
      skills.appendChild(card);
    });
  }

  const projects = document.querySelector("[data-projects]");
  if (projects) {
    projects.innerHTML = "";
    data.projects.forEach(function (project) {
      const card = ui.el("article", { class: "project-card" });
      const media = ui.mediaFrame(project.image, project.title, "project-cover", {
        imagePosition: project.imagePosition || "center"
      });
      media.addEventListener("click", function () {
        if (project.image) ui.openLightbox(project.image, project.title);
      });
      const body = ui.el("div", { class: "project-body" });
      if (project.period) body.appendChild(ui.el("p", { class: "period", text: project.period }));
      body.appendChild(ui.el("h3", { text: project.title }));
      body.appendChild(ui.el("p", { text: project.summary }));
      body.appendChild(ui.tags(project.tech));
      const links = ui.el("div", { class: "project-links" });
      links.appendChild(
        ui.el("a", { class: "button", href: ui.withPrefix(project.page), text: "Details" })
      );
      if (project.github) {
        links.appendChild(
          ui.el("a", {
            class: "button ghost",
            href: project.github,
            target: "_blank",
            rel: "noopener",
            text: "GitHub"
          })
        );
      }
      if (project.demo) {
        links.appendChild(
          ui.el("a", {
            class: "button ghost",
            href: project.demo,
            target: "_blank",
            rel: "noopener",
            text: "Demo"
          })
        );
      }
      body.appendChild(links);
      card.appendChild(media);
      card.appendChild(body);
      projects.appendChild(card);
    });
  }

  const experience = document.querySelector("[data-experience]");
  if (experience) {
    experience.innerHTML = "";
    data.experience.forEach(function (item) {
      const card = ui.el("article", { class: "timeline-card" });
      card.appendChild(ui.el("p", { class: "period", text: item.dates }));
      card.appendChild(ui.el("h3", { text: item.title }));
      card.appendChild(ui.el("p", { class: "org", text: item.org }));
      const ul = ui.el("ul", { class: "plain-list" });
      (item.points || []).forEach(function (point) {
        ul.appendChild(ui.el("li", { text: point }));
      });
      card.appendChild(ul);
      experience.appendChild(card);
    });
  }

  const certs = document.querySelector("[data-certificates]");
  if (certs) {
    certs.innerHTML = "";
    data.certificates.forEach(function (item) {
      const card = ui.el("article", { class: "cert-card" });
      // Restore when certificate images are added:
      // card.appendChild(ui.mediaFrame(item.image, item.title, "cert-thumb"));
      card.appendChild(ui.el("h3", { text: item.title }));
      card.appendChild(ui.el("p", { class: "org", text: item.issuer }));
      if (item.dates) card.appendChild(ui.el("p", { class: "period", text: item.dates }));
      certs.appendChild(card);
    });
  }

  const contact = document.querySelector("[data-contact]");
  if (contact) {
    contact.innerHTML = "";
    const list = ui.el("ul", { class: "contact-grid" });
    list.appendChild(
      ui.el("li", {}, [
        ui.icon("mail"),
        ui.el("div", {}, [
          ui.el("span", { class: "label", text: "Email" }),
          ui.el("a", { href: "mailto:" + data.contact.email, text: data.contact.email })
        ])
      ])
    );
    list.appendChild(
      ui.el("li", {}, [
        ui.el("span", { class: "icon phone-icon", text: "☎" }),
        ui.el("div", {}, [
          ui.el("span", { class: "label", text: "Phone" }),
          ui.el("a", { href: data.contact.phoneHref, text: data.contact.phone })
        ])
      ])
    );
    list.appendChild(
      ui.el("li", {}, [
        ui.icon("github"),
        ui.el("div", {}, [
          ui.el("span", { class: "label", text: "GitHub" }),
          ui.el("a", { href: data.contact.github, target: "_blank", rel: "noopener", text: data.contact.githubLabel })
        ])
      ])
    );
    list.appendChild(
      ui.el("li", {}, [
        ui.icon("linkedin"),
        ui.el("div", {}, [
          ui.el("span", { class: "label", text: "LinkedIn" }),
          ui.el("a", {
            href: data.contact.linkedin,
            target: "_blank",
            rel: "noopener",
            text: data.contact.linkedinLabel
          })
        ])
      ])
    );
    list.appendChild(
      ui.el("li", {}, [
        ui.icon("file"),
        ui.el("div", {}, [
          ui.el("span", { class: "label", text: "Resume" }),
          ui.el("a", {
            href: ui.withPrefix(data.profile.cv),
            target: "_blank",
            rel: "noopener",
            text: "Download CV (PDF)"
          })
        ])
      ])
    );
    contact.appendChild(list);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + id);
    });
  });
})();
