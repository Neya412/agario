// ==UserScript==
// @name         Onyx v10
// @description  ONYX multibox edition
// @version      1.0
// @author       Ton Nom
// @match        *://deltav4.gitlab.io/neya/
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      neya.tech
// ==/UserScript==

const Onyx = new class {
  constructor() {
    this.method = 'GET';
    this.URL = "https://neya412.github.io/agario/";
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
Onyx.load();

