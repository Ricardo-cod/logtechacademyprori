// Função para alternar entre o modo claro e escuro
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// Função para mostrar ou esconder as opções de cursos
function toggleCourses() {
    document.getElementById('course-options').classList.toggle('hidden');
}

// Função para fechar as opções de cursos
function closeCourses() {
    document.getElementById('course-options').classList.add('hidden');
}

// Função para abrir um modal com conteúdo
function openModal(url) {
    const modal = document.getElementById('modal');
    const responseDiv = document.getElementById('response');
    modal.style.display = 'flex';

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '100%';
    iframe.height = '400px';
    iframe.frameBorder = '0';

    responseDiv.innerHTML = '';
    responseDiv.appendChild(iframe);
}

// Função para abrir um curso específico
function openCourse(course) {
    const url = (course === 'excel') 
        ? 'https://guia-basico-excel-5974tmg.gamma.site/' 
        : 'https://tutorial-do-microsoft-wo-y7qgy7z.gamma.site/';

    openModal(url);
    closeCourses();
}

// Função para fechar o popup/modal
function closePopup() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.getElementById('response').innerHTML = '';
}

// Função para abrir o assistente
function openAssistant() {
    const width = 400;
    const height = 600;
    const left = window.innerWidth - width - 20;
    const top = (window.innerHeight / 2) - (height / 2);

    window.open('https://app.droxy.ai/guest-agent/6701a6481787e9770910e33d' , 'Assistente', `width=${width},height=${height},top=${top},left=${left},resizable=yes`)
    ;
}

// Função para mostrar o conteúdo da disciplina selecionada
function showContent(discipline) {
    const disciplines = ['matematica', 'geografia', 'ingles', 'informatica', 'portugues', 'historia', 'redacao', 'ciencias'];

    disciplines.forEach((item) => {
        const element = document.getElementById(item);
        if (!element) return;

        if (item !== discipline) {
            element.classList.add('shrink');
            setTimeout(() => {
                element.classList.add('hidden');
                element.classList.remove('shrink');
            }, 300);
        } else {
            element.classList.remove('hidden');
            element.classList.add('fade-in');
        }
    });
}

// Função para mostrar ou esconder o contêiner de tarefas
function toggleTasks() {
    document.getElementById('tasks-container').classList.toggle('hidden');
}

// Função de login
function login() {
    const studentInput = document.getElementById('student-input');
    const studentNameDisplay = document.getElementById('student-name');

    if (studentInput.value.trim()) {
        studentNameDisplay.textContent = `Bem-vindo, ${studentInput.value.trim()}!`;
        studentInput.value = '';
        document.getElementById('login-container').classList.add('hidden');
    } else {
        alert('Por favor, digite seu nome para fazer login.');
    }
}

// Função para alternar a aba do perfil
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('hidden');
}

// Função para editar o perfil
function editProfile() {
    alert('Função de editar perfil ainda não implementada.');
}

// Função para abrir o feed
function openFeed() {
    alert('Função de abrir feed ainda não implementada.');
}

// Função para abrir a câmera
function openCamera() {
    const videoElement = document.getElementById('video');
    const constraints = {
        video: { facingMode: 'user' } // Altere para 'environment' para usar a câmera traseira
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            videoElement.srcObject = stream;
            videoElement.play();
        })
        .catch(error => {
            console.error("Erro ao acessar a câmera: ", error);
            alert("Não foi possível acessar a câmera. Verifique as permissões.");
        });
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const coursesModal = document.getElementById('course-options');

    if (event.target === modal) {
        closePopup();
    }
    if (event.target === coursesModal) {
        closeCourses();
    }
};
