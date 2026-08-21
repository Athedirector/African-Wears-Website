document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // 1. Submit the form data to Web3Forms/API in the background
            const formData = new FormData(leadForm);
            
        fetch("https://api.web3forms.com/submit", {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // 2. Trigger the premium custom popup on success
                    showCustomPopup(name, email);
                    leadForm.reset();
                } else {
                    alert("Submission failed. Please check your network connection.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
        });
    }
});

// Function to generate the premium modal popup
function showCustomPopup(name, email) {
    // Create backdrop overlay
    const overlay = document.createElement('div');
    overlay.className = 'custom-popup-overlay';
    
    // Create popup card
    overlay.innerHTML = `
        <div class="custom-popup-card">
            <div class="popup-icon">🏢</div>
            <h3>Inquiry Received</h3>
            <p class="popup-greeting">Thank you, <strong>${name}</strong>!</p>
            <p class="popup-body">Your sourcing inquiry for our trade pipelines has been routed to our Dubai desk. A representative will review your logistics requirements and contact you at <span>${email}</span> within 24 business hours.</p>
            <button class="popup-close-btn">Return to Portal</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Trigger fade-in animation
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Close button functionality
    overlay.querySelector('.popup-close-btn').addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300); // Wait for fade-out to finish
    });
}