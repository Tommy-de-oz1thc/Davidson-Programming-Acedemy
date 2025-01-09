// Reference to the dark mode switch
const darkmodeSwitch = document.getElementById('dark-switch');

// Add an event listener to handle changes
darkmodeSwitch.addEventListener('change', () => {
    // Select the container element
    const container = document.querySelector('.container');

    if (container) {
        if (darkmodeSwitch.checked) {
            // Dark mode is enabled
            container.style.backgroundColor = 'black'; // Set container's background to black
            container.style.color = 'white'; // Set text color to white
            
            // Update text color for h1 and p with the white class
            const headers = container.querySelectorAll('h1.white, p.white');
            headers.forEach(header => {
                header.style.color = 'white'; // White text for h1 and p with class .white
            });
            
            // Change text color in all boxes and their children
            const boxes = container.querySelectorAll('.box');
            boxes.forEach(box => {
                box.style.backgroundColor = '#333'; // Dark background for boxes
                box.style.color = 'white'; // Set text color for each box
                
                // Update text inside boxes
                const textElements = box.querySelectorAll('.white');
                textElements.forEach(el => {
                    el.style.color = 'white'; // White text for all inner elements
                });
            });
        } else {
            // Light mode is enabled
            container.style.backgroundColor = 'white'; // Set container's background to white
            container.style.color = 'black'; // Set text color to black

            // Update text color for h1 and p with the white class
            const headers = container.querySelectorAll('h1.white, p.white');
            headers.forEach(header => {
                header.style.color = 'black'; // Black text for h1 and p with class .white
            });
            
            // Change text color in all boxes and their children
            const boxes = container.querySelectorAll('.box');
            boxes.forEach(box => {
                box.style.backgroundColor = '#f9f9f9'; // Light background for boxes
                box.style.color = 'black'; // Set text color for each box
                
                // Update text inside boxes
                const textElements = box.querySelectorAll('.white');
                textElements.forEach(el => {
                    el.style.color = 'black'; // Black text for all inner elements
                });
            });
        }
    }
});
