// Lógica para adicionar campos dinâmicos - Experiências
function addExperience() {
    const experiencesContainer = document.getElementById("experiencesContainer");
    const experienceContainer = createDynamicContainer();
  
    // Campos específicos de Experiências
    const titleInput = createInput('text', 'Título da Vaga');
    const companyInput = createInput('text', 'Nome da Empresa');
    const startDateInput = createInput('date', 'Data de Início');
    const endDateInput = createInput('date', 'Data de Término');
    const jobTypeInput = createInput('text', 'Tipo de Emprego');
    const locationInput = createInput('text', 'Localidade da Vaga');
    const employmentTypeInput = createInput('text', 'Tipo de Vaga');
    const stillWorkingCheckbox = createCheckbox('Ainda trabalhando');
    const sectorInput = createInput('text', 'Setor da Empresa');
    const descriptionInput = createTextarea('Descrição das Funções');
    const skillsInput = createInput('text', 'Competências Utilizadas');
  
    // Adicionar os campos ao contêiner de experiência
    experienceContainer.appendChild(titleInput);
    experienceContainer.appendChild(companyInput);
    experienceContainer.appendChild(startDateInput);
    experienceContainer.appendChild(endDateInput);
    experienceContainer.appendChild(jobTypeInput);
    experienceContainer.appendChild(locationInput);
    experienceContainer.appendChild(employmentTypeInput);
    experienceContainer.appendChild(stillWorkingCheckbox);
    experienceContainer.appendChild(sectorInput);
    experienceContainer.appendChild(descriptionInput);
    experienceContainer.appendChild(skillsInput);
  
    experiencesContainer.appendChild(experienceContainer);
  }
  
  // Função auxiliar para criar campo de checkbox
  function createCheckbox(label) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const labelElement = document.createElement("label");
    labelElement.innerText = label;
    labelElement.appendChild(checkbox);
    return labelElement;
  }
  
  // Função auxiliar para criar campo de área de texto (textarea)
  function createTextarea(placeholder) {
    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    return textarea;
  }

// Lógica para adicionar campos dinâmicos - Estudos
function addStudy() {
    const studiesContainer = document.getElementById("studiesContainer");
    const studyContainer = createDynamicContainer();

    // Campos específicos de Estudos
    const courseNameInput = createInput('text', 'Nome do Curso');
    const startDateInput = createInput('date', 'Data de Início');
    const endDateInput = createInput('date', 'Data de Término');
    const degreeInput = createInput('text', 'Grau');
    const institutionInput = createInput('text', 'Nome da Instituição');
    const studyModeSelect = createSelect('studyMode', ['EAD', 'Híbrido', 'Presencial']);

    studyContainer.appendChild(courseNameInput);
    studyContainer.appendChild(startDateInput);
    studyContainer.appendChild(endDateInput);
    studyContainer.appendChild(degreeInput);
    studyContainer.appendChild(institutionInput);
    studyContainer.appendChild(studyModeSelect);

    studiesContainer.appendChild(studyContainer);
}

// Função auxiliar para criar campo de seleção (select)
function createSelect(name, options) {
    const select = document.createElement("select");
    select.name = name;

    options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText.toLowerCase();
        option.text = optionText;
        select.appendChild(option);
    });

    return select;
}

// Lógica para adicionar campos dinâmicos - Certificações
function addCertification() {
    const certificationsContainer = document.getElementById("certificationsContainer");
    const certificationContainer = createDynamicContainer();
  
    // Campos específicos de Certificações
    const certificationNameInput = createInput('text', 'Nome da Certificação');
    const institutionInput = createInput('text', 'Nome da Instituição');
    const certificationFileInput = createInput('file', 'Anexo do Certificado');
  
    // Adicionar os campos ao contêiner de certificação
    certificationContainer.appendChild(certificationNameInput);
    certificationContainer.appendChild(institutionInput);
    certificationContainer.appendChild(certificationFileInput);
  
    certificationsContainer.appendChild(certificationContainer);
  }

// Lógica para adicionar campos dinâmicos - Idiomas
function addLanguage() {
    const languagesContainer = document.getElementById("languagesContainer");
    const languageContainer = createDynamicContainer();
  
    // Campos específicos de Idiomas
    const languageNameInput = createInput('text', 'Nome do Idioma');
    const proficiencySelect = createSelect('proficiency', ['Iniciante', 'Intermediário', 'Avançado', 'Fluente']);
  
    // Adicionar os campos ao contêiner de idioma
    languageContainer.appendChild(languageNameInput);
    languageContainer.appendChild(proficiencySelect);
  
    languagesContainer.appendChild(languageContainer);
  }

// Lógica para adicionar campos dinâmicos - Projetos Voluntários
function addVolunteerProject() {
    const volunteerProjectsContainer = document.getElementById("volunteerProjectsContainer");
    const volunteerProjectContainer = createDynamicContainer();
  
    // Campos específicos de Projetos Voluntários
    const projectNameInput = createInput('text', 'Nome do Projeto');
    const organizationInput = createInput('text', 'Nome da Organização');
    const startDateInput = createInput('date', 'Data de Início');
    const endDateInput = createInput('date', 'Data de Término');
    const projectSkillsInput = createInput('text', 'Competências do Projeto');
    const projectSummaryInput = createTextarea('Resumo do Projeto');
  
    // Adicionar os campos ao contêiner de projeto voluntário
    volunteerProjectContainer.appendChild(projectNameInput);
    volunteerProjectContainer.appendChild(organizationInput);
    volunteerProjectContainer.appendChild(startDateInput);
    volunteerProjectContainer.appendChild(endDateInput);
    volunteerProjectContainer.appendChild(projectSkillsInput);
    volunteerProjectContainer.appendChild(projectSummaryInput);
  
    volunteerProjectsContainer.appendChild(volunteerProjectContainer);
  }

// Lógica para adicionar campos dinâmicos - Projetos para Compartilhar
function addSharedProject() {
    const sharedProjectsContainer = document.getElementById("sharedProjectsContainer");
    const sharedProjectContainer = createDynamicContainer();
  
    // Campos específicos de Projetos para Compartilhar
    const projectNameInput = createInput('text', 'Nome do Projeto');
    const startDateInput = createInput('date', 'Data de Início');
    const endDateInput = createInput('date', 'Data de Término');
    const projectSummaryInput = createTextarea('Resumo do Projeto');
    const projectLinkInput = createInput('text', 'Link do Projeto');
    const projectSkillsInput = createInput('text', 'Competências do Projeto');
  
    // Adicionar os campos ao contêiner de projeto compartilhado
    sharedProjectContainer.appendChild(projectNameInput);
    sharedProjectContainer.appendChild(startDateInput);
    sharedProjectContainer.appendChild(endDateInput);
    sharedProjectContainer.appendChild(projectSummaryInput);
    sharedProjectContainer.appendChild(projectLinkInput);
    sharedProjectContainer.appendChild(projectSkillsInput);
  
    sharedProjectsContainer.appendChild(sharedProjectContainer);
  }

// Função auxiliar para criar contêiner dinâmico
function createDynamicContainer() {
  const container = document.createElement("div");
  container.classList.add("dynamic-container");
  return container;
}

// Função auxiliar para criar campo de entrada
function createInput(type, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  return input;
}
function redirectToCandidateArea() {
    window.location.href = 'candidate.html';
}
