import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { nanoid } from "nanoid";
import QRCode from "qrcode";
import { siteConfig } from "@/config/site";

export function generateVerifyCode(): string {
  return nanoid(12);
}

interface CertificateData {
  userName: string;
  courseTitle: string;
  score: number;
  date: string;
  verifyCode: string;
  courseColor: string;
}

export async function generateCertificatePDF(
  data: CertificateData
): Promise<Uint8Array> {
  const { userName, courseTitle, score, date, verifyCode } = data;

  const pdfDoc = await PDFDocument.create();
  // A4 landscape: 841.89 x 595.28
  const page = pdfDoc.addPage([841.89, 595.28]);
  const { width, height } = page.getSize();

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Colors
  const bgColor = rgb(0.07, 0.07, 0.12);
  const purple = rgb(0.56, 0.33, 0.94);
  const white = rgb(1, 1, 1);
  const gray = rgb(0.6, 0.6, 0.65);
  const lightGray = rgb(0.8, 0.8, 0.85);

  // Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: bgColor,
  });

  // Purple decorative border
  const borderInset = 25;
  const borderThickness = 2;
  // Top
  page.drawRectangle({ x: borderInset, y: height - borderInset - borderThickness, width: width - 2 * borderInset, height: borderThickness, color: purple });
  // Bottom
  page.drawRectangle({ x: borderInset, y: borderInset, width: width - 2 * borderInset, height: borderThickness, color: purple });
  // Left
  page.drawRectangle({ x: borderInset, y: borderInset, width: borderThickness, height: height - 2 * borderInset, color: purple });
  // Right
  page.drawRectangle({ x: width - borderInset - borderThickness, y: borderInset, width: borderThickness, height: height - 2 * borderInset, color: purple });

  // Corner accents (small squares)
  const cornerSize = 8;
  const corners = [
    [borderInset, height - borderInset - cornerSize],
    [width - borderInset - cornerSize, height - borderInset - cornerSize],
    [borderInset, borderInset],
    [width - borderInset - cornerSize, borderInset],
  ] as const;
  for (const [cx, cy] of corners) {
    page.drawRectangle({ x: cx, y: cy, width: cornerSize, height: cornerSize, color: purple });
  }

  // "CERTIFICAT DE RÉUSSITE" header
  const headerText = "CERTIFICAT DE RÉUSSITE";
  const headerFontSize = 28;
  const headerWidth = helveticaBold.widthOfTextAtSize(headerText, headerFontSize);
  page.drawText(headerText, {
    x: (width - headerWidth) / 2,
    y: height - 90,
    size: headerFontSize,
    font: helveticaBold,
    color: purple,
  });

  // "LearnAI" subheader
  const subText = siteConfig.name;
  const subFontSize = 14;
  const subWidth = helvetica.widthOfTextAtSize(subText, subFontSize);
  page.drawText(subText, {
    x: (width - subWidth) / 2,
    y: height - 115,
    size: subFontSize,
    font: helvetica,
    color: gray,
  });

  // Decorative line separator
  const lineY = height - 135;
  const lineWidth = 200;
  page.drawRectangle({
    x: (width - lineWidth) / 2,
    y: lineY,
    width: lineWidth,
    height: 1.5,
    color: purple,
  });

  // "Décerné à"
  const awardLabel = "Décerné à";
  const awardFontSize = 14;
  const awardWidth = helvetica.widthOfTextAtSize(awardLabel, awardFontSize);
  page.drawText(awardLabel, {
    x: (width - awardWidth) / 2,
    y: height - 180,
    size: awardFontSize,
    font: helvetica,
    color: gray,
  });

  // User name — large and white
  const nameFontSize = Math.min(36, 36 * (30 / Math.max(userName.length, 30)));
  const nameWidth = helveticaBold.widthOfTextAtSize(userName, nameFontSize);
  page.drawText(userName, {
    x: (width - nameWidth) / 2,
    y: height - 225,
    size: nameFontSize,
    font: helveticaBold,
    color: white,
  });

  // "Pour avoir complété avec succès"
  const completedLabel = "Pour avoir complété avec succès";
  const completedFontSize = 14;
  const completedWidth = helvetica.widthOfTextAtSize(completedLabel, completedFontSize);
  page.drawText(completedLabel, {
    x: (width - completedWidth) / 2,
    y: height - 275,
    size: completedFontSize,
    font: helvetica,
    color: gray,
  });

  // Course title in purple
  const courseFontSize = Math.min(24, 24 * (35 / Math.max(courseTitle.length, 35)));
  const courseWidth = helveticaBold.widthOfTextAtSize(courseTitle, courseFontSize);
  page.drawText(courseTitle, {
    x: (width - courseWidth) / 2,
    y: height - 310,
    size: courseFontSize,
    font: helveticaBold,
    color: purple,
  });

  // "Score moyen : X%"
  const scoreText = `Score moyen : ${score}%`;
  const scoreFontSize = 16;
  const scoreWidth = helvetica.widthOfTextAtSize(scoreText, scoreFontSize);
  page.drawText(scoreText, {
    x: (width - scoreWidth) / 2,
    y: height - 355,
    size: scoreFontSize,
    font: helvetica,
    color: lightGray,
  });

  // "Délivré le [date]"
  const dateText = `Délivré le ${date}`;
  const dateFontSize = 12;
  const dateWidth = helvetica.widthOfTextAtSize(dateText, dateFontSize);
  page.drawText(dateText, {
    x: (width - dateWidth) / 2,
    y: height - 385,
    size: dateFontSize,
    font: helvetica,
    color: gray,
  });

  // QR code (bottom right)
  const verifyUrl = `${siteConfig.url}/verify/${verifyCode}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
    width: 200,
    margin: 1,
    color: { dark: "#8f54f0", light: "#12121f" },
  });
  const qrBase64 = qrDataUrl.split(",")[1];
  const qrImage = await pdfDoc.embedPng(Buffer.from(qrBase64, "base64"));
  const qrSize = 80;
  page.drawImage(qrImage, {
    x: width - borderInset - qrSize - 20,
    y: borderInset + 15,
    width: qrSize,
    height: qrSize,
  });

  // Verify URL text (bottom left)
  const verifyFontSize = 9;
  page.drawText(verifyUrl, {
    x: borderInset + 15,
    y: borderInset + 15,
    size: verifyFontSize,
    font: helvetica,
    color: gray,
  });

  return pdfDoc.save();
}
