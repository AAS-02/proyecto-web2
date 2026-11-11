const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('#menu');
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));

    document.querySelector('#year').textContent = new Date().getFullYear();
    document.querySelector('#contact-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const status = document.querySelector('#form-status');
      if (!form.checkValidity()) {
        status.textContent = 'Completa todos los campos con información válida.';
        form.reportValidity();
        return;
      }
      status.textContent = 'Gracias. Tu mensaje ha sido recibido.';
      form.reset();
    });
