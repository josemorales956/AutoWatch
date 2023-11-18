from flask import Flask, jsonify, request

app = Flask(__name__)

# Mock data for demonstration purposes
diagnostic_data = [{"code": "P0300", "description": "Random/Multiple Cylinder Misfire Detected"}]
repair_records = [{"date": "2023-01-15", "service": "Oil Change", "cost": 75}]
cost_estimates = [{"issue": "Brake Pad Replacement", "estimate": 150}]
mechanic_appointments = [{"date": "2023-02-20", "time": "10:00 AM", "mechanic": "John Doe"}]

@app.route('/api/diagnostic_data', methods=['GET'])
def get_diagnostic_data():
    # In a real application, you'd retrieve this data from a database or an external service
    return jsonify(diagnostic_data)

@app.route('/api/repair_history', methods=['GET'])
def get_repair_history():
    # Similarly, this data would come from your database
    return jsonify(repair_records)

@app.route('/api/cost_estimates', methods=['GET'])
def get_cost_estimates():
    # Replace this with dynamic data retrieval logic
    return jsonify(cost_estimates)

@app.route('/api/schedule_appointment', methods=['POST'])
def schedule_appointment():
    # In a real scenario, you'd process input data and update your database
    data = request.json
    mechanic_appointments.append(data)
    return jsonify({"status": "success", "message": "Appointment scheduled"})

if __name__ == '__main__':
    app.run(debug=True)
