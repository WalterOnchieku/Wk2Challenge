let arr = [];

        function addToList() {
            // Get value from input text
            let inputText = document.getElementById('txtbox').value.trim();

            // Check if input is not empty
            if (inputText !== '') {
                // Append input to array with initial purchased state false
                arr.push({ text: inputText, purchased: false });

                // Display array data
                displayList();

                // Clear the input field for the next item
                document.getElementById('txtbox').value = '';
            }
        }

        function displayList() {
            let listContainer = document.getElementById("mytext");
            listContainer.innerHTML = '';

            // Loop through the array and create list items
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                let li = document.createElement('li');
                li.textContent = item.text;

                // Add class 'purchased' if item is marked as purchased
                if (item.purchased) {
                    li.classList.add('purchased');
                }

                // Add click event listener to toggle purchased state
                li.addEventListener('click', function() {
                    item.purchased = !item.purchased; // Toggle purchased state
                    displayList(); // Update the displayed list
                });

                listContainer.appendChild(li);
            }
        }

        function clearList() {
            arr = [];
            displayList(); // Update the displayed list
        }

        function markAllAsPurchased() {
            // Toggle purchased state of all items in the array
            arr.forEach(function(item) {
                item.purchased = true; // Mark as purchased
            });

            displayList(); // Update the displayed list
        }