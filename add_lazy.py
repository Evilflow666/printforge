import re, subprocess, os, sys
html_files = subprocess.check_output(["git","ls-files","*.html"]).decode().split()
pattern = re.compile(r"<img(?![^>]*\\bloading=)([^>]*?)src=\\"([^\\"]+)\\"([^>]*)>", re.IGNORECASE)
for f in html_files:
    with open(f, "r", encoding="utf8") as fh:
        content = fh.read()
    def repl(m):
        before, src, after = m.group(1), m.group(2), m.group(3)
        if re.search(r"logo|hero", src, re.IGNORECASE):
            return m.group(0)
        return f"<img{before}src=\"{src}\" loading=\"lazy\"{after}>"
    new_content, n = pattern.subn(repl, content)
    if n:
        with open(f, "w", encoding="utf8") as fh:
            fh.write(new_content)
