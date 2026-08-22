import { chromium } from "playwright";

export async function POST(request: Request) {
  try {
    const { html } = await request.json();

    if (!html) {
      return Response.json({ error: "HTML is required" }, { status: 400 });
    }

    const browser = await chromium.launch();

    try {
      const page = await browser.newPage({
        viewport: {
          width: 794,
          height: 1123,
        },
        deviceScaleFactor: 1,
      });

      await page.setContent(html, {
        waitUntil: "networkidle",
      });

      await page.emulateMedia({
        media: "print",
      });

      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
      });

      return new Response(new Uint8Array(pdf), {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": 'attachment; filename="CV.pdf"',
        },
      });
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error("PDF ERROR:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : "Unknown PDF error",
      },
      { status: 500 },
    );
  }
}
