"""Build both downloadable CVs from the content used by the website.

Requires Python 3.10+, reportlab==4.4.9 and Pillow.
Run from any directory: python scripts/build_cv.py
"""

import hashlib
import io
import json
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "app/cv/cv-data.json"
DATA = json.loads(SOURCE.read_text(encoding="utf-8"))
SOURCE_HASH = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
OUTPUT = ROOT / "public/cv"
WIDTH, HEIGHT = A4
INK = colors.HexColor("#202720")
MUTED = colors.HexColor("#505a4f")
PAPER = colors.HexColor("#efefea")
DARK = colors.HexColor("#151817")
CORAL = colors.HexColor("#ff946e")
LINE = colors.HexColor("#bac1b6")

for name, filename in [("Golos", "golos-regular.ttf"), ("GolosBold", "golos-semibold.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / "app/assets/fonts" / filename)))
pdfmetrics.registerFontFamily("Golos", normal="Golos", bold="GolosBold")


def paragraph(pdf, text, x, top, width, size=9.2, color=INK, bold=False, leading=None):
    style = ParagraphStyle(
        "text",
        fontName="GolosBold" if bold else "Golos",
        fontSize=size,
        leading=leading or size * 1.36,
        textColor=color,
        spaceAfter=0,
    )
    block = Paragraph(text, style)
    _, height = block.wrap(width, HEIGHT)
    if top - height < 39:
        raise ValueError(f"CV overflows its page near: {text[:80]}")
    block.drawOn(pdf, x, top - height)
    return top - height


def text(pdf, value, x, top, width, **kwargs):
    return paragraph(pdf, escape(value), x, top, width, **kwargs)


def heading(pdf, value, x, top, width):
    top = text(pdf, value, x, top, width, size=14, bold=True)
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.5)
    pdf.line(x, top - 6, x + width, top - 6)
    return top - 15


def link(pdf, label, url, x, top, width, **kwargs):
    return paragraph(
        pdf, f'<link href="{escape(url, {chr(34): "&quot;"})}">{escape(label)}</link>',
        x, top, width, **kwargs,
    )


def build(language):
    labels = DATA["labels"][language]
    path = OUTPUT / f"iliya-baltadzhiev-{language}.pdf"
    pdf = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    pdf.setTitle(labels["title"])
    pdf.setAuthor(DATA["name"][language])
    pdf.setSubject(DATA["role"])
    pdf.setKeywords(f"CV, {language}, cv-data-sha256:{SOURCE_HASH}")
    pdf.setCreator("Iliya portfolio CV builder")
    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, WIDTH, HEIGHT, stroke=0, fill=1)
    pdf.setFillColor(DARK)
    pdf.rect(0, HEIGHT - 173, WIDTH, 173, stroke=0, fill=1)

    left = 36
    main_width = 344
    side_x = 413
    side_width = WIDTH - side_x - 36
    top = HEIGHT - 30
    top = text(pdf, DATA["name"][language], left, top, 380, size=27, bold=True, color=PAPER)
    top = text(pdf, DATA["role"], left, top - 7, 350, size=13, bold=True, color=CORAL)
    top = text(pdf, DATA["location"][language], left, top - 7, 350, size=9.2, color=PAPER)
    text(pdf, DATA["summary"][language], left, top - 13, 345, size=9.5, color=PAPER)

    portrait = Image.open(ROOT / "public/iliya-profile.png").convert("RGB")
    portrait.thumbnail((360, 360))
    buffer = io.BytesIO()
    portrait.save(buffer, format="JPEG", quality=90)
    buffer.seek(0)
    pdf.saveState()
    portrait_size = 118
    portrait_x = WIDTH - 36 - portrait_size
    portrait_y = HEIGHT - 28 - portrait_size
    mask = pdf.beginPath()
    mask.roundRect(portrait_x, portrait_y, portrait_size, portrait_size, 6)
    pdf.clipPath(mask, stroke=0, fill=0)
    pdf.drawImage(ImageReader(buffer), portrait_x, portrait_y, portrait_size, portrait_size)
    pdf.restoreState()

    cursor = HEIGHT - 198
    cursor = heading(pdf, labels["experience"], left, cursor, main_width)
    job = DATA["experience"]
    cursor = text(pdf, job["role"], left, cursor, main_width, size=10.4, bold=True)
    cursor = text(pdf, job["company"] + " | " + job["period"][language], left, cursor - 3, main_width, size=8.8, color=MUTED)
    cursor -= 7
    for bullet in job["bullets"][language]:
        text(pdf, "-", left, cursor, 9, size=9.2)
        cursor = text(pdf, bullet, left + 11, cursor, main_width - 11, color=MUTED) - 2

    cursor = heading(pdf, labels["education"], left, cursor - 9, main_width)
    for education in DATA["education"]:
        cursor = text(pdf, education["title"][language] + " | " + education["year"], left, cursor, main_width, size=9.6, bold=True)
        cursor = text(pdf, education["school"][language], left, cursor - 2, main_width, size=8.8, color=MUTED)
        cursor = text(pdf, education["qualification"][language], left, cursor - 1, main_width, size=8.8, color=MUTED)
        if education["id"] == "masters":
            cursor = text(pdf, education["note"][language], left, cursor - 1, main_width, size=8.5, color=MUTED)
        cursor -= 6

    cursor = heading(pdf, labels["projects"], left, cursor - 4, main_width)
    for project in DATA["projects"]:
        cursor = link(pdf, project["name"], project["url"], left, cursor, main_width, size=9.6, bold=True)
        cursor = text(pdf, project["description"][language], left, cursor - 2, main_width, size=8.8, color=MUTED)
        cursor = text(pdf, project["tech"], left, cursor - 2, main_width, size=8, color=MUTED)
        cursor -= 6

    sidebar = HEIGHT - 198
    sidebar = heading(pdf, labels["contact"], side_x, sidebar, side_width)
    contacts = [
        (DATA["email"], "mailto:" + DATA["email"]),
        (DATA["phoneDisplay"], "tel:" + DATA["phone"]),
        ("linkedin.com/in/iliabaltadzhiev", DATA["linkedin"]),
        ("github.com/ilynet-0302", DATA["github"]),
    ]
    for label, url in contacts:
        sidebar = link(pdf, label, url, side_x, sidebar, side_width, size=8.5, color=MUTED) - 8

    sidebar = heading(pdf, labels["skills"], side_x, sidebar - 17, side_width)
    for skill in DATA["skills"]:
        sidebar = text(pdf, skill["name"][language], side_x, sidebar, side_width, size=9.3, bold=True)
        sidebar = text(pdf, " / ".join(skill["items"]), side_x, sidebar - 5, side_width, size=9, color=MUTED) - 15

    sidebar = heading(pdf, labels["languages"], side_x, sidebar - 8, side_width)
    for item in DATA["languages"]:
        sidebar = text(pdf, item["name"][language], side_x, sidebar, side_width, size=9.3, bold=True)
        sidebar = text(pdf, item["level"][language], side_x, sidebar - 4, side_width, size=9, color=MUTED) - 13

    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.5)
    pdf.line(left, 31, WIDTH - 36, 31)
    pdf.setFont("Golos", 7.5)
    pdf.setFillColor(MUTED)
    footer = "ilynet-0302.github.io/iliya-portfolio"
    pdf.drawString(left, 19, footer)
    pdf.linkURL(DATA["website"], (left, 16, left + pdfmetrics.stringWidth(footer, "Golos", 7.5), 27), relative=0)
    pdf.drawRightString(WIDTH - 36, 19, "1 / 1")
    pdf.showPage()
    pdf.save()
    print(f"Created {path.name}: {path.stat().st_size:,} bytes; content ends at y={cursor:.1f}")


if __name__ == "__main__":
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for language in ("bg", "en"):
        build(language)
