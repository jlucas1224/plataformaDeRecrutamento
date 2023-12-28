const jobs = [
    { title: 'Desenvolvedor Web', description: 'Descrição da vaga para desenvolvedor web.' },
    { title: 'Designer Gráfico', description: 'Descrição da vaga para designer gráfico.' },
];

let currentJobIndex = 0;

// Função para exibir a próxima vaga
function showNextJob() {
    const jobCard = document.getElementById('jobCard');
    const noJobsMessage = document.getElementById('noJobsMessage');

    if (currentJobIndex < jobs.length) {
        const currentJob = jobs[currentJobIndex];
        jobCard.querySelector('.job-title').textContent = currentJob.title;
        jobCard.querySelector('.job-description').textContent = currentJob.description;
        jobCard.style.display = 'block';
        noJobsMessage.style.display = 'none';
    } else {
        jobCard.style.display = 'none';
        noJobsMessage.style.display = 'block';
    }
}

// Função chamada quando o usuário clica em "Like"
function handleLike() {
    currentJobIndex++;
    showNextJob();
}

// Função chamada quando o usuário clica em "Dislike"
function handleDislike() {
    currentJobIndex++;
    showNextJob();
}

// Inicialize a página exibindo a primeira vaga
document.addEventListener('DOMContentLoaded', showNextJob);
