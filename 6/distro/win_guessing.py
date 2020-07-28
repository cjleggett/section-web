from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# Starts chrome driver:
# If the uncommented line isn't working, try:
# driver = webdriver.Chrome(executable_path='C:/path/to/chromedriver.exe')
# inserting your own path where appropriate
driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get("https://cjleggett.github.io/section-web/6/solution/index.html")
