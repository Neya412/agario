// ==UserScript==
// @name         Custom Loader Script
// @description  Charge du contenu externe depuis une nouvelle URL
// @version      1.0
// @author       Ton Nom
// @match        *://deltav4.gitlab.io/iluv/
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      example.com  // Remplace par ton domaine
// ==/UserScript==

const CUSTOM_LOADER = new class {
  constructor() {
    this.method = 'GET';
    this.URL = "https://neya412.github.io/tampermonkey-hosting/index.html"; // Remplace par ta nouvelle URL
    this.date = Date.now();
    this.HTML = "";
  }

  load() {
    this.setMessage();
    this.fetch();
  }

  setMessage() {
    document.body.innerHTML = "Chargement du contenu...";
  }

  fetch() {
    GM_xmlhttpRequest({
      method: this.method,
      url: this.URL + "?date=" + this.date,
      onload: (response) => {
        this.HTML = response.responseText;
        this.write();
      },
      onerror: () => {
        document.body.innerHTML = "<div style='text-align: center; font-size: 24px;'>Échec du chargement.</div>";
      }
    });
  }

  write() {
    document.open();
    document.write(this.HTML);
    document.close();
  }
}
CUSTOM_LOADER.load();
