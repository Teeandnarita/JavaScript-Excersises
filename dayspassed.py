from datetime import datetime

start_input = input("Enter start date (YYYY-MM-DD): ")
end_input = input("Enter end date (YYYY-MM-DD): ")

date_format = "%Y-%m-%d"
start_date = datetime.strptime(start_input, date_format)
end_date = datetime.strptime(end_input, date_format)

delta = end_date - start_date

print(f"Total days: {delta.days}")

#GENERATED WITH GOOGLE GEMINI ONLY FOR THIS ONE
