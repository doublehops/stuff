   // This is a snippet of code to go into index.html. The lines with `// Add this line` are the new lines to be added.
   
   window.onload = function() {
      // Begin Swagger UI call region
      var url = window.location.href          // Add this line
      var arr = url.split("/");               // Add this line
      var host = arr[0] + "//" + arr[2];      // Add this line
      const ui = SwaggerUIBundle({
        url: host +"/api/documentation",      // Add this line (replace)
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })
      // End Swagger UI call region

      window.ui = ui
    }
