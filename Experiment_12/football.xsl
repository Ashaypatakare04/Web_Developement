<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>

<body>

<div style="margin: 20px; text-align: center;">
    <a href="../index.html" style="text-decoration: none; padding: 10px 20px; background: #2c5364; color: white; border-radius: 5px;">Back to Portfolio</a>
</div>

<h2>Football Players Information</h2>

<table border="1">

<tr bgcolor="lightblue">
<th>Name</th>
<th>Country</th>
<th>Position</th>
</tr>

<xsl:for-each select="footballplayers/player">

<tr>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="country"/></td>
<td><xsl:value-of select="position"/></td>
</tr>

</xsl:for-each>

</table>

</body>

</html>

</xsl:template>

</xsl:stylesheet>
