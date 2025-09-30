function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.remove();
}

function editProduct(btn) {
  alert("Edit product feature coming soon!");
}

function addProduct() {
  let table = document.getElementById("productTable");
  let row = table.insertRow(-1);
  row.innerHTML =
    "<td>103</td><td>New Product</td><td>10</td><td>Misc</td><td class='in-stock'>In Stock</td>" +
    "<td><button onclick='editProduct(this)'>✏️</button> " +
    "<button onclick='deleteRow(this)'>🗑️</button></td>";
}
