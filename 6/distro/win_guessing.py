from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# Starts chrome driver:
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://cjleggett.github.io/section-web/6/solution/index.html")
