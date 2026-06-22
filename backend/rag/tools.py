from requests import get
import re
from html import unescape
def get_url_content(url:str)->str:
    html = get(url=url).text

    # Remove scripts/styles first
    html = re.sub(r"<script.*?</script>", "", html, flags=re.DOTALL)
    html = re.sub(r"<style.*?</style>", "", html, flags=re.DOTALL)

    # Remove all tags
    text = re.sub(r"<[^>]+>", "\n", html)

    # Decode HTML entities (&amp;, &#x27;, ...)
    text = unescape(text)

    # Remove empty lines
    text = "\n".join(line.strip() for line in text.splitlines() if line.strip())

    return text