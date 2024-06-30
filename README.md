# Tricentis.com_automation_code

<h3>Product Information</h3><br> <p> The Tricentis Application is a vehicle insurance calculator and can be used to create quotes for various vehicle types such as Automobiles, Trucks, Motorcycles, and Campers.</p>

<h3>Description</h3><br> <p>The JavaScript code automates interactions with the Tricentis web application using Playwright. The script navigates to the web page “https://sampleapp.tricentis.com/101/app.php” and then reads data from the “OFAT.txt” and “Allpairs.txt files”, which contain tab-separated values. The One Factor at a Time (OFAT) technique is used to identify which fields influence the insurance quote, while the Pairwise testing technique generates all possible combinations of inputs. Each line of the file is parsed into variables representing different form fields.<br> 
  
<p>The script fills out the fields on the application using the parsed data and performs multiple interactions, including selecting options, filling text fields, and clicking buttons. After filling in or selecting all mandatory fields, the script downloads the selected quote in PDF format. Then it extracts the data from the web page and PDF files using the “pdftotext” command-line utility to convert the PDF files to plain text. The extracted data from the application and the PDFs are compared to ensure consistency.</p><br>
Next, the script takes screenshots for each form submission and saves them with the filenames containing the test ID. JSON files “OFAT.json” and “Allpairs.json” are written, containing all extracted data. The script reads these JSON files and verifies that the data from the application matches the data from the PDF for silver, gold, platinum, and ultimate price options. If there are any discrepancies, they are logged into the console. Also, the errors are caught and logged during the execution.<br>
</p>
<h3>Results</h3><br>
<p>The script successfully automates the currency conversion process and captures screenshots of the conversion results. These screenshots are saved in the local directory, with each file named according to the currency pair it represents (e.g., “XE-USD-EUR.png”).</p>
<p>Find below the saved screenshots of the generated results for currency.json file.</p>
