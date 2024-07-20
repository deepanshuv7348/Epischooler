import pandas as pd
import json

# Load the Excel file
file_path = 'assignment_data.xlsx'
df = pd.read_excel(file_path, sheet_name='Sheet1')

# Convert the DataFrame to JSON
data = df.to_dict(orient='records')

# Save the data to a JSON file
with open('data.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Data extraction complete. JSON file created.")
