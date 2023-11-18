function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function showMainMenu() {
    showSection('mainMenu');
}

function fetchDiagnosticData() {
    // Fetch and display diagnostic data...
    showSection('diagnosticData');
}

function showDiagnosticDetails() {
    // Show diagnostic details section...
    showSection('diagnosticDetails');
}

function showVehicleDiagnostics() {
    // Logic for vehicle diagnostics...
    document.getElementById('diagnosticContent').textContent = 'Vehicle Diagnostics Content...';
}

function showDiagnose() {
    // Logic for diagnose...
    document.getElementById('diagnosticContent').textContent = 'Diagnose Content...';
}