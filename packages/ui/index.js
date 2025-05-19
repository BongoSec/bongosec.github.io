// UI components for bongosec.github.io
const components = {
  // Button component
  Button: (props) => {
    const { text, onClick, variant = 'primary' } = props;
    return {
      render: () => `<button class="bongosec-btn bongosec-btn-${variant}" onclick="${onClick}">${text}</button>`
    };
  },

  // Card component
  Card: (props) => {
    const { title, content, image } = props;
    return {
      render: () => `
        <div class="bongosec-card">
          ${image ? `<img src="${image}" alt="${title}" class="bongosec-card-img">` : ''}
          <div class="bongosec-card-body">
            <h3 class="bongosec-card-title">${title}</h3>
            <div class="bongosec-card-content">${content}</div>
          </div>
        </div>
      `
    };
  },

  // Navigation component
  Nav: (props) => {
    const { items } = props;
    return {
      render: () => `
        <nav class="bongosec-nav">
          <ul>
            ${items.map(item => `
              <li><a href="${item.url}">${item.text}</a></li>
            `).join('')}
          </ul>
        </nav>
      `
    };
  }
};

module.exports = components; 