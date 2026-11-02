/* Quigley Coffee Company: shared script */
(function () {
  document.documentElement.classList.remove("no-js");

  // Shop hours, 24h clock, Eastern time. Index 0 = Sunday.
  var HOURS = [[7, 17], [7, 17], [7, 17], [7, 17], [7, 17], [7, 17], [7, 17]];

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Current time in Sanford
  function sanfordNow() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return { day: days.indexOf(map.weekday), hour: parseInt(map.hour, 10) % 24, minute: parseInt(map.minute, 10) };
  }
  function fmt(h) { var s = h >= 12 ? "PM" : "AM"; var x = h % 12 || 12; return x + " " + s; }

  var now = sanfordNow();
  var t = now.hour + now.minute / 60;
  var today = HOURS[now.day];
  var isOpen = today && t >= today[0] && t < today[1];

  document.querySelectorAll("[data-open-badge]").forEach(function (el) {
    var label = el.querySelector("[data-open-label]");
    el.classList.add(isOpen ? "is-open" : "is-closed");
    if (!label) return;
    if (isOpen) {
      label.textContent = "Open now until " + fmt(today[1]);
    } else if (today && t < today[0]) {
      label.textContent = "Closed. Opens today at " + fmt(today[0]);
    } else {
      var next = HOURS[(now.day + 1) % 7];
      label.textContent = "Closed. Opens tomorrow at " + fmt(next[0]);
    }
  });
  document.querySelectorAll("[data-day]").forEach(function (li) {
    if (parseInt(li.getAttribute("data-day"), 10) === now.day) li.classList.add("is-today");
  });

  // Quote form prefill from ?service=
  var params = new URLSearchParams(window.location.search);
  var service = params.get("service");
  var select = document.getElementById("service");
  if (service && select) {
    Array.prototype.forEach.call(select.options, function (o) {
      if (o.value === service) select.value = service;
    });
  }

  // Form confirmation (the live form posts to a form handler)
  var form = document.querySelector("[data-quote-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) return;
      e.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.classList.add("is-visible");
        status.focus();
      }
      form.reset();
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
