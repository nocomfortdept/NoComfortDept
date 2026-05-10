/**
 * NoComfortDept — Conversion Engine
 *
 * Employee ownership map:
 *   [PROMOTIONS]     initCountdowns, initMarquee
 *   [CRO]            initStickyATC, initSizeSelector, initATCFeedback, initImageZoom
 *   [SOCIAL-PROOF]   initSocialProofNotifications, initViewsCounter
 *   [BRAND]          initScrollAnimations
 *   [TIKTOK]         persistUTM
 */

(function () {
  'use strict';

  // ─── [PROMOTIONS] Promotions & Urgency Manager ────────────────────────────
  // Owns: countdown timers, marquee duplication

  function initCountdowns() {
    document.querySelectorAll('[data-countdown]').forEach(function (el) {
      var target = el.dataset.countdown;
      var end;

      if (target === 'midnight') {
        end = getMidnight();
      } else if (target === 'hours') {
        var hours = parseInt(el.dataset.countdownHours || '8', 10);
        end = getSessionEnd('ncd_cd_' + el.id, hours * 3600);
      } else {
        end = new Date(target).getTime();
      }

      tickCountdown(el, end);
      var interval = setInterval(function () {
        if (!tickCountdown(el, end)) clearInterval(interval);
      }, 1000);
    });
  }

  function getMidnight() {
    var now = new Date();
    var midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime();
  }

  function getSessionEnd(key, durationSeconds) {
    var stored = sessionStorage.getItem(key);
    if (stored) return parseInt(stored, 10);
    var end = Date.now() + durationSeconds * 1000;
    sessionStorage.setItem(key, end);
    return end;
  }

  function tickCountdown(el, end) {
    var now = Date.now();
    var diff = Math.max(0, end - now);

    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    var hEl = el.querySelector('[data-cd-hours]');
    var mEl = el.querySelector('[data-cd-minutes]');
    var sEl = el.querySelector('[data-cd-seconds]');

    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);

    if (diff === 0) {
      el.dispatchEvent(new CustomEvent('countdown:end'));
      return false;
    }
    return true;
  }

  function initMarquee() {
    var track = document.querySelector('.announcement-track');
    if (!track) return;
    var clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.parentNode.appendChild(clone);
  }

  // ─── [CRO] CRO Specialist ────────────────────────────────────────────────
  // Owns: sticky ATC, size selector, ATC feedback gate, image zoom

  function initStickyATC() {
    var stickyEl = document.querySelector('.sticky-atc');
    var triggerEl = document.querySelector('[data-sticky-trigger]');
    if (!stickyEl || !triggerEl) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            stickyEl.classList.add('visible');
          } else {
            stickyEl.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(triggerEl);
  }

  function initSizeSelector() {
    document.querySelectorAll('.size-grid').forEach(function (grid) {
      grid.addEventListener('click', function (e) {
        var btn = e.target.closest('.size-btn');
        if (!btn || btn.classList.contains('sold-out')) return;

        grid.querySelectorAll('.size-btn').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        var size = btn.dataset.size;
        var hidden = document.querySelector('[name="id"]') ||
                     document.querySelector('[data-variant-input]');
        if (hidden && btn.dataset.variantId) {
          hidden.value = btn.dataset.variantId;
        }

        var sizeDisplay = document.querySelector('[data-selected-size]');
        if (sizeDisplay) sizeDisplay.textContent = size;

        updateStockMessage(btn);
        updateStickySize(size);
      });
    });
  }

  function updateStockMessage(btn) {
    var stockEl = document.querySelector('[data-stock-message]');
    if (!stockEl) return;
    var qty = parseInt(btn.dataset.inventory || '99', 10);

    if (qty <= 3) {
      stockEl.innerHTML = '<span class="stock-dot stock-dot--red"></span> Only ' + qty + ' left in your size';
      stockEl.className = 'stock-indicator text-red';
    } else if (qty <= 8) {
      stockEl.innerHTML = '<span class="stock-dot stock-dot--yellow"></span> Low stock — ' + qty + ' remaining';
      stockEl.className = 'stock-indicator';
    } else {
      stockEl.innerHTML = '<span class="stock-dot stock-dot--green"></span> In stock';
      stockEl.className = 'stock-indicator';
    }
  }

  function updateStickySize(size) {
    var el = document.querySelector('[data-sticky-size]');
    if (el) el.textContent = '/ ' + size;
  }

  function initATCFeedback() {
    document.querySelectorAll('[data-atc-btn]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var sizeBtn = document.querySelector('.size-btn.active');
        if (!sizeBtn) {
          e.preventDefault();
          shakeSizeGrid();
          return;
        }
        setATCLoading(btn, true);
      });
    });
  }

  function shakeSizeGrid() {
    var grid = document.querySelector('.size-grid');
    if (!grid) return;
    grid.classList.add('shake');
    setTimeout(function () { grid.classList.remove('shake'); }, 500);

    var hint = document.querySelector('[data-size-hint]');
    if (hint) {
      hint.style.color = 'var(--red-hot)';
      hint.textContent = 'Select your size first';
      setTimeout(function () {
        hint.style.color = '';
        hint.textContent = 'Select Size';
      }, 2000);
    }
  }

  function setATCLoading(btn, loading) {
    if (loading) {
      btn.dataset.originalText = btn.textContent;
      btn.textContent = 'Adding...';
      btn.disabled = true;
    } else {
      btn.textContent = btn.dataset.originalText || 'Add to Cart';
      btn.disabled = false;
    }
  }

  function initImageZoom() {
    document.querySelectorAll('[data-zoom-img]').forEach(function (img) {
      img.addEventListener('mouseenter', function () {
        img.style.transformOrigin = 'center';
      });
      img.addEventListener('mousemove', function (e) {
        var rect = img.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = x + '% ' + y + '%';
        img.style.transform = 'scale(1.6)';
      });
      img.addEventListener('mouseleave', function () {
        img.style.transform = '';
      });
    });
  }

  // ─── [SOCIAL-PROOF] Social Proof Manager ─────────────────────────────────
  // Owns: purchase notification toasts, live viewer counter

  var socialProofMessages = [
    { name: 'Marcus T.',  city: 'Atlanta', action: 'just copped',   product: 'Blackout Hoodie — XL'   },
    { name: 'DeShawn R.', city: 'Houston', action: 'just ordered',  product: 'Combat Tee — L'          },
    { name: 'Jordan K.',  city: 'Chicago', action: 'just copped',   product: 'Thermal Set — M'         },
    { name: 'Tyler W.',   city: 'NYC',     action: 'just grabbed',  product: 'Drop #4 Joggers — XL'   },
    { name: 'Malik S.',   city: 'LA',      action: 'just ordered',  product: 'NCD Heavyweight — XXL'   },
    { name: 'Chris B.',   city: 'Miami',   action: 'just copped',   product: 'Stealth Crewneck — L'   },
    { name: 'Darius L.',  city: 'Dallas',  action: 'just ordered',  product: 'Tactical Shorts — XL'   },
    { name: 'Andre M.',   city: 'Detroit', action: 'just grabbed',  product: 'Winter Drop — M'         },
  ];

  var notifQueue = [];
  var notifActive = false;

  function initSocialProofNotifications() {
    var container = document.getElementById('social-proof-notif');
    if (!container) return;

    shuffleArray(socialProofMessages);
    notifQueue = socialProofMessages.slice();

    setTimeout(function () {
      showNextNotif(container);
    }, 4000);
  }

  function showNextNotif(container) {
    if (notifActive || notifQueue.length === 0) return;
    notifActive = true;

    var msg = notifQueue.shift();
    var el = buildNotifEl(msg);
    container.appendChild(el);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add('visible');
      });
    });

    setTimeout(function () {
      el.classList.remove('visible');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
        notifActive = false;

        if (notifQueue.length === 0) {
          notifQueue = socialProofMessages.slice();
          shuffleArray(notifQueue);
        }

        setTimeout(function () {
          showNextNotif(container);
        }, randomBetween(8000, 18000));
      }, 500);
    }, 4500);
  }

  function buildNotifEl(msg) {
    var el = document.createElement('div');
    el.className = 'sp-notif';
    el.innerHTML =
      '<div class="sp-notif__icon">🛒</div>' +
      '<div class="sp-notif__body">' +
        '<div class="sp-notif__action">' + msg.name + ' from ' + msg.city + ' ' + msg.action + '</div>' +
        '<div class="sp-notif__product">' + msg.product + '</div>' +
        '<div class="sp-notif__time">' + randomBetween(2, 18) + ' minutes ago</div>' +
      '</div>';
    return el;
  }

  function initViewsCounter() {
    var el = document.querySelector('[data-live-views]');
    if (!el) return;

    var base = parseInt(el.dataset.liveViews || '47', 10);
    el.textContent = base;

    setInterval(function () {
      var delta = Math.random() > 0.5 ? 1 : -1;
      base = Math.max(20, Math.min(200, base + delta));
      el.textContent = base;
    }, randomBetween(4000, 12000));
  }

  // ─── [BRAND] Brand Architect ──────────────────────────────────────────────
  // Owns: scroll-triggered animations

  function initScrollAnimations() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-fade-up').forEach(function (el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  // ─── [TIKTOK] TikTok Creative Director ───────────────────────────────────
  // Owns: UTM source capture and sessionStorage attribution

  function persistUTM() {
    var params = new URLSearchParams(window.location.search);
    var utm_source = params.get('utm_source') || params.get('ref');
    if (!utm_source) return;
    sessionStorage.setItem('ncd_ref', utm_source);
    sessionStorage.setItem('ncd_utm', window.location.search);
  }

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  // ─── BOOT ─────────────────────────────────────────────────────────────────

  function boot() {
    persistUTM();          // [TIKTOK]
    initCountdowns();      // [PROMOTIONS]
    initMarquee();         // [PROMOTIONS]
    initStickyATC();       // [CRO]
    initSizeSelector();    // [CRO]
    initATCFeedback();     // [CRO]
    initImageZoom();       // [CRO]
    initSocialProofNotifications(); // [SOCIAL-PROOF]
    initViewsCounter();    // [SOCIAL-PROOF]
    initScrollAnimations(); // [BRAND]
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
