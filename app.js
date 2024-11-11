// Function to handle form submission
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const productName = document.getElementById('product-name').value;
    const productDesc = document.getElementById('product-desc').value;
    const supplierName = document.getElementById('supplier-name').value;
    const supplierContact = document.getElementById('supplier-contact').value;
    const productPrice = document.getElementById('product-price').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const recordLevel = document.getElementById('record-level').value;
    const transactionDate = document.getElementById('transaction-date').value;

    // Function to format date from yyyy-mm-dd to dd-mm-yyyy
    function formatDate(date) {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    }

    // Format the transaction date
    const formattedDate = formatDate(transactionDate);

    // Create a new row in the product table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productDesc}</td>
        <td>${supplierName}</td>
        <td>${supplierContact}</td>
        <td>₹${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${recordLevel}</td>
        <td>${formattedDate}</td>
    `;

    // Append the new row to the product table
    document.getElementById('product-rows').appendChild(newRow);

    // Clear form after submission
    document.getElementById('product-form').reset();
});