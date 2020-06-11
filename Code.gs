function ges_data_input() {
  
// Test form url
  var formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZv-RJaptBxb98AanC51o5e4L5ekLgQ9UdYzDHE8FQ0Da32g/formResponse";
  
// Get workSheet  
  var workBook = SpreadsheetApp.getActiveSpreadsheet();
  var workSheet = workBook.getSheetByName("Sheet1");
  
// Get number of rows
  var aValues = workSheet.getRange("A1:A").getValues();
  var numberOfRows = aValues.filter(String).length;
  
// console.log(numberOfRows);
  
// Initialize data field/responses variables   
  var region = "";
  var district = "";
  var schoolName = "";
  var pupilName = "";
  var pupilSex = "";
  var pupilGrade = "";
  var parentNumber = "";
  var teacherNumber = "";
  
// Iterate through and submit a form with responses from each row
  for(i=2; i<=numberOfRows;i++) {
  
    region = workSheet.getRange("A" + i).getDisplayValue();
    district = workSheet.getRange("B" + i).getDisplayValue();
    schoolName = workSheet.getRange("C" + i).getDisplayValue();
    pupilName = workSheet.getRange("D" + i).getDisplayValue();
    pupilSex = workSheet.getRange("E" + i).getDisplayValue();
    pupilGrade = workSheet.getRange("F" + i).getDisplayValue();
    parentNumber = workSheet.getRange("G" + i).getDisplayValue();
    teacherNumber = workSheet.getRange("H" + i).getDisplayValue();
    
    
//  Test form data
    var formData = "?entry.103101066=" + region + "&entry.1021427992=" + district + "&entry.394837872=" + schoolName + "&entry.826391483=" + pupilName + "&entry.848443139=" + pupilSex + "&entry.13745742=" + pupilGrade + "&entry.1321001661=" + parentNumber + "&entry.1714114898=" + teacherNumber;
    

//  Final url which will be used to submit the form automatically   
    var finalURL = formURL + formData;
    
//  console.log(finalURL);
    
    var options = {
      "method" : "post"
    };
    
    UrlFetchApp.fetch(finalURL, options);
    
  }
  
}
