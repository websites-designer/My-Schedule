    // Function to toggle task completion and update progress
    function toggleCompletion(taskCard) {
        // Toggle the 'completed' class on the clicked task card
        taskCard.classList.toggle('completed');

        // Find the checkbox inside the task card and toggle it as well
        const checkbox = taskCard.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; // Toggle checkbox state

        // Update progress after each task is toggled
        updateProgress();
    }

    // Function to update the progress circle and percentage
    function updateProgress() {
        const tasks = document.querySelectorAll('.task-card input[type="checkbox"]');
        const totalTasks = tasks.length;
        let completedTasks = 0;

        // Count how many tasks are checked (completed)
        tasks.forEach(task => {
            if (task.checked) {
                completedTasks++;
            }
        });

        // Calculate progress percentage
        const progress = (completedTasks / totalTasks) * 100;
        document.getElementById('progressPercentage').innerText = `${Math.round(progress)}%`;

        // Update the progress circle's background
        const progressCircle = document.getElementById('progressCircle');
        progressCircle.style.background = `conic-gradient(#007BFF ${progress}%, #f0f8ff ${progress}% 100%)`;
    }

    // Function to toggle the navbar visibility on mobile
    function toggleNav() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
        document.getElementById('hamburger').classList.toggle('active');
    }

    // Attach event listener to each task card after DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Get all task cards
        const taskCards = document.querySelectorAll('.task-card');

        // For each task card, add a click event listener to toggle completion
        taskCards.forEach(taskCard => {
            taskCard.addEventListener('click', () => toggleCompletion(taskCard));
        });

        // Additionally, handle checkbox clicks to make sure it syncs with the card
        const checkboxes = document.querySelectorAll('.task-card input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const taskCard = checkbox.closest('.task-card');
                if (checkbox.checked) {
                    taskCard.classList.add('completed');
                } else {
                    taskCard.classList.remove('completed');
                }

                // Update progress when a checkbox is manually clicked
                updateProgress();
            });
        });

        // Initial progress update when the page loads
        updateProgress();

        // Attach event listener for navbar hamburger toggle
        document.getElementById('hamburger').addEventListener('click', toggleNav);
    });
