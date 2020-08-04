from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# Starts chrome driver:
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://cjleggett.github.io/section-web/6/solution/index.html")

num = 100000

def divide_by_2(n):
    return n // 2

def high_low():
    guess = driver.find_element_by_id("message").get_attribute("innerHTML")
    return "High" in guess

def success():
    guess = driver.find_element_by_id("message").get_attribute("innerHTML")
    return "NUMBER" in guess

num_input = driver.find_element_by_name("num")
button = driver.find_element_by_id("guess")
for i in range(num):
    num_input.send_keys(i)
    button.click()
    if success():
        break
    num_input.clear()

