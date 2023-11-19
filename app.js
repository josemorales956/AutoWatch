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

// ... existing functions ...

function fetchRepairHistory() {
    // Hide all sections and show the Repair History Details section
    hideAllSections();
    document.getElementById('repairHistoryDetails').style.display = 'block';
    // You can also add logic here to dynamically load or fetch the repair history content
}

function showRepairInstances() {
    document.getElementById('repairHistoryContent').textContent = 'Content for Each Repair Instance...';
    // Add logic to display each repair instance
}

function showWarrantyCheck() {
    document.getElementById('repairHistoryContent').textContent = 'Content for Warranty Check...';
    // Add logic to display warranty check information
}

function showVehicleHistory() {
    document.getElementById('repairHistoryContent').textContent = 'Content for Vehicle History...';
    // Add logic to display vehicle history
}

function hideAllSections() {
    // Logic to hide all content sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
}

function fetchCostEstimates() {
    // Logic to fetch and display basic cost estimates
    hideAllSections();
    document.getElementById('costEstimates').style.display = 'block';
}

function showCostEstimateDetails() {
    hideAllSections();
    document.getElementById('costEstimateDetails').style.display = 'block';
    // Logic to dynamically load or fetch detailed cost estimate content
}

function getQuote() {
    document.getElementById('estimateDetailsContent').textContent = 'Quote Content...';
    // Add logic to get and display a quote
}

function showPartsAndLabor() {
    document.getElementById('estimateDetailsContent').textContent = 'Parts and Labor Content...';
    // Add logic to display parts and labor information
}

function showCostEstimates() {
    hideAllSections();
    document.getElementById('costEstimates').style.display = 'block';
}

