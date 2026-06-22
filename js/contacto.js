// ============================================
// EMISAB - FORMULARIO DE CONTACTO
// Google Apps Script
// ============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    var data = e.parameter;
    var nombre = data.nombre || '';
    var telefono = data.telefono || '';
    var email = data.email || '';
    var mensaje = data.mensaje || '';
    
    sheet.appendRow([
      new Date(),
      nombre,
      telefono,
      email,
      mensaje
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Consulta enviada correctamente' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}