# Tricentis.com_automation_code

<h3>Product Information</h3><br> <p> The Tricentis Application is a vehicle insurance calculator and can be used to create quotes for various vehicle types such as Automobiles, Trucks, Motorcycles, and Campers.</p>

<h3>Description</h3><br> <p>The JavaScript code automates interactions with the Tricentis web application using Playwright. The script navigates to the web page “https://sampleapp.tricentis.com/101/app.php” and reads data from the “OFAT.txt” and “Allpairs.txt” files, which contain tab-separated values. The One Factor at a Time (OFAT) technique identifies which fields influence the insurance quote, while the Pairwise testing technique generates all possible pairings of designated inputs. Each line of these files is parsed into variables representing various form fields on the application. An empty array is initialized to store the data extracted from each line.<br> 
  
<p>The script fills out the fields on the application using the parsed data and performs multiple interactions, including selecting options, filling text fields, and clicking buttons. After completing all mandatory fields, four types of prices (Silver, Gold, Platinum, and Gold) are displayed. To select a quote type, the script clicks on the “Select Price Option”, and initiates the download by clicking on the “Download Quote” button.</p><br>
The downloaded files are saved to a local file, under names that combine the TEST_ID and the selected quote type (e.g. “output-1-silver.pdf”, “output-1-gold.pdf”). A screenshot is taken and saved, reflecting the technique name and the TEST_ID (e.g. “Ofat-1.png”, “Allpairs-1.png”).<br>
</p>
<p>The script extracts various values from the webpage such as fuel type, occupation, insurance sum, price option, etc. storing each category in objects named accordingly (e.g., “fuel”, “occupation”, “insurancesumm”, “prices”). These objects are pushed into the empty initialized array, which is subsequently stored in a JSON file (“OFAT.json”, “Allprices.json”).</p><br>

<p>The script uses “pdftotext”, a command-line tool, to extract the data from the PDF file and to convert it to plain text. The extracted data from the webpage and the PDFs are compared to ensure consistency and accuracy. It verifies that data extracted from the application matches the data extracted from the PDF files for each insurance quote type (Silver, Gold, Platinum, and Ultimate). Any discrepancies discovered during this verification process are logged into the console. Also, the errors are caught and logged during the execution.</p><br>

<h3>Results</h3><br>
<p>The automated script was executed successfully for interacting with the Tricentis web application. It navigated to the application, processed data from external files, automated interactions with input fields, downloaded PDF quotes, extracted and compared data from the webpage and the PDFs, captured screenshots, and saved extracted data to JSON files. The script completed all tasks efficiently and accurately, confirming its successful execution for the fields printed on the PDF files.</p><br>

<p>“Engine Performance” and “Hobbies” are not printed on the PDF file, although they are mandatory fields. This makes it impossible to compare the data filled in on the webpage with the data printed on the PDF.</p><br>
<p>The downloaded PDF files and the text files from the OFAT and the Pairwise technique results are saved in the OFAT and AllPairs folders.</p>
