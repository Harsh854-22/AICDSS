// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.getElementById('patientForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const symptomsInput = document.getElementById('symptoms').value.trim();

    // Clear previous results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Validate input
    if (!name || !age || !gender || !symptomsInput) {
        resultsDiv.innerHTML = '<p>Please fill out all fields.</p>';
        return;
    }

    const symptoms = symptomsInput.split(',').map(s => s.trim());

    // Display loading message
    resultsDiv.innerHTML = '<p>Analyzing symptoms...</p>';

    try {
        // Send patient data and symptoms to the backend (replace with actual backend endpoint)
        const response = await fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age, gender, symptoms })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Clear loading message
        resultsDiv.innerHTML = '';

        if (data.recommendations.length > 0) {
            data.recommendations.forEach(rec => {
                resultsDiv.innerHTML += `<h3>${rec.condition}</h3>
                                         <p><strong>Medications:</strong> ${rec.medications.join(', ')}</p>
                                         <p><strong>Diet:</strong> ${rec.diet.join(', ')}</p>`;
            });
        } else {
            resultsDiv.innerHTML = '<p>No conditions found for the given symptoms.</p>';
        }
    } catch (error) {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});


///  Health tips section
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const healthTips = [
        "Stay hydrated by drinking plenty of water throughout the day.",
        "Exercise regularly to improve both physical and mental health.",
        "Include a variety of fruits and vegetables in your diet for balanced nutrition.",
        "Take breaks and practice mindfulness to reduce stress.",
        "Get adequate sleep to help your body and mind recover.",
        "Avoid excessive sugar and processed foods in your diet.",
        "Practice good hygiene to prevent illnesses.",
        "Engage in hobbies and activities that you enjoy.",
        "Spend time outdoors and enjoy natural sunlight.",
        "Maintain a positive attitude and practice gratitude.",
        "Limit screen time and take regular breaks from electronic devices.",
        "Incorporate strength training into your fitness routine.",
        "Eat smaller, more frequent meals to maintain energy levels.",
        "Practice deep breathing exercises to improve lung function.",
        "Use sunscreen to protect your skin from harmful UV rays.",
        "Stay socially connected with friends and family.",
        "Take time for self-care and relaxation each day.",
        "Set achievable goals and celebrate your progress.",
        "Avoid smoking and limit alcohol consumption.",
        "Keep your environment clean and organized.",
        "Prioritize mental health by seeking help if needed.",
        "Stay informed about health and wellness topics.",
        "Try new healthy recipes and explore different cuisines.",
        "Incorporate stretching into your daily routine.",
        "Avoid eating too close to bedtime to improve sleep quality.",
        "Make time for daily physical activity, even if it's just a walk.",
        "Learn to manage stress through techniques like yoga or meditation.",
        "Stay up to date with regular medical check-ups.",
        "Limit caffeine intake to avoid disrupting your sleep.",
        "Practice good posture to prevent back and neck pain.",
        "Be mindful of portion sizes to avoid overeating.",
        "Try to maintain a healthy work-life balance.",
        "Stay hydrated during exercise and sports activities.",
        "Avoid skipping meals to maintain stable blood sugar levels.",
        "Find a workout routine that you enjoy to stay motivated.",
        "Use relaxation techniques before bedtime to improve sleep.",
        "Ensure you have a comfortable and supportive mattress.",
        "Practice safe driving habits to avoid accidents.",
        "Make time for creative expression and relaxation.",
        "Stay active even on rest days with light activities like walking.",
        "Seek support from health professionals if you have chronic conditions.",
        "Keep a positive mindset and focus on your strengths.",
        "Find ways to integrate more fiber into your diet.",
        "Monitor your mental well-being and address issues early.",
        "Use ergonomic furniture to support a healthy workspace.",
        "Stay informed about new health research and recommendations."
    ];

    let currentTipIndex = 0;

    const modal = document.getElementById("healthTipModal");
    const btn = document.getElementById("healthTipBtn");
    const span = document.getElementsByClassName("close")[0];
    const healthTipText = document.getElementById("healthTipText");
    const nextTipBtn = document.getElementById("nextTipBtn");

    function showTip(index) {
        healthTipText.textContent = healthTips[index];
        modal.classList.add("show");
    }

    // Show a random health tip when the button is clicked
    btn.onclick = function() {
        currentTipIndex = Math.floor(Math.random() * healthTips.length);
        showTip(currentTipIndex);
    }

    // Show the next tip when the "Next Tip" button is clicked
    nextTipBtn.onclick = function() {
        currentTipIndex = (currentTipIndex + 1) % healthTips.length;
        showTip(currentTipIndex);
    }

    // Close the modal when the user clicks on the "x"
    span.onclick = function() {
        modal.classList.remove("show");
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
    }
});

