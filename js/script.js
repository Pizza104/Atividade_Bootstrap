(() => {
  "use strict";

  const year = document.querySelector("[data-ano-atual]");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#formulario-contato");
  if (!form) return;

  const feedback = document.querySelector("#retorno-formulario");
  const requestedTopic = new URLSearchParams(window.location.search).get("assunto");
  const topicSelect = form.querySelector("#assunto");
  if (requestedTopic && topicSelect && [...topicSelect.options].some((option) => option.value === requestedTopic)) {
    topicSelect.value = requestedTopic;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      if (feedback) feedback.classList.add("d-none");
      return;
    }
    if (feedback) {
      feedback.className = "alert alert-info mt-3 mb-0";
      feedback.textContent =
        "A validação deu certo. Este é um exemplo visual: nenhuma mensagem foi enviada ou armazenada, porque o projeto ainda não tem um servidor conectado.";
    }
  });
})();
