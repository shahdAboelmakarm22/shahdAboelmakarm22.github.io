import './style.css'

const GITHUB_USERNAME = 'shahdAboelmakarm22';

// Colors for languages
const colors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
  Jupyter: '#DA5B0B'
};

async function fetchProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await response.json();
    
    // Only update image since we hardcoded the resume text
    const imgContainer = document.querySelector('.profile-img-container');
    imgContainer.innerHTML = `<img src="${data.avatar_url}" alt="${data.name}" />`;
    
  } catch (error) {
    console.error('Error fetching profile:', error);
    document.querySelector('.profile-img-container').innerHTML = `<img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Placeholder" />`;
  }
}

async function fetchProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    const repos = await response.json();
    
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = ''; 
    
    // Filter out forks if desired, or show them
    const projects = repos.filter(repo => !repo.fork);
    
    projects.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';
      
      const langColor = colors[repo.language] || '#8b5cf6';
      
      card.innerHTML = `
        <div class="project-header">
          <a href="${repo.html_url}" target="_blank" class="project-title">${repo.name.replace(/-/g, ' ')}</a>
        </div>
        <p class="project-desc">${repo.description || 'No description provided.'}</p>
        <div class="project-footer">
          <div class="language">
            ${repo.language ? `<span class="lang-dot" style="background-color: ${langColor}"></span> ${repo.language}` : ''}
          </div>
          <div class="stars">
            ⭐ ${repo.stargazers_count}
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    });
    
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  fetchProfile();
  fetchProjects();
});
