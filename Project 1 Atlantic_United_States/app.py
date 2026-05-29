from flask import Flask, render_template

app = Flask(__name__)

# 1. Route: Main Music Trends Panel
@app.route('/')
def home():
    return render_template('index.html')

# 2. Route: Habit tracking module
@app.route('/routine')
def routine():
    return render_template('routine.html')

# 3. Route: Expense manager ledger panel
@app.route('/expenses')
def expenses():
    return render_template('expenses.html')

if __name__ == '__main__':
    # Running locally with structural hot reloading enabled
    app.run(debug=True)