document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            
            // Structural alert placeholder for a real API lead-catch hook
            alert(`Thank you, ${name}! Your sourcing inquiry for our trade pipelines has been sent to our Dubai desk. A representative will contact you at ${email} shortly.`);
            
            leadForm.reset();
        });
    }
});
