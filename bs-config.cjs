module.exports = {
      proxy: "http://localhost:3000", // The URL of your Express app
      port: 4000, // The port BrowserSync will run on
      files: [
        "public/css/*.css", // Watch for changes in compiled CSS
        "views/**/*.ejs", // Watch for changes in EJS templates
        "public/js/**/*.js", // Watch for changes in client-side JavaScript
      ],
      open: true, // Prevent BrowserSync from automatically opening the browser
      notify: true, // Enable in-browser notifications for file changes
};
