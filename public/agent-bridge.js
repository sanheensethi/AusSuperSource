// Agent Bridge Contract - Australian Super Source
// Provides programmatic interface for agent-driven interactions

(function() {
  'use strict';

  window.__APP_BRIDGE__ = {
    version: "1.0.0",

    // Discovery endpoints
    getWellKnown: () => fetch("/.well-known/agent.json").then(r => r.json()),
    getIndex: () => fetch("/agent-assets/index.json").then(r => r.json()),
    getPack: (url) => fetch(url).then(r => r.json()),
    getPageManifest: (routeId) => fetch(`/agent-assets/manifests/${routeId}.json`).then(r => r.json()),

    // Navigation
    navTo: async (routeId) => {
      const index = await window.__APP_BRIDGE__.getIndex();
      const route = index.routes.find(r => r.routeId === routeId);
      if (route) {
        window.location.href = route.path;
        return { ok: true, routeId };
      }
      return { ok: false, code: "NOT_FOUND", error: `Route ${routeId} not found` };
    },

    currentRoute: () => {
      const el = document.querySelector("[data-route]");
      return el ? el.getAttribute("data-route") : null;
    },

    // Read KPI values
    readKPI: (routeId, kpiId) => {
      // Convert snake_case to kebab-case for DOM selector
      const kebabId = kpiId.replace(/_/g, '-');
      const sel = `[data-kpi='${kebabId}']`;
      const el = document.querySelector(sel);
      if (!el) return null;
      
      const text = (el.textContent || "").trim();
      // Try to parse as number if it looks like one
      const num = parseFloat(text.replace(/[^0-9.]/g, ''));
      return isNaN(num) ? text : num;
    },

    // Dispatch actions
    dispatch: async (action) => {
      console.log('[Agent Bridge] Dispatching action:', action);
      
      // Handle form submissions
      if (action.type === 'SubmitContactForm') {
        const form = document.querySelector('form');
        if (form) {
          // Simulate form submission
          const submitBtn = form.querySelector('[data-action="contact.submit"]');
          if (submitBtn) {
            submitBtn.click();
            return { ok: true, action: action.type };
          }
        }
        return { ok: false, code: "NOT_FOUND", error: "Contact form not found" };
      }
      
      if (action.type === 'LoginUser') {
        const form = document.querySelector('form');
        if (form) {
          const submitBtn = form.querySelector('[data-action="login.submit"]');
          if (submitBtn) {
            submitBtn.click();
            return { ok: true, action: action.type };
          }
        }
        return { ok: false, code: "NOT_FOUND", error: "Login form not found" };
      }
      
      return { ok: false, code: "UNKNOWN", error: "Action not implemented" };
    },

    // Wait for conditions
    waitFor: async (cond, opts = {}) => {
      const timeout = opts.timeoutMs || 8000;
      const poll = opts.pollMs || 120;
      const start = Date.now();
      
      while (Date.now() - start < timeout) {
        if (cond?.type === "dom") {
          if (document.querySelector(cond.selector)) {
            return { ok: true };
          }
        }
        
        if (cond?.type === "domAttr") {
          const el = document.querySelector(cond.selector);
          if (el && el.getAttribute(cond.name) === String(cond.equals)) {
            return { ok: true };
          }
        }
        
        await new Promise(r => setTimeout(r, poll));
      }
      
      return { ok: false, code: "TIMEOUT", error: "Condition not met" };
    },

    // Compact page snapshot
    snapshot: () => {
      const headings = [...document.querySelectorAll("h1,h2")].map(h => ({
        level: Number(h.tagName[1]),
        text: h.innerText?.trim()
      }));
      
      const kpis = [...document.querySelectorAll("[data-kpi]")].map(k => ({
        id: k.getAttribute("data-kpi"),
        value: k.innerText?.trim()
      }));
      
      const actions = [...document.querySelectorAll("[data-action]")].map(a => ({
        id: a.getAttribute("data-action"),
        text: a.innerText?.trim()
      }));
      
      const forms = [...document.querySelectorAll("[data-field]")].map(f => ({
        id: f.getAttribute("data-field"),
        type: f.getAttribute("type") || f.tagName.toLowerCase()
      }));
      
      const lists = [...document.querySelectorAll("[data-list]")].map(l => ({
        id: l.getAttribute("data-list"),
        itemCount: l.querySelectorAll("[data-entity-type]").length
      }));
      
      return {
        url: location.href,
        title: document.title,
        route: window.__APP_BRIDGE__.currentRoute(),
        headings,
        kpis,
        actions,
        forms,
        lists
      };
    }
  };
  
  console.log('[Agent Bridge] Initialized v' + window.__APP_BRIDGE__.version);
})();
