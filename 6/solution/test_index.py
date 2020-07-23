import os
import pathlib

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# Find URI of file
def file_uri(filename):
    return pathlib.Path(os.path.abspath(filename)).as_uri()
uri = file_uri("index.html")

# Starts chrome driver:
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get(uri)

num_input = driver.find_element_by_name("num")
message = driver.find_element_by_id("message")
button = driver.find_element_by_id("guess")

high = 100000
low = 1
while True:
    num_input.clear()
    guess = (high + low) // 2
    num_input.send_keys(guess)
    button.click()
    current_message = message.get_attribute("innerHTML")
    if "Low" in current_message:
        low = guess
    elif "High" in current_message:
        high = guess
    else:
        break
