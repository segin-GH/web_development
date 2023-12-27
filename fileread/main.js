document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) {
      return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
      const contents = e.target.result;
      document.getElementById('content').textContent = contents;
  };
  reader.readAsText(file); // read as text
});
