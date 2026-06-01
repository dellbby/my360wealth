<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>XML Sitemap | My 360 Wealth Management Group</title>
        <meta name="robots" content="noindex"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,500..700;1,400..700&amp;display=swap" rel="stylesheet"/>
        <style>
          *,*::before,*::after { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }
          body {
            background: #f6efe3;
            color: #2a221a;
            font-family: 'DM Sans', system-ui, sans-serif;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }
          .wrap { max-width: 980px; margin: 0 auto; padding: 56px 24px 80px; }
          .header { border-bottom: 1px solid rgba(42,34,26,0.12); padding-bottom: 24px; margin-bottom: 32px; }
          .eyebrow { color: #a07b32; letter-spacing: 0.3em; text-transform: uppercase; font-size: 11px; font-weight: 600; }
          h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 40px; color: #2a221a; margin: 12px 0 4px; letter-spacing: -0.01em; }
          .lead { color: rgba(42,34,26,0.7); font-size: 15px; max-width: 640px; margin: 0; }
          .meta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 18px; font-size: 12px; color: rgba(42,34,26,0.55); }
          .meta-row .pill { background: rgba(160,123,50,0.1); color: #a07b32; padding: 4px 10px; border-radius: 999px; font-weight: 500; letter-spacing: 0.04em; }
          table { width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid rgba(42,34,26,0.08); }
          thead th {
            text-align: left; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
            color: #a07b32; font-weight: 600; padding: 14px 16px;
            background: #faf6ec; border-bottom: 1px solid rgba(42,34,26,0.1);
          }
          tbody td { padding: 12px 16px; font-size: 14px; border-top: 1px solid rgba(42,34,26,0.06); vertical-align: middle; }
          tbody tr:hover { background: #fffaf0; }
          a.url { color: #2a221a; text-decoration: none; font-weight: 500; word-break: break-all; }
          a.url:hover { color: #a07b32; text-decoration: underline; }
          .priority { display: inline-block; min-width: 44px; padding: 3px 10px; text-align: center;
            background: #a07b32; color: #fff; font-size: 12px; font-weight: 600; border-radius: 999px; }
          .priority.low { background: rgba(160,123,50,0.55); }
          .freq { color: rgba(42,34,26,0.6); font-size: 13px; }
          .date { color: rgba(42,34,26,0.55); font-size: 13px; font-family: ui-monospace, monospace; }
          .foot { margin-top: 24px; font-size: 12px; color: rgba(42,34,26,0.55); }
          .foot a { color: #a07b32; }
          @media (max-width: 640px) {
            thead { display: none; }
            tbody td { display: block; padding: 8px 16px; border-top: none; }
            tbody tr { display: block; border-top: 1px solid rgba(42,34,26,0.08); padding: 12px 0; }
            td.url-cell { padding-top: 12px; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="header">
            <span class="eyebrow">XML Sitemap</span>
            <h1>my360wealth.com</h1>
            <p class="lead">Indexed pages for search engines. For a browsable site index, see <a href="/sitemap.html" style="color:#a07b32;">sitemap.html</a>.</p>
            <div class="meta-row">
              <span class="pill"><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs</span>
              <span>Generated for <a href="https://www.my360wealth.com/" style="color:#a07b32;">My 360 Wealth Management Group</a></span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Freq.</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" order="descending" data-type="number"/>
                <tr>
                  <td class="url-cell">
                    <a class="url" href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                  </td>
                  <td class="date"><xsl:value-of select="sm:lastmod"/></td>
                  <td class="freq"><xsl:value-of select="sm:changefreq"/></td>
                  <td>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="sm:priority &lt; 0.8">priority low</xsl:when>
                          <xsl:otherwise>priority</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sm:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <p class="foot">This sitemap is auto-styled with XSLT — search engines still read the underlying XML normally.</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
