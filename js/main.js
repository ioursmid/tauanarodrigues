// Validação do formulário e integração com WhatsApp
document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const cidade = document.getElementById('cidade').value;
    const objetivo = document.getElementById('objetivo').value;
    
    // Número do WhatsApp da nutricionista
    const numeroWhatsApp = '5517991020604';
    
    // Mensagem formatada incluindo a cidade
    const mensagem = `Olá! Me chamo ${nome} e gostaria de agendar uma consulta.
Cidade: ${cidade}
Objetivo: ${objetivo}`;
    
    // Link do WhatsApp
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(linkWhatsApp, '_blank');
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de elementos ao scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// Máscara para o campo de WhatsApp
const whatsappInput = document.getElementById('whatsapp');

whatsappInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 7) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    e.target.value = value;
}); 