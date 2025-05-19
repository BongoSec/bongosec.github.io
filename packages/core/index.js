// Core utilities for bongosec.github.io
const utils = {
  // Version information
  version: '1.0.0',
  
  // Utility functions
  formatDate: (date) => {
    return new Date(date).toLocaleDateString();
  },
  
  slugify: (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  },
  
  // Configuration helpers
  config: {
    siteName: 'Bongosec',
    baseUrl: 'https://bongosec.github.io'
  }
};

module.exports = utils; 