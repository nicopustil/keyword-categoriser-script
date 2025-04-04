
function updateSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  var keywordRange = sheet.getRange('E2:E' + lastRow);
  var keywords = keywordRange.getValues();
  var servicesRange = sheet.getRange('C2:C' + lastRow);
  var providerRange = sheet.getRange('D2:D' + lastRow);
  var organizationRange = sheet.getRange('A2:A' + lastRow);

  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i][0].toLowerCase();
    var service = '';
    var provider = '';
    var organization = '';

    if (keyword.includes('google')) {
      service = 'Google';
    } else if (keyword.includes('facebook')) {
      service = 'Facebook';
    } else if (keyword.includes('linkedin')) {
      service = 'LinkedIn';
    } else if (keyword.includes('seo') || keyword.includes('search engine optimization')) {
      service = 'SEO';
    } else if (keyword.includes('ppc')) {
      service = 'PPC';
    } else if (keyword.includes('content marketing')) {
      service = 'Content Marketing';
    } else if (keyword.includes('lead generation')) {
      service = 'Lead Generation';
    } else if (keyword.includes('social media marketing')) {
      service = 'Social Media Marketing';
    } else if (keyword.includes('video marketing')) {
      service = 'Video Marketing';
    } else if (keyword.includes('website') || keyword.includes('web design')) {
      service = 'Website';
    } else if (keyword.includes('digital marketing') || keyword.includes('internet marketing')) {
      service = 'Digital Marketing';
    } else if (keyword.includes('advertising')) {
      service = 'Advertising';
    } else if (keyword.includes('pr') || keyword.includes('public relations')) {
      service = 'PR';
    } else if (keyword.includes('marketing') && !keyword.includes('seo') && !keyword.includes('ppc')) {
      service = 'Marketing';
    }

    if (keyword.includes('agency') || keyword.includes('agencies')) {
      provider = 'Agency';
    } else if (keyword.includes('consultant') || keyword.includes('consultants')) {
      provider = 'Consultant';
    } else if (keyword.includes('company') || keyword.includes('companies')) {
      provider = 'Company';
    } else if (keyword.includes('expert') || keyword.includes('experts')) {
      provider = 'Expert';
    } else if (keyword.includes('services') || keyword.includes('service')) {
      provider = 'Services';
    } else if (keyword.includes('specialist') || keyword.includes('specialists')) {
      provider = 'Specialist';
    } else if (keyword.includes('firm') || keyword.includes('firms')) {
      organization = 'Firm';
      provider = '';
    }

    if (organization === 'Firm') {
      organizationRange.getCell(i + 1, 1).setValue(organization);
    }

    servicesRange.getCell(i + 1, 1).setValue(service);
    providerRange.getCell(i + 1, 1).setValue(provider);
  }
}
