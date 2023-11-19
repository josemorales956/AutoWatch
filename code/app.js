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

function showDiagnosticData() {
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

function showRepairHistoryDetails() {
    showSection('repairHistoryDetails');
}

function showRepairInstances() {
    document.getElementById('repairHistoryContent').textContent = 'Repair Instances Content...';
    // Add logic to fetch and display repair instances
}

function showWarrantyCheck() {
    document.getElementById('repairHistoryContent').textContent = 'Warranty Check Content...';
    // Add logic for warranty check functionality
}

function showVehicleHistory() {
    document.getElementById('repairHistoryContent').textContent = 'Vehicle History Content...';
    // Add logic for displaying vehicle history
}

function showRepairHistory() {
    showSection('repairHistory');
}
