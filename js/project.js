/**
 * Project detail renderer. Set data-project-id on <body>.
 */
(function () {
  const data = window.PORTFOLIO;
  const ui = window.PortfolioUI;
  if (!data || !ui) return;

  const id = document.body.dataset.projectId;
  const project = ui.projectById(id);
  ui.renderHeader(data, "#projects");
  ui.renderFooter(data);

  const root = document.querySelector("[data-project]");
  if (!root) return;

  if (!project) {
    root.appendChild(ui.el("p", { text: "Project not found. Check the id in js/content.js." }));
    return;
  }

  document.title = project.title + " — " + data.profile.fullName;

  const hero = ui.el("div", { class: "panel project-hero" });
  hero.appendChild(ui.el("p", { class: "period", text: project.period || "" }));
  hero.appendChild(ui.el("h1", { text: project.title }));
  hero.appendChild(ui.el("p", { class: "lede", text: project.summary }));
  hero.appendChild(ui.tags(project.tech));
  const links = ui.el("div", { class: "project-links" });
  links.appendChild(ui.el("a", { class: "button", href: ui.withPrefix("index.html") + "#projects", text: "All projects" }));
  if (project.github) {
    links.appendChild(
      ui.el("a", { class: "button ghost", href: project.github, target: "_blank", rel: "noopener", text: "GitHub" })
    );
  }
  if (project.demo) {
    links.appendChild(
      ui.el("a", { class: "button ghost", href: project.demo, target: "_blank", rel: "noopener", text: "Demo" })
    );
  }
  hero.appendChild(links);
  root.appendChild(hero);

  const cols = ui.el("div", { class: "two-col" });
  const left = ui.el("div", { class: "panel" });
  left.appendChild(ui.el("h2", { text: "Overview" }));
  (project.description || []).forEach(function (p) {
    left.appendChild(ui.el("p", { text: p }));
  });
  if (project.architecture) {
    left.appendChild(ui.el("h2", { text: "Architecture" }));
    left.appendChild(ui.el("pre", {}, [ui.el("code", { text: project.architecture })]));
  }
  if (project.highlights && project.highlights.length) {
    left.appendChild(ui.el("h2", { text: "Highlights" }));
    const ul = ui.el("ul", { class: "plain-list" });
    project.highlights.forEach(function (h) {
      ul.appendChild(ui.el("li", { text: h }));
    });
    left.appendChild(ul);
  }
  const right = ui.el("div", { class: "panel" });
  right.appendChild(ui.el("h2", { text: "Tech" }));
  right.appendChild(ui.tags(project.tech));
  right.appendChild(
    ui.mediaFrame(project.image, project.title, "project-cover", {
      imagePosition: project.imagePosition || "center"
    })
  );
  cols.appendChild(left);
  cols.appendChild(right);
  root.appendChild(cols);

  const gallery = project.gallery || [];
  const galleryPanel = ui.el("div", { class: "panel" });
  galleryPanel.appendChild(ui.el("h2", { text: "Gallery" }));
  if (!gallery.length) {
    galleryPanel.appendChild(
      ui.el("p", {
        class: "muted",
        text: "Add images in js/content.js under this project’s gallery array. Files go in assets/images/projects/" +
          project.id +
          "/"
      })
    );
    galleryPanel.appendChild(ui.mediaFrame("", project.title));
  } else {
    const grid = ui.el("div", { class: "gallery" });
    gallery.forEach(function (item) {
      const fig = ui.el("figure", { class: "gallery-item" });
      const frame = ui.mediaFrame(item.src, item.caption || project.title, null, {
        imagePosition: item.imagePosition || project.imagePosition || "center"
      });
      frame.addEventListener("click", function () {
        if (item.src) ui.openLightbox(item.src, item.caption);
      });
      fig.appendChild(frame);
      if (item.caption) fig.appendChild(ui.el("figcaption", { text: item.caption }));
      grid.appendChild(fig);
    });
    galleryPanel.appendChild(grid);
  }
  root.appendChild(galleryPanel);
})();
