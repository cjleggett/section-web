import os
from dotenv import load_dotenv

load_dotenv()

password = os.environ.get("PASSWORD")
password2 = os.environ.get("POSSWORD2")

print(f"My password is {password}")
print(f"My second password is {password2}")