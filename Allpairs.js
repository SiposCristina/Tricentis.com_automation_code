const { chromium } = require('playwright')
const fs = require('fs')
const { execSync } = require('child_process')

let mode = ''

  ; (async () => {
    let browser = ''
    let context = ''
    let page = ''
    if (mode != 'newBrowser') {
      browser = await chromium.connectOverCDP('http://localhost:9222')
      context = await browser.contexts()[0]
      page = await context.pages()[0]
      
      await page.goto('https://sampleapp.tricentis.com/101/app.php')
    } else {
      browser = await chromium.launch({
        headless: false
        
      })

      context = await browser.newContext()
      page = await browser.newPage()
      await page.goto('https://sampleapp.tricentis.com/101/app.php')
    }

    try {
      const data = fs.readFileSync('Allpairs.txt')
      const content = data.toString()
      const lines = content.trim().split('\n')

      const allpairs = [] //an empty array

      for (let index = 1; index < lines.length; index++) {
        const line = lines[index]
        const values = line.trim().split(/\t/)

        let Test_ID = values[0]
        let Make = values[1]
        let KW = parseInt(values[2])
        let Date = values[3]
        let Seats = parseInt(values[4])
        let FuelType = values[5]
        let ListPrice = parseInt(values[6])
        let Mileage = parseInt(values[7])
        let DateOfBirth = values[8]
        let Country = values[9]
        let Occupation = values[10]
        let Hobbies = values[11]
        let InsuranceSum = parseInt(values[12])
        let MeritRating = values[13]
        let DamageInsurance = values[14]
        let OptionalProducts = values[15]
        let CourtesyCar = values[16]

        console.log('Test_ID', Test_ID)
        console.log('Make', Make)
        console.log('KW', KW)
        console.log('Date', Date)
        console.log('Seats', Seats)
        console.log('FuelType', FuelType)
        console.log('ListPrice', ListPrice)
        console.log('Mileage', Mileage)
        console.log('DateOfBirth', DateOfBirth)
        console.log('Country', Country)
        console.log('Occupation', Occupation)
        console.log('Hobbies', Hobbies)
        console.log('InsuranceSum', InsuranceSum)
        console.log('MeritRating', MeritRating)
        console.log('DamageInsurance', DamageInsurance)
        console.log('OptionalProducts', OptionalProducts)
        console.log('CourtesyCar', CourtesyCar)

        await page.getByRole('link', { name: 'Automobile' }).click()
        await page.selectOption('#make', { label: Make })
        await page.locator('#engineperformance').click()
        await page.locator('#engineperformance').fill(KW.toString())
        await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click()
        await page
          .getByRole('textbox', { name: 'MM/DD/YYYY' })
          .fill(Date.toString())
        await page.locator('#numberofseats').selectOption(Seats.toString())
        await page.locator('#fuel').selectOption(FuelType.toString())
        await page.locator('#listprice').click()
        await page.locator('#listprice').fill(ListPrice.toString())
        await page.locator('#annualmileage').click()
        await page.locator('#annualmileage').fill(Mileage.toString())
        await page.getByRole('button', { name: 'Next »' }).click()
        await page.locator('#firstname').click()
        await page.locator('#firstname').fill('Silvia')
        await page.locator('#lastname').click()
        await page.locator('#lastname').fill('Silver')
        await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click()
        await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill(DateOfBirth.toString())
        await page.locator('#country').selectOption(Country.toString())
        await page.locator('#zipcode').click()
        await page.locator('#zipcode').fill('123456')
        await page.locator('#occupation').selectOption(Occupation.toString())
        await page.locator('label').filter({ hasText: Hobbies.toString()}).locator('span').click()
        await page.getByRole('button', { name: 'Next »' }).click()
        await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click()
        await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('12/11/2024')
        await page.locator('#insurancesum').selectOption(InsuranceSum.toString())
        await page.locator('#meritrating').selectOption(MeritRating.toString())
        await page
          .locator('#damageinsurance')
          .selectOption(DamageInsurance.toString())
        await page
          .locator('label')
          .filter({ hasText: OptionalProducts.toString() })
          .locator('span')
          .click()
        await page.locator('#courtesycar').selectOption(CourtesyCar.toString())
        await page.getByRole('button', { name: 'Next »' }).click()

        const options = [
          { name: 'silver', locator: 'first' },
          { name: 'gold', locator: 'nth(1)' },
          { name: 'platinum', locator: 'nth(2)' },
          { name: 'ultimate', locator: 'nth(3)' }
        ]

        let fueltype = await page.evaluate(
          () => document.querySelector('#fuel').value
        )

        console.log('Fuel Options from Web:', fueltype)

        const fuel = {} //empty object
        fuel.screen = fueltype
        fuel.pdf = {}

        let screenoccupation = await page.evaluate(
          () => document.querySelector('#occupation').value
        )
        console.log('Occupation:', screenoccupation)

        const occupation = {}
        occupation.screen = screenoccupation
        occupation.pdf = {}

        let makeoption = await page.evaluate(
          () => document.querySelector('#make').value
        )
        console.log('Make Options from Web:', makeoption)

        const make = {}
        make.screen = makeoption
        make.pdf = {}

        let courtesy = await page.evaluate(
          () => document.querySelector('#courtesycar').value
        )
        console.log('List Price Option from Web', courtesy)

        const courtesycar = {}
        courtesycar.screen = courtesy
        courtesycar.pdf = {}

        let insurance = await page.evaluate(
          () => document.querySelector('#damageinsurance').value
        )
        console.log('Damage Insurance from Web:', insurance)

        const damageinsurance = {}
        damageinsurance.screen = insurance
        damageinsurance.pdf = {}

        let birth = await page.evaluate(() => document.querySelector('#birthdate').value)
        console.log('Birth Date from Web ', birth)

        const birthdate = {}
        birthdate.screen = birth
        birthdate.pdf = {}

        let country = await page.evaluate(()=> document.querySelector('#country').value)
        console.log('Country from Web', country)

        const thecountry = {}
        thecountry.screen = country
        thecountry.pdf = {}



        let insurancesum = await page.evaluate(
          () => document.querySelector('#insurancesum').value
        )
        console.log('Insurance Sum from Web:', insurancesum)

        const insurancesumm = {}
        insurancesumm.screen = insurancesum
        insurancesumm.pdf = {}

        let merit = await page.evaluate(
          () => document.querySelector('#meritrating').value
        )
        console.log('Merit Rating from Web:', merit)

        const meritrating = {}
        meritrating.screen = merit
        meritrating.pdf = {}

        let seats = await page.evaluate(
          () => document.querySelector('#numberofseats').value
        )
        console.log('Number of Seats from Web:', seats)

        const numberofseats = {}
        numberofseats.screen = seats
        numberofseats.pdf = {}

        let manufacture = await page.evaluate(
          () => document.querySelector('#dateofmanufacture').value
        )
        console.log('Date of Manufacture from Web:', manufacture)

        const dateofmanufacture = {}
        dateofmanufacture.screen = manufacture
        dateofmanufacture.pdf = {}

        let mileage = await page.evaluate(
          () => document.querySelector('#annualmileage').value
        )
        console.log('Annual Mileage from web', mileage)

        const annualmileage = {}
        annualmileage.screen = mileage
        annualmileage.pdf = {}

        let protection = await page.evaluate(
          () => document.querySelector('#EuroProtection').checked
        )
        protection = protection == true ? "Yes" : "No" 
        console.log('Euro Protection from Web:', protection)

        const europrotection = {}
        europrotection.screen = protection
        europrotection.pdf = {}

        let legaldefense = await page.evaluate(
          () => document.querySelector('#LegalDefenseInsurance').checked
        )
        legaldefense = legaldefense == true ? "Yes" : "No" 
        console.log('Legal Defence Insurance from web:', legaldefense)

        const legaldefenseinsurance = {}
        legaldefenseinsurance.screen = legaldefense
        legaldefenseinsurance.pdf = {}

        const prices = {}
        prices.screen = {}
        prices.pdf = {}
        prices.screen.silver = await page.textContent('#selectsilver_price', true)
        prices.screen.gold = await page.textContent('#selectgold_price', true)
        prices.screen.platinum = await page.textContent(
          '#selectplatinum_price',
          true
        )
        prices.screen.ultimate = await page.textContent(
          '#selectultimate_price',
          true
        )

        for (const option of options) {
          //iterates over each option in the "options" one by one
          await page.getByRole('link', { name: 'Select Price Option' }).click()
          const spans = await page
            .getByRole('row', { name: 'Select Option' })
            .locator('span')

          if (option.locator === 'first') {
            await spans.first().click()
          } else {
            const ind = parseInt(option.locator.match(/\d+/)[0]) // Extract index from option string
            await spans.nth(ind).click()
          }

          await page.getByTitle('Download Quote').click()
          await page.getByRole('link', { name: 'Select Price Option' }).click()

          const downloadPromise = page.waitForEvent('download')
          await page.getByTitle('Download Quote').click()
          const download = await downloadPromise

          await download.saveAs(
            'C:/code/Tricentis_Insurance/pdf_allpairs/output-' +
            Test_ID +
            '-' +
            option.name +
            '.pdf'
          )
          execSync(
            'pdftotext C:/code/Tricentis_Insurance/pdf_allpairs/output-' +
            Test_ID +
            '-' +
            option.name +
            '.pdf'
          )
          const pdfdata = fs.readFileSync(
            'C:/code/Tricentis_Insurance/pdf_allpairs/output-' +
            Test_ID +
            '-' +
            option.name +
            '.txt'
          )
          const pdfcontent = pdfdata.toString()
          const pdflines = pdfcontent.trim().split('\n')

          await page.getByRole('link', { name: 'Select Price Option' }).click()

          let quotedprice = '***'
          let fueltype = '***'
          let pdfoccupation = '***'
          let pdfmake = '***'
          let pdfcourtesy = '***'
          let pdfinsurance = '***'
          let pdfbirth = '***'
          let pdfcountry = '***'
          let pdfsum = '***'
          let pdfmerit = '***'
          let pdfseats = '***'
          let pdfmanufacture = '***'
          let pdfmileage = '***'
          let pdfprotection = '***'
          let pdflegaldefense = '***'

          for (let pdfindex = 0; pdfindex < pdflines.length; pdfindex++) {
            const pdfline = pdflines[pdfindex]
            if ((result = pdfline.match(/(.*?)\$\s+p\.a\./))) {
              quotedprice = result[1]
            }

            if ((result = pdfline.match(/^\d+\/\d+\/\d+\s+\d+\s+(.*)/))) {
              fueltype = result[1]
            }

            if ((result = pdfline.match(/^Occupation:\s+(.*)/))) {
              pdfoccupation = result[1]
            }

            if ((result = pdfline.match(/Annual Mileage/))) {
              pdfmake = pdflines[pdfindex + 2].trim()
            }

            if ((result = pdfline.match(/^Courtesy Car:\s+(.*)/))) {
              pdfcourtesy = result[1]
            }

            if ((result = pdfline.match(/^Damage Insurance:\s+(.*)/))) {
              pdfinsurance = result[1]
            }

            if ((result = pdfline.match(/^Birthdate:\s+(.*)/))) {
              pdfbirth = result[1]
            }

            if((result = pdfline.match(/^Last Name:\s+\w+\s+Country:\s+(.*)+\s+/))) {   //Last Name: Silver Country: Cuba
              pdfcountry = result[1]
            }

            if ((result = pdfline.match(/^Insurance Sum \[\$\]:\s+(.*)/))) {
              pdfsum = result[1]
            }

            if ((result = pdfline.match(/^Merit Rating:\s+(.*)/))) {
              pdfmerit = result[1]
            }

            if ((result = pdfline.match(/^\d+\/\d+\/\d+\s+(\d)+\s+/))) {     //2/1/1982 2 Electric Power
              pdfseats = result[1]
            }

            if ((result = pdfline.match(/^(.*)\s+\d+\s+\w+/))) {
              pdfmanufacture = result[1]
            }

            if ((result = pdfline.match(/^\s*\d+\s+(\d+)\s*$/))) {
              pdfmileage = result[1]
            }

            if ((result = pdfline.match(/^Euro Protection:\s+(.*)+\s+/))) {
              pdfprotection = result[1]
            }

            if ((result = pdfline.match(/^Legal Defense Insurance:\s(.*)+\s+/))) {
              pdflegaldefense = result[1]
            } else {
              pdflegaldefense = ''
            }
          }
          prices.pdf[option.name] = quotedprice
          fuel.pdf[option.name] = fueltype
          occupation.pdf[option.name] = pdfoccupation
          make.pdf[option.name] = pdfmake
          courtesycar.pdf[option.name] = pdfcourtesy
          damageinsurance.pdf[option.name] = pdfinsurance
          birthdate.pdf[option.name] = pdfbirth
          thecountry.pdf[option.name] = pdfcountry
          insurancesumm.pdf[option.name] = pdfsum
          meritrating.pdf[option.name] = pdfmerit
          numberofseats.pdf[option.name] = pdfseats
          dateofmanufacture.pdf[option.name] = pdfmanufacture
          annualmileage.pdf[option.name] = pdfmileage
          europrotection.pdf[option.name] = pdfprotection
          legaldefenseinsurance.pdf[option.name] = pdflegaldefense
        }

        allpairs.push({
          Test_ID: Test_ID,
          make: make,
          fueltype: fuel,
          birthdate: birthdate,
          country: thecountry,
          occupation: occupation,
          insurance: damageinsurance,
          dateofmanufacture: dateofmanufacture,
          seats: numberofseats,
          'annual mileage': annualmileage,
          'insurancesum': insurancesumm,
          'merit rating': meritrating,
          'legal defense insurance': legaldefenseinsurance,
          europrotection: europrotection,
          courtesycar: courtesycar,
          prices: prices
        })

        await page.screenshot({ path: `Allpairs-${Test_ID}.png` })

        fs.writeFileSync(
          'AllPairs.json',
          JSON.stringify(allpairs, null, 2),
          err => {
            //converts the JS object allprices into a JSON string with two-space indentation
            if (err) {
              console.error(err)
            } else {
              // file written successfully
            }
          }
        );
       
      }

      const jsonData = fs.readFileSync("AllPairs.json", "utf8");  //read the content into a variable
      console.log(jsonData);
      const dataprices = JSON.parse(jsonData); //parse the json into an Object => a= allprices


      const metals = [                                       //use a variable called metal
        { "name": "silver" },
        { "name": "gold" },
        { "name": "platinum" },
        { "name": "ultimate" }
      ];

      //console.log(dataprices);    
      for (const allquotes of dataprices) {

        for (const metal of metals)  //use a loop for the metal
        {
          //console.log("Metal name:", metal.name);


          for (const type in allquotes)                            //iterates over the properties of each test
          {
            if (type == "Test_ID") { continue }
            if (type == "prices") {
              if (allquotes[type].screen[metal.name].toString() != allquotes[type].pdf[metal.name].toString()) {
                console.log(type + ": " + "FAIL" + " " + allquotes[type].screen[metal.name].toString() + " " + allquotes[type].pdf[metal.name].toString())
              }
            }
            else {

              if (allquotes[type].screen.toString() != allquotes[type].pdf[metal.name].toString()) {
                console.log(type + ": " + "FAIL" + " " + allquotes[type].screen.toString() + " " + allquotes[type].pdf[metal.name].toString())
              }
            }
          }

        }
      }
    } catch (error) {
      console.log('Error occured', error)
    } finally {
      await browser.close()
    }
  })()

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
