(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  fetch("https://cdn.jsdelivr.net/gh/leonmakise/leonmakise.github.io@google-scholar-stats/gs_data.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
      var publications = data && data.publications ? data.publications : {};
      document.querySelectorAll("[data-citation-id]").forEach(function (badge) {
        var id = badge.getAttribute("data-citation-id");
        var paper = publications[id];
        if (paper && paper.num_citations != null) {
          badge.textContent = "Cited by " + Number(paper.num_citations).toLocaleString();
        }
      });
    })
    .catch(function () {});

  var bar = document.getElementById("visitorBar");
  var countEl = document.getElementById("visitorCount");
  var locEl = document.getElementById("visitorLoc");
  var sepEl = document.getElementById("visitorSep");
  if (!bar) return;

  var counterUrl = "https://abacus.jasoncameron.dev/hit/leonmakise-homepage/site-visits";
  var geoUrl = "https://get.geojs.io/v1/ip/geo.json";
  var counterKey = "jm-visitor-number";
  var geoKey = "jm-visitor-geo";

  function reveal() {
    bar.hidden = false;
    if (sepEl && countEl.textContent && locEl.textContent) sepEl.hidden = false;
  }

  function formatNumber(value) {
    return Number(value).toLocaleString();
  }

  function flagFromCountryCode(code) {
    if (!code || code.length !== 2) return "";
    return code.toUpperCase().replace(/./g, function (char) {
      return String.fromCodePoint(127397 + char.charCodeAt(0));
    });
  }

  function showCount(number, returning) {
    countEl.textContent = returning
      ? "Welcome back, visitor #" + formatNumber(number)
      : "You are visitor #" + formatNumber(number);
    reveal();
  }

  var storedCount = null;
  try { storedCount = localStorage.getItem(counterKey); } catch (e) {}
  if (storedCount) {
    showCount(storedCount, true);
  } else {
    fetch(counterUrl)
      .then(function (response) { return response.json(); })
      .then(function (data) {
        var number = data && (data.value != null ? data.value : data.count);
        if (number != null) {
          try { localStorage.setItem(counterKey, number); } catch (e) {}
          showCount(number, false);
        }
      })
      .catch(function () {});
  }

  function showLocation(info) {
    var place = [info.city, info.country].filter(Boolean).join(", ");
    if (!place) return;
    var flag = flagFromCountryCode(info.cc);
    locEl.textContent = "Visiting from " + place + (flag ? " " + flag : "");
    reveal();
  }

  var storedGeo = null;
  try { storedGeo = JSON.parse(sessionStorage.getItem(geoKey) || "null"); } catch (e) {}
  if (storedGeo) {
    showLocation(storedGeo);
  } else {
    fetch(geoUrl)
      .then(function (response) { return response.json(); })
      .then(function (data) {
        var info = {
          city: data.city || "",
          country: data.country || "",
          cc: data.country_code || ""
        };
        try { sessionStorage.setItem(geoKey, JSON.stringify(info)); } catch (e) {}
        showLocation(info);
      })
      .catch(function () {});
  }
})();
