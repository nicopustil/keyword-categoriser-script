# Keyword Categoriser Script for Google Sheets

This script helps marketers automatically categorise keyword lists in Google Sheets. It tags each keyword with:

- **Services Provided** (e.g., SEO, PPC, Web Design)
- **Type of Provider** (e.g., Agency, Consultant)
- **Type of Organisation** (e.g., Firm, Company)

## 🔧 How to use

1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste the contents of `keyword-categoriser.gs`
4. Save and run the function `updateSheetData`

## 📋 Requirements

- Your sheet must have the following columns:
  - Column A: Type of Organisation (to be filled)
  - Column C: Services Provided (to be filled)
  - Column D: Type of Provider (to be filled)
  - Column E: Keyword (already filled)

## 💡 Why it’s useful

This script speeds up keyword research for SEO, PPC, and content planning by auto-organising data.

## License

MIT License
