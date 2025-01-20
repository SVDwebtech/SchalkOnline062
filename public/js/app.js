document.addEventListener("DOMContentLoaded", () => {
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 30); // Estimated 30 days from today
    
      const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      };
    
      document.getElementById('launch-date').textContent = formatDate(launchDate);
    });