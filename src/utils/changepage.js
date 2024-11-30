export async function changePage(PageComponent, data = {}) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear existing content
  
  try {
    const pageContent = await PageComponent(data);
    
    if (typeof pageContent === 'string' || typeof pageContent === 'number') {
      app.textContent = pageContent.toString();
    } else if (pageContent instanceof HTMLElement) {
      app.appendChild(pageContent);
    } else {
      console.warn('Unsupported type returned from PageComponent:', typeof pageContent);
    }
  } catch (error) {
    console.error('Error rendering page:', error);
    app.textContent = 'An error occurred while loading the page.';
  }
}