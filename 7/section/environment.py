import os
from dotenv import load_dotenv

load_dotenv()

KEY = os.environ.get("KEY")
KEY2 = os.environ.get("KEY2")

print(f"My API key is {KEY}")

print(f"My Second API key is {KEY2}")