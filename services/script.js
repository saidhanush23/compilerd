// frontend/script.js
async function runCode() {
    const language = document.getElementById('language').value;
    const code = document.getElementById('code').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/execute/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ language, code })
        });

        const result = await response.json();
        document.getElementById('output').innerText = result.output || result.error;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('output').innerText = 'An error occurred. Please try again.';
    }
}
