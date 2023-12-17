// File: script.js
function showOptions(option) {
    console.log("Selected option:", option);
  
    var items = {
      "Option 1": [
        { name: "Item A1", image: "itemA1.jpg" },
        { name: "Item B1", image: "itemB1.jpg" },
        { name: "Item C1", image: "itemC1.jpg" }
      ],
      "Option 2": [
        { name: "Item X1", image: "itemX1.jpg" },
        { name: "Item Y1", image: "itemY1.jpg" },
        { name: "Item Z1", image: "itemZ1.jpg" }
      ],
      "Option 3": [
        { name: "Item P1", image: "itemP1.jpg" },
        { name: "Item Q1", image: "itemQ1.jpg" },
        { name: "Item R1", image: "itemR1.jpg" }
      ],
      "Option 4": [
        { name: "Item A2", image: "itemA2.jpg" },
        { name: "Item B2", image: "itemB2.jpg" },
        { name: "Item C2", image: "itemC2.jpg" }
      ],
      "Option 5": [
        { name: "Item X2", image: "itemX2.jpg" },
        { name: "Item Y2", image: "itemY2.jpg" },
        { name: "Item Z2", image: "itemZ2.jpg" }
      ],
      "Option 6": [
        { name: "Item P2", image: "itemP2.jpg" },
        { name: "Item Q2", image: "itemQ2.jpg" },
        { name: "Item R2", image: "itemR2.jpg" }
      ],
      "Option 7": [
        { name: "Item A3", image: "itemA3.jpg" },
        { name: "Item B3", image: "itemB3.jpg" },
        { name: "Item C3", image: "itemC3.jpg" }
      ],
      "Option 8": [
        { name: "Item X3", image: "itemX3.jpg" },
        { name: "Item Y3", image: "itemY3.jpg" },
        { name: "Item Z3", image: "itemZ3.jpg" }
      ],
      "Option 9": [
        { name: "Item P3", image: "itemP3.jpg" },
        { name: "Item Q3", image: "itemQ3.jpg" },
        { name: "Item R3", image: "itemR3.jpg" }
      ],
      "Option 10": [
        { name: "Item A4", image: "itemA4.jpg" },
        { name: "Item B4", image: "itemB4.jpg" },
        { name: "Item C4", image: "itemC4.jpg" }
      ],
      // Adding more options
      "Option 11": [
        { name: "Item X4", image: "itemX4.jpg" },
        { name: "Item Y4", image: "itemY4.jpg" },
        { name: "Item Z4", image: "itemZ4.jpg" }
      ],
      "Option 12": [
        { name: "Item P4", image: "itemP4.jpg" },
        { name: "Item Q4", image: "itemQ4.jpg" },
        { name: "Item R4", image: "itemR4.jpg" }
      ],
      // ... Add more options as needed
    };
  
    var div = document.getElementById("menu");
    div.innerHTML = "";
  
    var optionItems = items[option];
    for (var i = 0; i < optionItems.length; i++) {
      var itemDiv = document.createElement("div");
      itemDiv.style.border = "1px solid #ccc";
      itemDiv.style.padding = "10px";
  
      var img = document.createElement("img");
      img.src = optionItems[i].image;
      img.style.width = "100px";
      img.style.height = "100px";
      img.addEventListener("click", toggleImageSize);
  
      var textNode = document.createTextNode(optionItems[i].name);
  
      itemDiv.appendChild(img);
      itemDiv.appendChild(textNode);
  
      div.appendChild(itemDiv);
    }
  }
  
  function toggleImageSize() {
    var currentWidth = parseInt(this.style.width);
    var newWidth = currentWidth === 100 ? 200 : 100;
    this.style.width = newWidth + "px";
    this.style.height = newWidth + "px";
  }
  