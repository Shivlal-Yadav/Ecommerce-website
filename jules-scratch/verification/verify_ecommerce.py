from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page, which should redirect to /products
        page.goto("http://localhost:3000/")

        # Verify the products page
        expect(page).to_have_title("Products")
        expect(page.get_by_role("heading", name="Our Products")).to_be_visible()

        # Verify there are 3 products
        product_list = page.locator("ul > li")
        expect(product_list).to_have_count(3)

        # Click on the first product
        page.get_by_role("link", name="Laptop").click()

        # Verify the product detail page
        expect(page).to_have_title("Laptop")
        expect(page.get_by_role("heading", name="Laptop")).to_be_visible()
        expect(page.get_by_text("A powerful laptop for all your needs.")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/ecommerce_verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
