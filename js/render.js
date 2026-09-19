/**
 * Shared rendering helpers. You do not need to edit this file
 * to change your name, projects, or links — use js/content.js.
 */
(function (global) {
  function detectPrefix() {
    const attr = document.body && document.body.getAttribute("data-asset-prefix");
    if (attr) return attr;
    if (/\/projects\//.test(location.pathname)) return "../";
    return "";
  }

  const assetPrefix = detectPrefix();

  function withPrefix(path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
      return path;
    }
    return assetPrefix + path;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        const value = attrs[key];
        if (value == null || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "html") node.innerHTML = value;
        else if (key === "text") node.textContent = value;
        else if (key.indexOf("on") === 0 && typeof value === "function") {
          node.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
          node.setAttribute(key, value === true ? "" : String(value));
        }
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function bindImage(img, src, alt) {
    img.alt = alt || "";
    if (!src) {
      img.classList.add("is-missing");
      img.removeAttribute("src");
      return img;
    }
    img.addEventListener("error", function onErr() {
      img.removeEventListener("error", onErr);
      img.classList.add("is-missing");
      img.removeAttribute("src");
      if (img.parentElement) img.parentElement.classList.add("is-placeholder");
    });
    img.src = withPrefix(src);
    return img;
  }

  function mediaFrame(src, alt, extraClass, options) {
    const figure = el("div", { class: "media-frame" + (extraClass ? " " + extraClass : "") });
    const opts = options || {};
    if (opts.imagePosition) {
      figure.style.setProperty("--image-position", opts.imagePosition);
    }
    if (!src) {
      figure.classList.add("is-placeholder");
      return figure;
    }
    const img = el("img", { loading: "lazy" });
    bindImage(img, src, alt);
    figure.appendChild(img);
    return figure;
  }

  function tags(list) {
    const ul = el("ul", { class: "tags" });
    (list || []).forEach(function (item) {
      ul.appendChild(el("li", { text: item }));
    });
    return ul;
  }

  function icon(name) {
    const svgs = {
      github:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.65.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>',
      linkedin:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5zM5.24 3.5A1.96 1.96 0 1 0 5.25 7.4 1.96 1.96 0 0 0 5.24 3.5zM20.44 20h-3.37v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.45-2.15 2.96V20H9.69V8.5h3.23v1.57h.05c.45-.85 1.54-1.75 3.17-1.75 3.39 0 4.02 2.23 4.02 5.13V20z"/></svg>',
      mail:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>',
      file:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L19.5 9H15z"/></svg>'
    };
    const span = el("span", { class: "icon", html: svgs[name] || "" });
    return span;
  }

  function renderHeader(data, active) {
    const header = document.querySelector("[data-header]");
    if (!header) return;
    header.innerHTML = "";
    const inner = el("div", { class: "container header-inner" });
    inner.appendChild(
      el("a", { class: "brand", href: assetPrefix ? withPrefix("index.html") + "#home" : "#home" }, [
        el("span", { class: "brand-mark", text: "ME" }),
        el("span", { class: "brand-name", text: data.profile.fullName })
      ])
    );
    const toggle = el("button", {
      class: "nav-toggle",
      type: "button",
      "aria-expanded": "false",
      "aria-label": "Open menu"
    });
    toggle.innerHTML = "<span></span><span></span><span></span>";
    const nav = el("nav", { class: "nav", "aria-label": "Primary" });
    data.nav.forEach(function (item) {
      const href =
        item.href.charAt(0) === "#"
          ? assetPrefix
            ? withPrefix("index.html") + item.href
            : item.href
          : withPrefix(item.href);
      const link = el("a", { href: href, text: item.label });
      if (active && item.href.indexOf(active) !== -1) link.classList.add("is-active");
      nav.appendChild(link);
    });
    toggle.addEventListener("click", function () {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    inner.appendChild(toggle);
    inner.appendChild(nav);
    header.appendChild(inner);
  }

  function renderFooter(data) {
    const footer = document.querySelector("[data-footer]");
    if (!footer) return;
    footer.innerHTML = "";
    footer.appendChild(
      el("div", { class: "container footer-inner" }, [
        el("span", { text: "© " + new Date().getFullYear() + " " + data.profile.fullName }),
        el("span", { class: "footer-meta", text: "Communication & Electronics · CIC" })
      ])
    );
  }

  function projectById(id) {
    return (window.PORTFOLIO.projects || []).find(function (p) {
      return p.id === id;
    });
  }

  function openLightbox(src, caption) {
    const existing = document.querySelector(".lightbox");
    if (existing) existing.remove();
    const overlay = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true" });
    const img = el("img", { alt: caption || "" });
    bindImage(img, src, caption || "");
    overlay.appendChild(img);
    if (caption) overlay.appendChild(el("p", { text: caption }));
    overlay.addEventListener("click", function () {
      overlay.remove();
    });
    document.body.appendChild(overlay);
  }

  global.PortfolioUI = {
    el: el,
    withPrefix: withPrefix,
    bindImage: bindImage,
    mediaFrame: mediaFrame,
    tags: tags,
    icon: icon,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    projectById: projectById,
    openLightbox: openLightbox
  };
})(window);
