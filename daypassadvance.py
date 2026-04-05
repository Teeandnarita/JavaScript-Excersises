from datetime import datetime

# Input Section
start_str = input("Enter birth date (YYYY-MM-DD) [Ex: 2012-08-06]: ")
end_str = input("Enter target date (YYYY-MM-DD) [Ex: 2026-04-05]: ")

# Convert to date objects
fmt = "%Y-%m-%d"
start_date = datetime.strptime(start_str, fmt)
end_date = datetime.strptime(end_str, fmt)

# Calculate breakdown
years = end_date.year - start_date.year
temp_date = start_date.replace(year=start_date.year + years)
if temp_date > end_date:
    years -= 1
    temp_date = start_date.replace(year=start_date.year + years)

months = 0
while True:
    next_month = temp_date.replace(month=temp_date.month + 1) if temp_date.month < 12 else temp_date.replace(year=temp_date.year + 1, month=1)
    if next_month > end_date: break
    temp_date = next_month
    months += 1

days = (end_date - temp_date).days

# Final Result
print("-" * 30)
print(f"Total Days: {(end_date - start_date).days}")
print(f"Text Format: {years} years, {months} months, and {days} days")

# THIS IS ALSO AI
