window.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleFileUpload);
  
    var updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', displayTotalAmount);
  });
  
  function handleFileUpload(event) {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
  
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (!file.type.startsWith('image/')) {
        continue;
      }
  
      var imageURL = URL.createObjectURL(file);
      var imageItem = document.createElement('div');
      imageItem.classList.add('imageItem');
      var imgElement = document.createElement('img');
      imgElement.src = imageURL;
      imageItem.appendChild(imgElement);
      imageContainer.appendChild(imageItem);
    }
  }
  
  function displayTotalAmount() {
    var totalAmountInput = document.getElementById('totalAmountInput');
    var totalAmountDisplay = document.getElementById('totalAmountDisplay');
    var totalAmount = parseFloat(totalAmountInput.value);
  
    if (isNaN(totalAmount) || totalAmount < 0) {
      totalAmountDisplay.textContent = 'Invalid amount';
      return;
    }
  
    totalAmountDisplay.textContent = 'Total Amount: $' + totalAmount.toFixed(2);
  }
  