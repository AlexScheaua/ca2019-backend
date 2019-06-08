const Exceljs = require('exceljs')
const fs = require('fs');

function arrayToObject(){ //din array in obiect
    for(let i=0;i<judete.length; i++){
        if(judeteObj[judete[i][0]]===undefined){
            judeteObj[judete[i][0]] = {};
        }
        if(judeteObj[judete[i][0]][judete[i][1]]===undefined){
            judeteObj[judete[i][0]][judete[i][1]] = [];
        }  
        judeteObj[judete[i][0]][judete[i][1]].push(judete[i][2]);
    }
    return JSON.stringify(judeteObj);
}

let judeteObj = {};

// function loadExcel(file) {
//     let judetJson = {};
//     let oraseJson = {};
//     let spitaleJson = [];

//     let workbook = new Exceljs.Workbook();
//     workbook.xlsx.readFile(file)
//         .then(() => {
//             var worksheet = workbook.getWorksheet('Lista spitale');
//             worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
//                 //   console.log("Row " + rowNumber + " = " + row.values[2],row.values[4],row.values[5]);
//                 if (rowNumber !== 1) {
//                     spitaleJson.push([row.values[5], row.values[4], row.values[2]]);
//                 }


//             });
//         }).then(() => {

//             fs.writeFile("./test.json", JSON.stringify(spitaleJson), function (err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
//             })

//         })
//     }
// loadExcel('./src/excel/spitale.xls.xlsx')

let judete = [
    [
        "Alba",
        "Abrud",
        "SPITALUL ORĂȘENESC ,Dr. Alexandru Borza\" ABRUD"
    ],
    [
        "Alba",
        "Aiud",
        "SPITALUL DE PNEUMOFTIZIOLOGIE AIUD"
    ],
    [
        "Alba",
        "Aiud",
        "SPITALUL MUNICIPAL AIUD"
    ],
    [
        "Alba",
        "Alba Iulia",
        "KIO ENERGY SRL"
    ],
    [
        "Alba",
        "Alba Iulia",
        "SC CMC PRAXIS SRL"
    ],
    [
        "Alba",
        "Alba Iulia",
        "SC OPTIC MEDICAL LINE SRL"
    ],
    [
        "Alba",
        "Alba Iulia",
        "SPITALUL JUDEȚEAN DE URGENȚĂ ALBA IULIA"
    ],
    [
        "Alba",
        "Blaj",
        "SPITAL MUNICIPAL BLAJ"
    ],
    [
        "Alba",
        "Câmpeni",
        "SPITALUL DE BOLI CRONICE CÎMPENI"
    ],
    [
        "Alba",
        "Câmpeni",
        "SPITALUL ORASENESC CAMPENI"
    ],
    [
        "Alba",
        "Cugir",
        "SPITALUL ORASENESC CUGIR"
    ],
    [
        "Alba",
        "Petrești",
        "SC CENTRUL MEDICAL LAURA CĂTANĂ SRL"
    ],
    [
        "Alba",
        "Sebeș",
        "SPITALUL MUNICIPAL SEBEȘ"
    ],
    [
        "Brașov",
        "Brașov",
        "ASOCIAȚIA CENTRU REZIDENȚIAL PENTRU VÂRSTNICI MARIA"
    ],
    [
        "Brașov",
        "Brașov",
        "CLINICILE ICCO ORTOPEDIE SRL"
    ],
    [
        "Brașov",
        "Brașov",
        "FUNDAȚIA HOSPICE CASA SPERANȚEI"
    ],
    [
        "Brașov",
        "Brașov",
        "ONCO CARD SRL - CENTRUL DE DIAGNOSTIC ŞI TRATAMENT ONCOLOGIC"
    ],
    [
        "Brașov",
        "Brașov",
        "SC CENTRUL MEDICAL UNIREA SRL"
    ],
    [
        "Brașov",
        "Brașov",
        "SC CLINICA SANTE VIE SRL"
    ],
    [
        "Brașov",
        "Brașov",
        "SC CLINICILE ICCO SRL"
    ],
    [
        "Brașov",
        "Brașov",
        "SC POLICLINICA DE DIAGNOSTIC RAPID SA"
    ],
    [
        "Brașov",
        "Brașov",
        "SC POLIMED DACIA SRL"
    ],
    [
        "Brașov",
        "Brașov",
        "SC RUR MEDICAL SA"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITAL CLINIC JUDEŢEAN DE URGENŢĂ BRAŞOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITAL CLINIC PNEUMOFTIZIOLOGIE BRAȘOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL CLINIC DE BOLI INFECȚIOASE BRAȘOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL CLINIC DE OBSTETRICA GINECOLOGIE \"DR.I.A.SBARCEA\""
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL CLINIC DE PSIHIATRIE ȘI NEUROLOGIE BRAȘOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL CLINIC DE URGENTA PENTRU COPII BRAȘOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL GENERAL C.F. BRASOV"
    ],
    [
        "Brașov",
        "Brașov",
        "SPITALUL MILITAR DE URGENŢĂ \"REGINA MARIA\" BRAŞOV"
    ],
    [
        "Brașov",
        "Brașov",
        "TEO HEALTH S.A"
    ],
    [
        "Brașov",
        "Brașov",
        "VITALMED CENTER SRL – UNIT. SANITARA PRIVATA PATURI"
    ],
    [
        "Brașov",
        "Codlea",
        "SPITALUL MUNICIPAL CODLEA"
    ],
    [
        "Brașov",
        "Făgăraș",
        "SPITALUL MUNICIPAL DR. AUREL TULBURE FĂGĂRAȘ"
    ],
    [
        "Brașov",
        "Predeal",
        "SANATORIUL DE NEVROZE PREDEAL"
    ],
    [
        "Brașov",
        "Rupea",
        "SPITAL ORASENESC RUPEA"
    ],
    [
        "Brașov",
        "Săcele",
        "Spitalul Municipal Sacele"
    ],
    [
        "Brașov",
        "Victoria",
        "SAM-SERVICII AVANSATE MEDICALE- SRL"
    ],
    [
        "Brașov",
        "Zărnești",
        "SPITALUL DR. CAIUS TIBERIU SPÂRCHEZ"
    ],
    [
        "Covasna",
        "Baraolt",
        "SPITAL ORĂȘENESC BARAOLT"
    ],
    [
        "Covasna",
        "Covasna",
        "SPITALUL DE RECUPERARE CARDIOVASCULARA DR.BENEDEK GEZA"
    ],
    [
        "Covasna",
        "Sfântu Gheorghe",
        "SPITALUL JUDEȚEAN DE URGENȚĂ DR.FOGOLYÁN KRISTÓF"
    ],
    [
        "Covasna",
        "Târgu Secuiesc",
        "SPITALUL MUNICIPAL TARGU SECUIESC"
    ],
    [
        "Harghita",
        "Gheorgheni",
        "SPITAL MUNICIPAL GHEORGHENI"
    ],
    [
        "Harghita",
        "Miercurea Ciuc",
        "SPITAL JUDEŢEAN DE URGENŢĂ MIERCUREA CIUC"
    ],
    [
        "Harghita",
        "Odorheiu Secuiesc",
        "SPITALUL MUNICIPAL ODORHEIU SECUIESC"
    ],
    [
        "Harghita",
        "Toplița",
        "SPITALUL MUNICIPAL TOPLITA"
    ],
    [
        "Harghita",
        "Tulgheș",
        "SPITALUL DE PSIHIATRIE TULGHES"
    ],
    [
        "Mureș",
        "Luduș",
        "SPITALUL ORASENESC,,DR.VALER RUSSU''LUDUS"
    ],
    [
        "Mureș",
        "Reghin",
        "SPITALUL MUNICIPAL DR.EUGEN NICOARĂ REGHIN"
    ],
    [
        "Mureș",
        "Sângeorgiu de Pădure",
        "SPITAL ORASENESC SANGEORGIU DE PADURE"
    ],
    [
        "Mureș",
        "Sighișoara",
        "SC RALMED CENTRU MEDICAL SRL"
    ],
    [
        "Mureș",
        "Sighișoara",
        "SPITALUL MUNICIPAL SIGHIŞOARA"
    ],
    [
        "Mureș",
        "Sovata",
        "SPITALUL SOVATA-NIRAJ"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "CARDIO MED S.R.L. TÂRGU MUREȘ"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "CENTRUL MEDICAL GALENUS"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "INSTITUTUL DE URGENŢĂ PENTRU BOLI CARDIOVASCULARE ŞI TRANSPLANT TÂRGU MUREŞ"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "S.C. COSAMEXT S.R.L.-CENTRUL MEDICAL PULS-SPITAL PRIVAT"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "S.C. NOVA VITA HOSPITAL S.A."
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "SC ACTAMEDICA SRL - STRUCTURA SPITALIZARE DE ZI"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "SC CENTRU MEDICAL ENDO-ATROSCOPIA SRL"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "SPITAL - CENTRUL MEDICAL TOPMED"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ TÂRGU MUREȘ"
    ],
    [
        "Mureș",
        "Târgu Mureș",
        "SPITALUL CLINIC JUDEŢEAN MUREŞ"
    ],
    [
        "Mureș",
        "Târnăveni",
        "SPITALUL MUNICIPAL \"DR. GHEORGHE MARINESCU\""
    ],
    [
        "Sibiu",
        "Agnita",
        "SPITALUL ORĂȘENESC AGNITA"
    ],
    [
        "Sibiu",
        "Cisnădie",
        "SPITALUL ORĂȘENESC CISNĂDIE"
    ],
    [
        "Sibiu",
        "Laslea",
        "CENTRUL MEDICAL DE RECUPERARE ȘI ÎNGRIJIRI PALIATIVE"
    ],
    [
        "Sibiu",
        "Mediaș",
        "SPITALUL MUNICIPAL MEDIAȘ"
    ],
    [
        "Sibiu",
        "Sibiu",
        "CENTRUL DE INGRIJIRE PALIATIVA \"HOSPICE\" -ASOCIATIA \"DR.CARL WOLFF\""
    ],
    [
        "Sibiu",
        "Sibiu",
        "S.C.CLINICA POLISANO S.R.L."
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL CLINIC DE PEDIATRIE SIBIU"
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ SIBIU"
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL DE PNEUMOFTIZIOLOGIE SIBIU"
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL DE PSIHIATRIE \"DR. GHEORGHE PREDA\" SIBIU"
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL GENERAL C.F. SIBIU"
    ],
    [
        "Sibiu",
        "Sibiu",
        "SPITALUL MILITAR DE URGENTA \"DR. ALEXANDRU AUGUSTIN\" SIBIU"
    ],
    [
        "București",
        "București",
        "ASOCIAȚIA CENTRUL DE ÎNGRIJIRE CASA SUTER - UNITATE SANITARĂ CU PATURI - ÎNGRIJIRI PALEATIVE"
    ],
    [
        "București",
        "București",
        "BIODERM MEDICAL CENTER SRL"
    ],
    [
        "București",
        "București",
        "CENTRUL CLINIC DE BOLI REUMATISMALE \"DR. ION STOIA\""
    ],
    [
        "București",
        "București",
        "CENTRUL DE DIAGNOSTIC SI TRATAMENT PROVITA SRL"
    ],
    [
        "București",
        "București",
        "CENTRUL DE EVALUARE ŞI TRATAMENT A TOXICODEPENDENŢELOR PENTRU TINERI SF. STELIAN"
    ],
    [
        "București",
        "București",
        "CENTRUL MEDICAL SANATATEA TA"
    ],
    [
        "București",
        "București",
        "CENTRUL NAŢIONAL CLINIC DE RECUPERARE NEUROPSIHOMOTORIE COPII \"DR. NICOLAE ROBĂNESCU\""
    ],
    [
        "București",
        "București",
        "CLINICA MEDICALA HIPOCRAT 2000 - SPITALUL DE RECUPERARE MEDICALA (SEDIUL FANTANICA)"
    ],
    [
        "București",
        "București",
        "CREȘTINĂ MEDICALĂ MUNPOSAN'94 SRL"
    ],
    [
        "București",
        "București",
        "Fundatia Dr. Victor Babes"
    ],
    [
        "București",
        "București",
        "FUNDAȚIA ”BUCURIA AJUTORULUI” - CENTRU MEDICAL DE INGRIJIRI PALIATIVE"
    ],
    [
        "București",
        "București",
        "HIFU TERRAMED CONFORMAL S.R.L."
    ],
    [
        "București",
        "București",
        "IMUNOCLASS SRL"
    ],
    [
        "București",
        "București",
        "INSTITUTUL CLINIC FUNDENI"
    ],
    [
        "București",
        "București",
        "INSTITUTUL DE FONOAUDIOLOGIE ȘI CHIRURGIE FUNCȚIONALĂ ORL „PROF. DR. DORIN HOCIOTĂ”"
    ],
    [
        "București",
        "București",
        "INSTITUTUL DE PNEUMOFTIZIOLOGIE \"MARIUS NASTA\""
    ],
    [
        "București",
        "București",
        "INSTITUTUL DE URGENȚĂ PENTRU BOLI CARDIOVASCULARE „PROF. DR. C.C.ILIESCU”"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NATIONAL DE GERONTOLOGIE SI GERIATRIE \"ANA ASLAN\""
    ],
    [
        "București",
        "București",
        "INSTITUTUL NATIONAL DE NEUROLOGIE SI BOLI NEUROVASCULARE"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NAȚIONAL DE BOLI INFECȚIOASE PROF. DR. MATEI BALȘ, BUCUREȘTI"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NAȚIONAL DE DIABET, NUTRIȚIE ȘI BOLI METABOLICE „PROF. DR. NICOLAE PAULESCU”"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NAȚIONAL DE ENDOCRINOLOGIE C.I. PARHON, BUCUREȘTI"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NAȚIONAL DE RECUPERARE, MEDICINĂ FIZICĂ ȘI BALNEOCLIMATOLOGIE"
    ],
    [
        "București",
        "București",
        "INSTITUTUL NAȚIONAL PENTRU SĂNĂTATEA MAMEI ȘI COPILULUI \"ALESSANDRESCU-RUSESCU\""
    ],
    [
        "București",
        "București",
        "INSTITUTUL ONCOLOGIC \"PROF. DR. AL. TRESTIOREANU\" BUCURESTI"
    ],
    [
        "București",
        "București",
        "MED LIFE SA"
    ],
    [
        "București",
        "București",
        "MEDICOVER SRL"
    ],
    [
        "București",
        "București",
        "NUTRILIFE SRL"
    ],
    [
        "București",
        "București",
        "OVERMED MEDICAL CENTER SRL"
    ],
    [
        "București",
        "București",
        "PENITENCIARUL SPITAL BUCURESTI - RAHOVA"
    ],
    [
        "București",
        "București",
        "S.C. CENTRUL MEDICAL UNIREA SRL"
    ],
    [
        "București",
        "București",
        "S.C. CLINICA ANGIOMED S.R.L."
    ],
    [
        "București",
        "București",
        "S.C. CLINICA MEDICALA ”HIPOCRAT 2000” SRL UNITATE SANITARĂ PRIVATĂ CU PATURI (SEDIUL RAHOVA)"
    ],
    [
        "București",
        "București",
        "S.C. PROMED SYSTEM S.R.L.- punct de lucru Spital Wellborn Militari Bucuresti"
    ],
    [
        "București",
        "București",
        "SC AFFIDEA ROMÂNIA SRL"
    ],
    [
        "București",
        "București",
        "SC BAU M.A.N. CONSTRUCT SRL"
    ],
    [
        "București",
        "București",
        "SC BROTAC MEDICAL CENTER SRL"
    ],
    [
        "București",
        "București",
        "SC CENTRUL MEDICAL POLICLINICO DI MONZA SRL"
    ],
    [
        "București",
        "București",
        "SC CLINICA NEWMEDICS SRL"
    ],
    [
        "București",
        "București",
        "SC DELTA HEALTH CARE SRL"
    ],
    [
        "București",
        "București",
        "SC Eligon Pharma SRL"
    ],
    [
        "București",
        "București",
        "SC EUROCLINIC HOSPITAL SA"
    ],
    [
        "București",
        "București",
        "SC FOCUS LAB PLUS SRL"
    ],
    [
        "București",
        "București",
        "SC GENESYS FERTILITY CENTER SRL"
    ],
    [
        "București",
        "București",
        "SC GRAL MEDICAL SRL"
    ],
    [
        "București",
        "București",
        "SC HIPERDIA SA"
    ],
    [
        "București",
        "București",
        "SC LAURUS MEDICAL SRL"
    ],
    [
        "București",
        "București",
        "SC LOTUS-MED SRL"
    ],
    [
        "București",
        "București",
        "SC MEDICOVER HOSPITALS SRL"
    ],
    [
        "București",
        "București",
        "SC MEDLIFE SA BUCUREŞTI- SUCURSALA BUCUREŞTI"
    ],
    [
        "București",
        "București",
        "SC SANADOR SRL"
    ],
    [
        "București",
        "București",
        "SC SANAMED HOSPITAL SRL"
    ],
    [
        "București",
        "București",
        "SC TINOS CLINIC SRL"
    ],
    [
        "București",
        "București",
        "SPITAL CLINIC \"DR. I.CANTACUZINO\""
    ],
    [
        "București",
        "București",
        "SPITAL PRIVAT CU AMBULATORIU DE SPECIALITATE,LABORATOR FIV,-MARCA SPITAL WELLBORN,APARTINE SC PROMED SYSTEM SRL"
    ],
    [
        "București",
        "București",
        "SPITALUL \"PROF. DR. CONSTANTIN ANGELESCU\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC \"PROF.DR. TH. BURGHELE\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC \"SF. MARIA\" BUCURESTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC CF NR 2 BUCURESTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC COLENTINA - SPITAL DE ADULȚI ȘI AMBULATORIU DE SPECIALITATE"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC COLTEA"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE BOLI INFECȚIOASE SI TROPICALE ”DR.VICTOR BABEȘ”"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE CHIRURGIE ORO-MAXILO-FACIALĂ \"PROF. DR. DAN THEODORESCU\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE COPII \"DR. VICTOR GOMOIU\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE NEFROLOGIE \"DR. CAROL DAVILA\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE OBSTETRICA - GINECOLOGIE \" PROF. DR. PANAIT SIRBU \""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE ORTOPEDIE, TRAUMATOLOGIE SI TBC OSTEOARTICULAR FOISOR"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE PSIHIATRIE „PROF. DR. ALEXANDRU OBREGIA”"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENȚĂ \" BAGDASAR - ARSENI\""
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ \"SFÂNTUL IOAN\" BUCURESTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ \"SFÂNTUL PANTELIMON\", BUCUREŞTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ “PROF.DR. AGRIPPA IONESCU”"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ BUCUREŞTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ DE CHIRURGIE PLASTICĂ, REPARATORIE ŞI ARSURI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENŢĂ PENTRU COPII ,,M.S.CURIE''"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENȚĂ PENTRU COPII „GRIGORE ALEXANDRESCU”"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC DE URGENȚE OFTALMOLOGICE– Spital de Specialitate si Ambulatoriu Integrat cu Cabinete de Specialitate"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC FILANTROPIA BUCURESTI"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ ILFOV"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC NICOLAE MALAXA"
    ],
    [
        "București",
        "București",
        "SPITALUL CLINIC NR.1 C.F. WITTING"
    ],
    [
        "București",
        "București",
        "SPITALUL DE BOLI CRONICE \"SF.LUCA\""
    ],
    [
        "București",
        "București",
        "SPITALUL DE PNEUMOFTIZIOLOGIE \"SF STEFAN\""
    ],
    [
        "București",
        "București",
        "SPITALUL DE PSIHIATRIE TITAN ''DR. CONSTANTIN GORGOS''"
    ],
    [
        "București",
        "București",
        "SPITALUL DE URGENȚĂ AL MAI ”PROF.DR.D.GEROTA”"
    ],
    [
        "București",
        "București",
        "SPITALUL UNIVERSITAR DE URGENTA BUCURESTI"
    ],
    [
        "București",
        "București",
        "SPITALUL UNIVERSITAR DE URGENTA MILITAR CENTRAL \"DR. CAROL DAVILA\""
    ],
    [
        "București",
        "București",
        "SPITALUL UNIVERSITAR DE URGENȚĂ ELIAS"
    ],
    [
        "București",
        "București",
        "VICTORIA MEDICAL CENTER SRL"
    ],
    [
        "București",
        "București",
        "WEST EYE HOSPITAL SRL"
    ],
    [
        "București",
        "București",
        "CENTRUL MEDICAL DE DIAGNOSTIC,TRATAMENT AMBULATORIU SI MEDICINA PREVENTIVĂ - BUCUREȘTI"
    ],
    [
        "București",
        "București",
        "SAPIENS MEDICAL CENTER SRL"
    ],
    [
        "Ilfov",
        "Bălăceanca",
        "SPITALUL DE PSIHIATRIE EFTIMIE DIMANDESCU BĂLĂCEANCA"
    ],
    [
        "Ilfov",
        "Buftea",
        "INTERNATIONAL MEDICAL CENTER SRL"
    ],
    [
        "Ilfov",
        "Buftea",
        "SPITALUL DE OBSTETRICA GINECOLOGIE BUFTEA"
    ],
    [
        "Ilfov",
        "Jilava",
        "PENITENCIARUL-SPITAL BUCURESTI-JILAVA"
    ],
    [
        "Ilfov",
        "Otopeni",
        "RTC RADIOLOGY THERAPEUTIC CENTER"
    ],
    [
        "Ilfov",
        "Otopeni",
        "SPITALUL OXXYGENE MED PLUS SRL"
    ],
    [
        "Ilfov",
        "Pantelimon",
        "SC MNT HEALTHCARE EUROPE SRL"
    ],
    [
        "Ilfov",
        "Voluntari",
        "FUNDAŢIA SF. IRINA - CENTRU DE ÎNGRIJIRI PALIATIVE"
    ],
    [
        "Ilfov",
        "Corbeanca",
        "SC CARDIOREC SRL"
    ],
    [
        "Bacău",
        "Agăș",
        "S.C. BIOS PALAGHIA S.RL"
    ],
    [
        "Bacău",
        "Agăș",
        "SC CIN MED SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "ASOCIAȚIA LUMINA - CENTRUL DE ÎNGRIJIRI PALIATIVE PENTRU COPII"
    ],
    [
        "Bacău",
        "Bacău",
        "CENTRUL MEDICAL CONSTANTIN"
    ],
    [
        "Bacău",
        "Bacău",
        "S.C. CENTRUL MEDICAL UNIREA S.R.L."
    ],
    [
        "Bacău",
        "Bacău",
        "S.C. CLINICA PALADE S.R.L."
    ],
    [
        "Bacău",
        "Bacău",
        "S.C. PRORENAL S.R.L. - CLINICA MEDICALĂ"
    ],
    [
        "Bacău",
        "Bacău",
        "SC CABINET MEDICAL BOANA SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SC CLINIC GROUP SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SC CMI DR PLETEA NOEMI SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SC GTL MEDICAL CLINIC SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SC MINIMED SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SC NEW CENTRAL MED SRL"
    ],
    [
        "Bacău",
        "Bacău",
        "SPITALUL DE PNEUMOFTIZIOLOGIE BACĂU"
    ],
    [
        "Bacău",
        "Bacău",
        "SPITALUL JUDEȚEAN DE URGENȚĂ BACĂU"
    ],
    [
        "Bacău",
        "Bacău",
        "UNITATE CU SPITALIZARE DE ZI MEDICALTEST"
    ],
    [
        "Bacău",
        "Buhuși",
        "SPITALUL ORĂȘENESC BUHUȘI"
    ],
    [
        "Bacău",
        "Comănești",
        "SC CIM MEDICAL SRL"
    ],
    [
        "Bacău",
        "Comănești",
        "SPITALUL ORASENESC\"IOAN LASCAR\"COMANESTI"
    ],
    [
        "Bacău",
        "Dărmănești",
        "S.C. MUNTEANU S.R.L."
    ],
    [
        "Bacău",
        "Moinești",
        "SC MALP SRL"
    ],
    [
        "Bacău",
        "Moinești",
        "SPITALUL MUNICIPAL DE URGENȚĂ MOINEȘTI"
    ],
    [
        "Bacău",
        "Onești",
        "SPITALUL MUNICIPAL,,SF.IERARH DR.LUCA,,ONESTI"
    ],
    [
        "Bacău",
        "Podu Turcului",
        "S.C POLIMED S.R.L."
    ],
    [
        "Bacău",
        "Târgu Ocna",
        "PENITENCIARUL- SPITAL TG.OCNA"
    ],
    [
        "Bacău",
        "Târgu Ocna",
        "SC CARDIOMED SRL"
    ],
    [
        "Bacău",
        "Târgu Ocna",
        "SC MĂGURA SA TG.OCNA BACĂU"
    ],
    [
        "Botoșani",
        "Botoșani",
        "S.C. R.K.-MED S.R.L."
    ],
    [
        "Botoșani",
        "Botoșani",
        "SPITALUL DE PNEUMOFTIZIOLOGIE BOTOSANI"
    ],
    [
        "Botoșani",
        "Botoșani",
        "SPITALUL DE RECUPERARE \"SF. GHEORGHE\" BOTOSANI"
    ],
    [
        "Botoșani",
        "Botoșani",
        "SPITALUL JUDETEAN DE URGENTA \"MAVROMATI\" BOTOSANI"
    ],
    [
        "Botoșani",
        "Dorohoi",
        "SPITALUL MUNICIPAL DOROHOI"
    ],
    [
        "Botoșani",
        "Podriga",
        "SANATORIUL DE NEUROPSIHIATRIE PODRIGA"
    ],
    [
        "Iași",
        "Deleni",
        "PREVENTORIUL TBC COPII DELENI"
    ],
    [
        "Iași",
        "Grajduri",
        "SPITALUL DE PSIHIATRIE ȘI PENTRU MĂSURI DE SIGURANȚĂ PĂDURENI GRAJDURI"
    ],
    [
        "Iași",
        "Hârlău",
        "SPITAL ORĂŞENESC HÎRLAU"
    ],
    [
        "Iași",
        "Iași",
        "ARCADIA CARDIO"
    ],
    [
        "Iași",
        "Iași",
        "ARCADIA HOSPITAL SRL"
    ],
    [
        "Iași",
        "Iași",
        "CENTRU MEDICAL DR. MICU VASILE"
    ],
    [
        "Iași",
        "Iași",
        "INSTITUTUL DE BOLI CARDIOVASCULARE \"PROF. DR. GEORGE I.M. GEORGESCU\" IAŞI"
    ],
    [
        "Iași",
        "Iași",
        "INSTITUTUL DE PSIHIATRIE SOCOLA IASI"
    ],
    [
        "Iași",
        "Iași",
        "INSTITUTUL REGIONAL DE ONCOLOGIE"
    ],
    [
        "Iași",
        "Iași",
        "MEDLIFE SA"
    ],
    [
        "Iași",
        "Iași",
        "S.C. ELYTIS HOSPITAL HOPE S.R.L."
    ],
    [
        "Iași",
        "Iași",
        "S.C.TRANSMED EXPERT S.R.L-CENTRU MEDICAL"
    ],
    [
        "Iași",
        "Iași",
        "SC CENTRUL DE ONCOLOGIE EUROCLINIC SRL"
    ],
    [
        "Iași",
        "Iași",
        "SC CONSULTMED SRL"
    ],
    [
        "Iași",
        "Iași",
        "SC PRO LIFE CLINICS SRL"
    ],
    [
        "Iași",
        "Iași",
        "SC RED HOSPITAL SRL - SPITALUL SF SAVA IASI"
    ],
    [
        "Iași",
        "Iași",
        "SPITAL CLINIC DE OBSTETRICA GINECOLOGIE \"ELENA DOAMNA\""
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC ”DR. C. I. PARHON”"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC C.F. IASI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE BOLI INFECŢIOASE \"SFÂNTA PARASCHEVA\" IAŞI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE OBSTETRICĂ ȘI GINECOLOGIE ,,CUZA VODĂ'' IAȘI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE PNEUMOFTIZIOLOGIE IAȘI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE RECUPERARE IASI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE URGENTA \"PROF.DR.N.OBLU\" IASI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC DE URGENȚĂ PENTRU COPII \"SF. MARIA\" IAȘI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚE SF. SPIRIDON IAȘI"
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL CLINIC MILITAR DE URGENȚĂ \"DR. IACOB CZIHAC\""
    ],
    [
        "Iași",
        "Iași",
        "SPITALUL PROVIDENȚA IASI"
    ],
    [
        "Iași",
        "Pașcani",
        "S.C. BELLA PRAXIS S.R.L."
    ],
    [
        "Iași",
        "Pașcani",
        "SPITALUL GENERAL C.F. PAȘCANI"
    ],
    [
        "Iași",
        "Pașcani",
        "SPITALUL MUNICIPAL DE URGENTA PASCANI"
    ],
    [
        "Iași",
        "Târgu Frumos",
        "SPITALUL DE BOLI CRONICE \"SFANTUL IOAN\" TARGU FRUMOS"
    ],
    [
        "Iași",
        "Valea Lupului",
        "SC VITAL MEDICAL CENTER MEMORY SRL"
    ],
    [
        "Neamț",
        "Bălțătești",
        "SANATORIUL DE BALNEOFIZIOTERAPIE ŞI RECUPERARE MEDICALĂ ,,DR.DIMITRIE CANTEMIR\" BĂLŢĂTEŞTI"
    ],
    [
        "Neamț",
        "Bicaz",
        "SPITALUL ORASENESC SFANTUL IERARH NICOLAE BICAZ"
    ],
    [
        "Neamț",
        "Bisericani",
        "SPITALUL DE PNEUMOFTIZIOLOGIE BISERICANI"
    ],
    [
        "Neamț",
        "Piatra-Neamț",
        "CENTRAL CLINIC"
    ],
    [
        "Neamț",
        "Piatra-Neamț",
        "SC CLINICA MEDICALA SF. ANDREI"
    ],
    [
        "Neamț",
        "Piatra-Neamț",
        "SPITALUL JUDEŢEAN DE URGENŢĂ PIATRA NEAMŢ"
    ],
    [
        "Neamț",
        "Roman",
        "SPITALUL DE PSIHIATRIE SF. NICOLAE ROMAN"
    ],
    [
        "Neamț",
        "Roman",
        "SPITALUL MUNICIPAL DE URGENTA ROMAN"
    ],
    [
        "Neamț",
        "Roman",
        "THEO'S MEDICAL CLINIC"
    ],
    [
        "Neamț",
        "Târgu Neamț",
        "SPITALUL ORĂȘENESC ”SFÂNTUL DIMITRIE” TÎRGU NEAMȚ"
    ],
    [
        "Suceava",
        "Câmpulung Moldovenesc",
        "SPITALUL DE PSIHIATRIE"
    ],
    [
        "Suceava",
        "Câmpulung Moldovenesc",
        "SPITALUL MUNICIPAL CÂMPULUNG MOLDOVENESC"
    ],
    [
        "Suceava",
        "Fălticeni",
        "SPITALUL MUNICIPAL FALTICENI"
    ],
    [
        "Suceava",
        "Gura Humorului",
        "SPITALUL ORĂȘENESC GURA HUMORULUI"
    ],
    [
        "Suceava",
        "Ilișești",
        "SC SERVICII PALIATIVE SRL"
    ],
    [
        "Suceava",
        "Rădăuți",
        "SPITALUL MUNICIPAL \"SF. DOCTORI COSMA SI DAMIAN\" RĂDĂUŢI"
    ],
    [
        "Suceava",
        "Sfântu Ilie",
        "SC CORAMED SV SRL"
    ],
    [
        "Suceava",
        "Siret",
        "SPITALUL DE BOLI CRONICE SIRET"
    ],
    [
        "Suceava",
        "Siret",
        "SPITALUL DE PSIHIATRIE CRONICI SIRET"
    ],
    [
        "Suceava",
        "Suceava",
        "S.C. SIGMEDICAL SERVICES S.R.L."
    ],
    [
        "Suceava",
        "Suceava",
        "SPITALUL JUDEŢEAN DE URGENŢĂ \"SF. IOAN CEL NOU\" SUCEAVA"
    ],
    [
        "Suceava",
        "Suceava",
        "SPITALUL PRIVAT S.C. BETHESDA S.R.L."
    ],
    [
        "Suceava",
        "Sucevița",
        "S.C. TOP MEDICAL CRONIC S.R.L. - CENTRU DE ÎNGRIJIRI PALIATIVE ”SFÂNTUL LUCA”"
    ],
    [
        "Suceava",
        "Vatra Dornei",
        "SPITAL MUNICIPAL VATRA DORNEI"
    ],
    [
        "Vaslui",
        "Bârlad",
        "SPITAL MUNICIPAL DE URGENTA \"ELENA BELDIMAN\" BARLAD"
    ],
    [
        "Vaslui",
        "Huși",
        "SPITAL MUNICIPAL \"DIMITRIE CASTROIAN\" HUSI"
    ],
    [
        "Vaslui",
        "Murgeni",
        "SPITALUL DE PSIHIATRIE MURGENI"
    ],
    [
        "Vaslui",
        "Negrești",
        "SPITALIS PUNCT DELUCRU NEGRESTI"
    ],
    [
        "Vaslui",
        "Vaslui",
        "Spitalul Județean de Urgență Vaslui"
    ],
    [
        "Bihor",
        "Aleșd",
        "SPITALUL ORĂŞENESC ALEŞD"
    ],
    [
        "Bihor",
        "Băile Felix",
        "SPITALUL CLINIC DE RECUPERARE MEDICALĂ BĂILE FELIX"
    ],
    [
        "Bihor",
        "Beiuș",
        "SPITALUL MUNICIPAL \"EPISCOP NICOLAE POPOVICI\" BEIUȘ"
    ],
    [
        "Bihor",
        "Bratca",
        "CENTRUL DE SANATATE MULTIFUNCTIONAL BRATCA"
    ],
    [
        "Bihor",
        "Bratca",
        "SC LABORATOR MEDICAL BIOCONSULTING SRL"
    ],
    [
        "Bihor",
        "Marghita",
        "SPITAL MUNICIPAL 'DR. POP MIRCEA' MARGHITA"
    ],
    [
        "Bihor",
        "Nucet",
        "SPITAL PSIHIATRIE NUCET"
    ],
    [
        "Bihor",
        "Oradea",
        "CENTRUL MEDICAL MEDENA"
    ],
    [
        "Bihor",
        "Oradea",
        "SC MEDETIL SRL - CLINICA '' MEDETIL ''"
    ],
    [
        "Bihor",
        "Oradea",
        "SOCIETATEA COMERCIALĂ \"PELICAN IMPEX\" S.R.L. ORADEA"
    ],
    [
        "Bihor",
        "Oradea",
        "SPITAL OBSTETRICĂ - GINECOLOGIE ”SC EUCLID SRL”"
    ],
    [
        "Bihor",
        "Oradea",
        "SPITALUL CLINIC C.F.ORADEA"
    ],
    [
        "Bihor",
        "Oradea",
        "SPITALUL CLINIC DE URGENȚĂ ,,AVRAM IANCU” ORADEA"
    ],
    [
        "Bihor",
        "Oradea",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ ORADEA"
    ],
    [
        "Bihor",
        "Oradea",
        "SPITALUL CLINIC MUNICIPAL \"DR. GAVRIL CURTEANU\"ORADEA"
    ],
    [
        "Bihor",
        "Salonta",
        "SC DAFNE MED SRL - SPITAL DE ZI"
    ],
    [
        "Bihor",
        "Salonta",
        "SPITALUL MUNICIPAL SALONTA"
    ],
    [
        "Bihor",
        "Ștei",
        "SPITAL DE PSIHIATRIE ȘI PENTRU MĂSURI DE SIGURANȚĂ ȘTEI"
    ],
    [
        "Bihor",
        "Ștei",
        "SPITALUL ORĂȘENESC ȘTEI"
    ],
    [
        "Bistrița-Năsăud",
        "Beclean",
        "SPITALUL ORASENESC BECLEAN"
    ],
    [
        "Bistrița-Năsăud",
        "Bistrița",
        "CLINICA SANOVIL"
    ],
    [
        "Bistrița-Năsăud",
        "Bistrița",
        "SPITALUL JUDEŢEAN DE URGENŢĂ BISTRIŢA"
    ],
    [
        "Bistrița-Năsăud",
        "Ilișua",
        "PREVENTORIUL TBC DE COPII"
    ],
    [
        "Bistrița-Năsăud",
        "Năsăud",
        "SPITALUL ORĂŞENESC DR.GEORGE TRIFON"
    ],
    [
        "Cluj",
        "Borșa",
        "SPITALUL DE BOLI PSIHICE CRONICE BORSA"
    ],
    [
        "Cluj",
        "Câmpia Turzii",
        "SPITALUL MUNICIPAL ,,DR. CORNEL IGNA,, CÂMPIA TURZII"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "ART ESTET SRL"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "ASOCIAŢIA SFÂNTUL NECTARIE CLUJ"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "INSTITUTUL CLINIC DE UROLOGIE SI TRANSPLANT RENAL CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "INSTITUTUL INIMII DE URGENŢĂ PENTRU BOLI CARDIOVASCULARE \"NICULAE STĂNCIOIU\" CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "INSTITUTUL ONCOLOGIC \"PROF. DR. I. CHIRICUȚĂ\""
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "INSTITUTUL REGIONAL DE GASTROENTEROLOGIE-HEPATOLOGIE \"PROF. DR. OCTAVIAN FODOR\" CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "RECARDIO SRL"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "S.C. CARDIOMED S.R.L: CABINETE MEDICALE - Centrul Medical - Punct de lucru"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SC MEDISPROF SRL"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SC RECHINUL IMPEX SRL"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITAL CLINIC CĂI FERATE CLUJ NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC DE BOLI INFECȚIOASE CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC DE PNEUMOFTIZIOLOGIE \"LEON DANIELLO\" CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC DE RECUPERARE CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC DE URGENTA PENTRU COPII CLUJ NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC JUDEŢEAN DE URGENŢĂ CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL CLINIC MUNICIPAL CLUJ NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "SPITALUL MILITAR DE URGENȚĂ \"DR. CONSTANTIN PAPILIAN\" CLUJ-NAPOCA"
    ],
    [
        "Cluj",
        "Cluj-Napoca",
        "TVM MED SERV SRL"
    ],
    [
        "Cluj",
        "Dej",
        "PENITENCIARUL SPITAL DEJ"
    ],
    [
        "Cluj",
        "Dej",
        "SPITALUL MUNICIPAL DEJ"
    ],
    [
        "Cluj",
        "Florești",
        "CENTRU MEDICAL DE RADIOTERAPIE ȘI CHIMIOTERAPIE ADULTI ȘI COPII"
    ],
    [
        "Cluj",
        "Gherla",
        "SC EUROTRAT SRL- SPITAL DE REABILITARE MEDICALA"
    ],
    [
        "Cluj",
        "Gherla",
        "SPITALUL MUNICIPAL GHERLA"
    ],
    [
        "Cluj",
        "Huedin",
        "SPITALUL ORĂŞENESC HUEDIN"
    ],
    [
        "Cluj",
        "Suceagu",
        "S.C POLARIS MEDICAL CLINICA DE TRATAMENT ȘI RECUPERARE S.A"
    ],
    [
        "Cluj",
        "Turda",
        "SPITALUL MUNICIPAL TURDA"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "S.C. Fortis Diagnosis Center S.R.L."
    ],
    [
        "Maramureș",
        "Baia Mare",
        "S.C. ONCOPREMIUM-TEAM S.R.L."
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SC CLINICA SFÂNTA MARIA SRL"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SC CLINICA SOMEȘAN SRL BAIA MARE"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SC EUROMEDICA HOSPITAL SA"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SC. CHE COSMEDICA SRL"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SPITALUL DE BOLI INFECŢIOASE ŞI PSIHIATRIE BAIA MARE"
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SPITALUL DE PNEUMOFTIZIOLOGIE \"DR. NICOLAE RUȘDEA\""
    ],
    [
        "Maramureș",
        "Baia Mare",
        "SPITALUL JUDEȚEAN DE URGENȚA ”DR. CONSTANTIN OPRIȘ” BAIA MARE"
    ],
    [
        "Maramureș",
        "Borșa",
        "SPITALUL DE RECUPERARE BORȘA"
    ],
    [
        "Maramureș",
        "Cavnic",
        "SPITALUL DE PSIHIATRIE CAVNIC"
    ],
    [
        "Maramureș",
        "Coltău",
        "SC CENTRUL MEDICAL CĂTALINA SRL"
    ],
    [
        "Maramureș",
        "Sighetu Marmației",
        "SPITAL MUNICIPAL SIGHETU-MARMATIEI"
    ],
    [
        "Maramureș",
        "Târgu Lăpuș",
        "SPITALUL ORĂȘENESC TG. LĂPUȘ"
    ],
    [
        "Maramureș",
        "Vișeu de Sus",
        "SPITALUL ORASENESC VISEU DE SUS"
    ],
    [
        "Satu Mare",
        "Carei",
        "SPITALUL MUNICIPAL CAREI"
    ],
    [
        "Satu Mare",
        "Negrești-Oaș",
        "SPITALUL ORĂŞENESC NEGREŞTI OAŞ"
    ],
    [
        "Satu Mare",
        "Satu Mare",
        "SC MANITOU MED SRL CLINICA GYNOPRAX"
    ],
    [
        "Satu Mare",
        "Satu Mare",
        "SC SARA CLINIC RECOVERY SRL"
    ],
    [
        "Satu Mare",
        "Satu Mare",
        "SPITAL JUDETEAN DE URGENTA SATU MARE"
    ],
    [
        "Satu Mare",
        "Satu Mare",
        "SPITALUL DE PNEUMOFTIZIOLOGIE SATU MARE"
    ],
    [
        "Sălaj",
        "Crasna",
        "SPITALUL DE BOLI CRONICE CRASNA"
    ],
    [
        "Sălaj",
        "Jibou",
        "SPITALUL ORASENESC JIBOU"
    ],
    [
        "Sălaj",
        "Șimleu Silvaniei",
        "SPITALUL ORASENESC \"PROF.DR.IOAN PUSCAS\" SIMLEU SILVANIEI"
    ],
    [
        "Sălaj",
        "Zalău",
        "FUNDAȚIA ”ACASĂ”- CENTRUL DE RECUPERARE,TRATAMENT ȘI ÎNGRIJIRE ”ACASĂ”"
    ],
    [
        "Sălaj",
        "Zalău",
        "S.C. SALVOSAN CIOBANCA I S.R.L."
    ],
    [
        "Sălaj",
        "Zalău",
        "SPITALUL JUDEŢEAN DE URGENŢĂ ZALĂU"
    ],
    [
        "Argeș",
        "Brădetu",
        "SPITALUL DE RECUPERARE CU AMBULATORIU DE SPECIALITAE INTEGRAT BRĂDET"
    ],
    [
        "Argeș",
        "Călinești",
        "SPITAL BOLI CRONICE CALINESTI CU AMBULATORIU INTEGRAT"
    ],
    [
        "Argeș",
        "Câmpulung Muscel",
        "S.C. CLUBUL SANATATII SRL"
    ],
    [
        "Argeș",
        "Câmpulung Muscel",
        "SPITALUL DE PNEUMOFTIZIOLOGIE CU AMBULATORIU INTEGRAT CÂMPULUNG"
    ],
    [
        "Argeș",
        "Câmpulung Muscel",
        "SPITALUL MUNICIPAL CU AMBULATORIU INTEGRAT DE SPECIALITATE CAMPULUNG"
    ],
    [
        "Argeș",
        "Costești",
        "SPITALUL ORĂȘENESC \"REGELE CAROL I\" COSTEȘTI"
    ],
    [
        "Argeș",
        "Curtea de Argeș",
        "SPITAL MUNICIPAL CURTEA DE ARGES CU AMBULATORIU DE SPECIALITATE INTEGRAT"
    ],
    [
        "Argeș",
        "Leordeni",
        "SPITALUL DE PNEUMOFTIZIOLOGIE CU AMBULATORIU INTEGRAT"
    ],
    [
        "Argeș",
        "Mioveni",
        "PENITENCIARUL-SPITAL MIOVENI"
    ],
    [
        "Argeș",
        "Mioveni",
        "SPITALUL ORĂŞENESC MIOVENI"
    ],
    [
        "Argeș",
        "Pitești",
        "S.C. MUNTENIA MEDICAL COMPETENCES S.A"
    ],
    [
        "Argeș",
        "Pitești",
        "S.C. NATISAN MEDICINA GENERALA S.R.L."
    ],
    [
        "Argeș",
        "Pitești",
        "SC CENTRUL MEDICAL SFANTUL NICOLAE SRL"
    ],
    [
        "Argeș",
        "Pitești",
        "SC DR IRIMIA SRL"
    ],
    [
        "Argeș",
        "Pitești",
        "SPITAL JUDEŢEAN DE URGENŢĂ CU AMBULATORIU INTEGRAT DE SPECIALITATE PITEŞTI"
    ],
    [
        "Argeș",
        "Pitești",
        "SPITALUL DE PEDIATRIE PITESTI"
    ],
    [
        "Argeș",
        "Pitești",
        "SPITALUL MILITAR DE URGENȚĂ DR. ION JIANU PITEȘTI"
    ],
    [
        "Argeș",
        "Ștefănești",
        "SPITAL DE BOLI CRONICE ŞI GERIATRIE \"CONSTANTIN BĂLĂCEANU STOLNICI\" STEFĂNEŞTI CU AMBULATORIU INTEGRAT"
    ],
    [
        "Argeș",
        "Valea Iașului",
        "SPITALUL DE PNEUMOFTIZIOLOGIE \"SF.ANDREI\""
    ],
    [
        "Argeș",
        "Vedea",
        "SPITALUL DE PSIHIATRIE \"SF. MARIA\" VEDEA"
    ],
    [
        "Călărași",
        "Călărași",
        "SPITALUL DE PNEUMOFTIZIOLOGIE CÁLÁRASI"
    ],
    [
        "Călărași",
        "Călărași",
        "SPITALUL JUDETEAN DE URGENTA CALARASI \"DR. POMPEI SAMARIAN\""
    ],
    [
        "Călărași",
        "Lehliu-Gară",
        "SPITAL ORĂŞENESC LEHLIU-GARĂ"
    ],
    [
        "Călărași",
        "Oltenița",
        "S.C. ALPHA MEDICAL INVEST S.R.L."
    ],
    [
        "Călărași",
        "Oltenița",
        "SC BROTAC MEDICAL CENTER SRL - punct de lucru OLTENITA"
    ],
    [
        "Călărași",
        "Oltenița",
        "SPITALUL MUNICIPAL OLTENIȚA"
    ],
    [
        "Călărași",
        "Săpunari",
        "SPITALUL DE PSIHIATRIE SĂPUNARI"
    ],
    [
        "Dâmbovița",
        "Găești",
        "SPITALUL ORASENESC GAESTI"
    ],
    [
        "Dâmbovița",
        "Moreni",
        "SPITAL MUNICIPAL MORENI"
    ],
    [
        "Dâmbovița",
        "Pucioasa",
        "SPITALUL ORASENESC PUCIOASA"
    ],
    [
        "Dâmbovița",
        "Târgoviște",
        "SPITALUL JUDEȚEAN DE URGENȚA TÂRGOVIȘTE"
    ],
    [
        "Giurgiu",
        "Bolintin-Vale",
        "SPITAL ORĂȘENESC BOLINTIN VALE"
    ],
    [
        "Giurgiu",
        "Giurgiu",
        "QUALITY COMPAS SRL"
    ],
    [
        "Giurgiu",
        "Giurgiu",
        "SPITALUL JUDEȚEAN DE URGENȚĂ GIURGIU"
    ],
    [
        "Giurgiu",
        "Vânătorii Mici",
        "SPITALUL DE PNEUMOFTIZIOLOGIE IZVORU"
    ],
    [
        "Ialomița",
        "Fetești",
        "SPITALUL MUNICIPAL \"ANGHEL SALIGNY\" FETESTI"
    ],
    [
        "Ialomița",
        "Slobozia",
        "SPITALUL JUDEŢEAN DE URGENŢĂ SLOBOZIA"
    ],
    [
        "Ialomița",
        "Țăndărei",
        "SPITALUL ORĂŞENESC ŢĂNDĂREI"
    ],
    [
        "Ialomița",
        "Urziceni",
        "SPITALUL MUNICIPAL URZICENI"
    ],
    [
        "Prahova",
        "Azuga",
        "SPITALUL DE ORTOPEDIESI TRAUMATOLOGIE AZUGA"
    ],
    [
        "Prahova",
        "Băicoi",
        "SPITALUL ORASENESC BAICOI"
    ],
    [
        "Prahova",
        "Boldești-Scăeni",
        "SC BESTMED SERV SRL"
    ],
    [
        "Prahova",
        "Breaza de Jos",
        "SPITALUL DE BOLI PULMONARE BREAZA"
    ],
    [
        "Prahova",
        "Bucov",
        "SPITAL AS MEDICA SRL"
    ],
    [
        "Prahova",
        "Bușteni",
        "SANATORIUL BALNEOCLIMATERIC DE COPII"
    ],
    [
        "Prahova",
        "Câmpina",
        "SC CENTRU MEDICAL SANCONFIND SRL - SPITAL"
    ],
    [
        "Prahova",
        "Câmpina",
        "SPITALUL DE PSIHIATRIE VOILA"
    ],
    [
        "Prahova",
        "Câmpina",
        "SPITALUL MUNICIPAL CAMPINA"
    ],
    [
        "Prahova",
        "Drajna de Jos",
        "SPITALUL DE PNEUMOFTIZIOLOGIE DRAJNA"
    ],
    [
        "Prahova",
        "Florești",
        "SPITALUL DE PNEUMOFTIZIOLOGIE FLORESTI"
    ],
    [
        "Prahova",
        "Mizil",
        "SPITALUL ORĂȘENESC ,, SFÂNTA FILOFTEIA'' MIZIL"
    ],
    [
        "Prahova",
        "Păuleștii Noi",
        "PROARTMED MEDICAL CENTER SRL"
    ],
    [
        "Prahova",
        "Păuleștii Noi",
        "S.C. CENTRUL MEDICAL MEDIURG S.R.L - SPITALUL PRIVAT DE RECUPERARE SFANTUL ANTON"
    ],
    [
        "Prahova",
        "Ploiești",
        "S.C. OPHTA MAX S.R.L."
    ],
    [
        "Prahova",
        "Ploiești",
        "S.C. WIA KINETO-DENT S.R.L."
    ],
    [
        "Prahova",
        "Ploiești",
        "SC MEDICAL CENTER GRAL SRL"
    ],
    [
        "Prahova",
        "Ploiești",
        "SC SPITAL LOTUS SRL"
    ],
    [
        "Prahova",
        "Ploiești",
        "SPITAL OBSTETRICĂ GINECOLOGIE PLOIEȘTI"
    ],
    [
        "Prahova",
        "Ploiești",
        "SPITALUL DE PEDIATRIE PLOIEȘTI"
    ],
    [
        "Prahova",
        "Ploiești",
        "SPITALUL GENERAL C.F.PLOIEŞTI"
    ],
    [
        "Prahova",
        "Ploiești",
        "SPITALUL JUDEŢEAN DE URGENŢĂ PLOIEŞTI"
    ],
    [
        "Prahova",
        "Ploiești",
        "SPITALUL MUNICIPAL PLOIEŞTI"
    ],
    [
        "Prahova",
        "Plopeni",
        "SC DARIUS MEDICAL CENTER SRL"
    ],
    [
        "Prahova",
        "Plopeni",
        "SC DENTIRAD HOSPITAL SRL"
    ],
    [
        "Prahova",
        "Sinaia",
        "SPITALUL ORASENESC SINAIA"
    ],
    [
        "Prahova",
        "Urlați",
        "SPITALUL ORASENESC URLATI"
    ],
    [
        "Prahova",
        "Vălenii de Munte",
        "SPITALUL ORASENESC VALENII DE MUNTE"
    ],
    [
        "Teleorman",
        "Alexandria",
        "CLINICA DE ZI ONCOVIT SRL"
    ],
    [
        "Teleorman",
        "Alexandria",
        "SPITALUL JUDETEAN DE URGENTA ALEXANDRIA"
    ],
    [
        "Teleorman",
        "Poroschia",
        "SPITALUL DE PSIHIATRIE POROSCHIA"
    ],
    [
        "Teleorman",
        "Rosiori de Vede",
        "SPITALUL DE PNEUMOFTIZIOLOGIE ROSIORII DE VEDE"
    ],
    [
        "Teleorman",
        "Rosiori de Vede",
        "SPITALUL MUNICIPAL CARITAS ROSIORI DE VEDE"
    ],
    [
        "Teleorman",
        "Turnu Măgurele",
        "SPITALUL MUNICIPAL TURNU MĂGURELE"
    ],
    [
        "Teleorman",
        "Videle",
        "SC SPITALUL ORASENESC SRL"
    ],
    [
        "Teleorman",
        "Zimnicea",
        "SPITALUL ORĂŞENESC ZIMNICEA"
    ],
    [
        "Brăila",
        "Brăila",
        "SC VENEȚIA MEDICAL SRL- Spital de Recuperare si Boli Cronice Braila"
    ],
    [
        "Brăila",
        "Brăila",
        "SPITAL DE PSIHIATRIE \"SF.PANTELIMON\" BRAILA"
    ],
    [
        "Brăila",
        "Brăila",
        "SPITALUL DE PNEUMOFTIZIOLOGIE BRĂILA"
    ],
    [
        "Brăila",
        "Brăila",
        "SPITALUL JUDEŢEAN DE URGENŢĂ BRĂILA"
    ],
    [
        "Brăila",
        "Făurei",
        "SPITALUL ORASENESC FAUREI"
    ],
    [
        "Buzău",
        "Buzău",
        "SPITALUL JUDEŢEAN DE URGENŢĂ BUZĂU"
    ],
    [
        "Buzău",
        "Buzău",
        "SPITALUL SF SAVA S.R.L."
    ],
    [
        "Buzău",
        "Nehoiu",
        "SPITALUL ORASENESC NEHOIU"
    ],
    [
        "Buzău",
        "Râmnicu Sărat",
        "SPITALUL MUNICIPAL RÂMNICU SĂRAT"
    ],
    [
        "Buzău",
        "Săpoca",
        "SPITALUL DE PSIHIATRIE ŞI PENTRU MĂSURI DE SIGURANŢĂ SĂPOCA"
    ],
    [
        "Buzău",
        "Smeeni",
        "SPITALUL DE BOLI CRONICE SMEENI"
    ],
    [
        "Buzău",
        "Vintilă Vodă",
        "S.C. ECOMED S.R.L. VINTILA-VODA"
    ],
    [
        "Constanța",
        "Cernavodă",
        "SPITALUL ORASENESC CERNAVODA"
    ],
    [
        "Constanța",
        "Cogealac",
        "SC CENTRUL DE DIAGNOSTIC SI TRATAMENT STAL SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "AQUA-MED CONSULTING SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "DIAGNOST S.R.L."
    ],
    [
        "Constanța",
        "Constanța",
        "ISIS MEDICAL CENTER S.R.L."
    ],
    [
        "Constanța",
        "Constanța",
        "MEDICAL ANALYSIS CONSTANTA"
    ],
    [
        "Constanța",
        "Constanța",
        "MOGADORMED SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "S.C. IOWEMED S.A."
    ],
    [
        "Constanța",
        "Constanța",
        "S.C. MEDSTAR 2000 Clinic S.R.L"
    ],
    [
        "Constanța",
        "Constanța",
        "S.C. MEDSTAR 2000 S.R.L"
    ],
    [
        "Constanța",
        "Constanța",
        "SC CENTRUL MEDICAL DOROBANȚI SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "SC CIVICA MED SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "SC EUROMATERNA SA"
    ],
    [
        "Constanța",
        "Constanța",
        "SC GASTROMOND SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "SC ROCOMEDICOR SRL"
    ],
    [
        "Constanța",
        "Constanța",
        "SPITAL CLINIC CĂI FERATE CONSTANŢA"
    ],
    [
        "Constanța",
        "Constanța",
        "SPITALUL CLINIC DE BOLI INFECTIOASE CONSTANTA"
    ],
    [
        "Constanța",
        "Constanța",
        "SPITALUL CLINIC DE PNEUMOFTIZIOLOGIE CONSTANTA"
    ],
    [
        "Constanța",
        "Constanța",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ ”SF. APOSTOL ANDREI” CONSTANȚA"
    ],
    [
        "Constanța",
        "Constanța",
        "SPITALUL MILITAR DE URGENTA DR. ALEXANDRU GAFENCU CONSTANTA"
    ],
    [
        "Constanța",
        "Cumpăna",
        "ASOCIATIA BUNICUL SI BUNICA - CENTRU DE INGRIJIRI PALIATIVE CU 49 PATURI SPITALIZARE CONTINUA"
    ],
    [
        "Constanța",
        "Eforie Nord",
        "SPITALUL CLINIC DE RECUPERARE, MEDICINĂ FIZICĂ ŞI BALNEOLOGIE"
    ],
    [
        "Constanța",
        "Eforie Sud",
        "SC ASCLEPIOS SRL"
    ],
    [
        "Constanța",
        "Hârșova",
        "SPITALUL ORĂȘENESC HÂRȘOVA"
    ],
    [
        "Constanța",
        "Mangalia",
        "S.C. ROMGESTA S.R.L."
    ],
    [
        "Constanța",
        "Mangalia",
        "SANATORIUL BALNEAR ŞI DE RECUPERARE MANGALIA"
    ],
    [
        "Constanța",
        "Mangalia",
        "SPITALUL MUNICIPAL MANGALIA"
    ],
    [
        "Constanța",
        "Medgidia",
        "SPITALUL MUNICIPAL MEDGIDIA"
    ],
    [
        "Constanța",
        "Murfatlar",
        "SC NEPTUN MEDICAL SRL"
    ],
    [
        "Constanța",
        "Ovidiu",
        "OVIDIUS CLINICAL HOSPITAL SRL - UNITATE SANITARĂ PRIVATĂ"
    ],
    [
        "Constanța",
        "Ovidiu",
        "SC HELP MED CONSULT SRL"
    ],
    [
        "Constanța",
        "Poarta Albă",
        "PENITENCIAR SPITAL POARTA ALBA"
    ],
    [
        "Constanța",
        "Techirghiol",
        "S.C. COMPLEX BALNEAR ȘI DE RECUPERARE C.A.A. S.R.L."
    ],
    [
        "Constanța",
        "Techirghiol",
        "SANATORIUL BALNEAR ŞI DE RECUPERARE TECHIRGHIOL"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL CLINIC DE BOLI INFECŢIOASE \"SF. CUVIOASA PARASCHEVA\""
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL CLINIC DE OBSTETRICĂ GINECOLOGIE \"BUNA VESTIRE\" GALAȚI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL CLINIC DE URGENŢĂ PENTRU COPII \"SF. IOAN\" GALAŢI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ „SF.APOSTOL ANDREI” GALAȚI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL DE PNEUMOFTIZIOLOGIE GALAŢI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL DE PSIHIATRIE \" ELISABETA DOAMNA\" GALATI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL GENERAL C.F. GALAŢI"
    ],
    [
        "Galați",
        "Galați",
        "SPITALUL MILITAR DE URGENTA \"DR. ARISTIDE SERFIOTI\" GALATI"
    ],
    [
        "Galați",
        "Târgu Bujor",
        "SPITALUL ORĂȘENESC TG. BUJOR"
    ],
    [
        "Galați",
        "Tecuci",
        "SPITALUL MUNICIPAL \"ANTON CINCU\" TECUCI"
    ],
    [
        "Tulcea",
        "Isaccea",
        "SPITALUL TICHILESTI"
    ],
    [
        "Tulcea",
        "Măcin",
        "SPITAL ORASENESC MACIN"
    ],
    [
        "Tulcea",
        "Tulcea",
        "SC MEDICAL CENTER SPITAL SRL"
    ],
    [
        "Tulcea",
        "Tulcea",
        "SPITALUL JUDEȚEAN DE URGENȚĂ TULCEA"
    ],
    [
        "Tulcea",
        "Tulcea",
        "SC MERCADO IMPEX SRL"
    ],
    [
        "Vrancea",
        "Adjud",
        "SPITALUL MUNICIPAL ADJUD"
    ],
    [
        "Vrancea",
        "Dumbrăveni",
        "SPITALUL DE PSIHIATRIE CRONICI DUMBRĂVENI"
    ],
    [
        "Vrancea",
        "Focșani",
        "SC EXPERT MEDICAL MANAGEMENT SRL"
    ],
    [
        "Vrancea",
        "Focșani",
        "SC MATERNA SRL FOCSANI - CLINICA MEDICALA MATERNA"
    ],
    [
        "Vrancea",
        "Focșani",
        "SPITALUL JUDEȚEAN DE URGENȚĂ \"SF.PANTELIMON\" FOCȘANI"
    ],
    [
        "Vrancea",
        "Focșani",
        "SPITALUL MILITAR DE URGENŢĂ \"Dr. ALEXANDRU POPESCU\" FOCŞANI"
    ],
    [
        "Vrancea",
        "Panciu",
        "SPITALUL ORASENESC PANCIU"
    ],
    [
        "Vrancea",
        "Vidra",
        "SPITALUL \"N.N. SAVEANU\" VIDRA, VRANCEA"
    ],
    [
        "Dolj",
        "Băilești",
        "SPITALUL MUNICIPAL \"PROF. DR. IRINEL POPESCU\" BĂILEȘTI"
    ],
    [
        "Dolj",
        "Calafat",
        "SPITALUL MUNICIPAL CALAFAT"
    ],
    [
        "Dolj",
        "Cârcea",
        "CENTRUL DE ONCOLOGIE SF NECTARIE SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "CARDIOMED SRL - CENTRU MEDICAL"
    ],
    [
        "Dolj",
        "Craiova",
        "CENTRUL MEDICAL DE INGRIJIRI PALEATIVE SF. ELENA S.R.L."
    ],
    [
        "Dolj",
        "Craiova",
        "ENDO LIFE SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "M&M MEDICAL SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "S.C. CENTRUL DE DIAGNOSTIC SI TRATAMENT OB-GYN S.R.L."
    ],
    [
        "Dolj",
        "Craiova",
        "S.C. CENTRUL DE EXCELENŢĂ ÎN RINOLOGIE S.R.L."
    ],
    [
        "Dolj",
        "Craiova",
        "S.C. CENTRUL MEDICAL TOMMED S.R.L."
    ],
    [
        "Dolj",
        "Craiova",
        "S.C. OPEN MEDICAL S.R.L.- CENTRU MEDICAL CU SPITALIZARE DE ZI ȘI AMBULATORIU DE SPECIALITATE"
    ],
    [
        "Dolj",
        "Craiova",
        "S.C. URODIAMED S.R.L"
    ],
    [
        "Dolj",
        "Craiova",
        "S.C.CENTRUL MEDICAL GALAXY MED S.R.L."
    ],
    [
        "Dolj",
        "Craiova",
        "SC A&C MEDICAL PRIME SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC CENTRUL MEDICAL AMARADIA SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC CENTRUL MEDICAL PHOENIX SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC CENTRUL MEDICAL SAMA S.A."
    ],
    [
        "Dolj",
        "Craiova",
        "SC CENTRUL MEDICAL UNIREA SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC DR. IANOSI SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC ECOGRAFIE 3D SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC EIFFELMED SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC HIT-MED SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC MECCLINIC SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC MOGOS MED SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC ONCOLAB SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC ONCO-LIFE CENTER SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC ONIOPTIC MEDICAL PD SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC POLICLINICA CENTRALĂ DR. VLĂESCU SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SC TOP MED BUNAVESTIRE SRL"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC CF CRAIOVA"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC DE BOLI INFECŢIOASE ŞI PNEUMOFTIZIOLOGIE \"VICTOR BABEŞ\" CRAIOVA"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC DE NEUROPSIHIATRIE CRAIOVA"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC DE URGENŢĂ MILITAR \"DR. ŞTEFAN ODOBLEJA\" CRAIOVA"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ CRAIOVA"
    ],
    [
        "Dolj",
        "Craiova",
        "SPITALUL CLINIC MUNICIPAL FILANTROPIA CRAIOVA"
    ],
    [
        "Dolj",
        "Dăbuleni",
        "SPITALUL ORĂȘENESC \"AȘEZĂMINTELE BRÂNCOVENEȘTI\" DĂBULENI"
    ],
    [
        "Dolj",
        "Filiași",
        "SPITALUL FILIȘANILOR"
    ],
    [
        "Dolj",
        "Leamna de Sus",
        "SPITALUL DE PNEUMOFTIZIOLOGIE LEAMNA"
    ],
    [
        "Dolj",
        "Poiana Mare",
        "SPITALUL DE PSIHIATRIE POIANA MARE"
    ],
    [
        "Dolj",
        "Segarcea",
        "SPITALUL ORASENESC SEGARCEA"
    ],
    [
        "Gorj",
        "Bumbești-Jiu",
        "SPITALUL ORĂȘENESC BUMBEȘTI-JIU"
    ],
    [
        "Gorj",
        "Motru",
        "SPITALUL MUNICIPAL MOTRU"
    ],
    [
        "Gorj",
        "Novaci",
        "SPITALUL ORASENESC NOVACI"
    ],
    [
        "Gorj",
        "Rovinari",
        "SPITALUL ORASENESC ,,SF.STEFAN'' ROVINARI"
    ],
    [
        "Gorj",
        "Runcu",
        "SPITALUL DE PNEUMOFTIZIOLOGIE TUDOR VLADIMIRESCU"
    ],
    [
        "Gorj",
        "Târgu Cărbunești",
        "SPITALUL DE URGENTA TG CARBUNESTI"
    ],
    [
        "Gorj",
        "Târgu Jiu",
        "SC PHOENIX PRIVATE HOSPITAL SRL"
    ],
    [
        "Gorj",
        "Târgu Jiu",
        "SPITALUL JUDEȚEAN DE URGENȚĂ TÂRGU JIU"
    ],
    [
        "Gorj",
        "Turceni",
        "SPITALUL ORĂŞENESC TURCENI"
    ],
    [
        "Mehedinți",
        "Baia de Aramă",
        "SPITALUL ORASENESC BAIA DE ARAMA"
    ],
    [
        "Mehedinți",
        "Drobeta-Turnu Severin",
        "CENTRUL DE ONCOLOGIE"
    ],
    [
        "Mehedinți",
        "Drobeta-Turnu Severin",
        "SPITALUL GENERAL CAI FERATE DROBETA TURNU SEVERIN"
    ],
    [
        "Mehedinți",
        "Drobeta-Turnu Severin",
        "SPITALUL JUDETEAN DE URGENTA DR. TR. SEVERIN"
    ],
    [
        "Mehedinți",
        "Orșova",
        "SPITALUL MUNICIPAL ORSOVA"
    ],
    [
        "Olt",
        "Balș",
        "SPITALUL ORĂŞENESC BALŞ"
    ],
    [
        "Olt",
        "Caracal",
        "SPITALUL MUNICIPAL CARACAL"
    ],
    [
        "Olt",
        "Corabia",
        "SPITALUL ORASENESC CORABIA"
    ],
    [
        "Olt",
        "Schitu",
        "SPITALUL DE PSIHIATRIE CRONICI SCHITU GRECI"
    ],
    [
        "Olt",
        "Slatina",
        "SC HOSPITAL NETWORK PHOENIX ONE DAY SRL"
    ],
    [
        "Olt",
        "Slatina",
        "SPITALUL JUDETEAN DE URGENTA SLATINA"
    ],
    [
        "Vâlcea",
        "Baile Olănești",
        "OLANESTI RIVIERA SA - UNITATE SANATORIALA"
    ],
    [
        "Vâlcea",
        "Brezoi",
        "SPITALUL ORASENESC BREZOI"
    ],
    [
        "Vâlcea",
        "Călimănești",
        "SPITAL INCARMED (CARDIOLOGIE SI MEDICINA INTERNA)"
    ],
    [
        "Vâlcea",
        "Drăgășani",
        "SPITALUL MUNICIPAL \"COSTACHE NICOLESCU \"DRAGASANI"
    ],
    [
        "Vâlcea",
        "Drăgoești",
        "SPITALUL DE PSIHIATRIE DRĂGOEȘTI"
    ],
    [
        "Vâlcea",
        "Horezu",
        "SPITALUL ORASENESC HOREZU"
    ],
    [
        "Vâlcea",
        "Mihăești",
        "SPITALUL DE PNEUMOFTIZIOLOGIE CONSTANTIN ANASTASATU"
    ],
    [
        "Vâlcea",
        "Râmnicu Vâlcea",
        "SC AMAMED SRL SPITAL DE BOLI CRONICE"
    ],
    [
        "Vâlcea",
        "Râmnicu Vâlcea",
        "SC RAPITEST CLINICA SRL"
    ],
    [
        "Vâlcea",
        "Râmnicu Vâlcea",
        "SPITALUL DE BOLI CRONICE DOINAMED, DRAGOESTI"
    ],
    [
        "Vâlcea",
        "Râmnicu Vâlcea",
        "SPITALUL DE REABILITARE MEDICALA BALNEOMEDCENTER"
    ],
    [
        "Vâlcea",
        "Râmnicu Vâlcea",
        "SPITALUL JUDETEAN DE URGENTA VALCEA"
    ],
    [
        "Arad",
        "Arad",
        "CENTRUL MEDICAL LASER SYSTEM"
    ],
    [
        "Arad",
        "Arad",
        "GENESYS MEDICAL CLINIC SRL"
    ],
    [
        "Arad",
        "Arad",
        "S.C. INFOMEDICA S.R.L."
    ],
    [
        "Arad",
        "Arad",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ ARAD"
    ],
    [
        "Arad",
        "Căpălnaș",
        "SPITALUL DE PSIHIATRIE CAPALNAS"
    ],
    [
        "Arad",
        "Chișineu-Criș",
        "SPITALUL \"SFANTUL GHOERGHE\""
    ],
    [
        "Arad",
        "Dezna",
        "SPITALUL DE RECUPERARE NEUROMOTORIE \"DR.CORNELIU BARSAN\" DEZNA"
    ],
    [
        "Arad",
        "Ineu",
        "CENTRU MEDICAL SPERANTA PENTRU VIATA SRL"
    ],
    [
        "Arad",
        "Ineu",
        "SPITALUL ORĂȘENESC INEU"
    ],
    [
        "Arad",
        "Lipova",
        "SPITALUL ORASENESC LIPOVA"
    ],
    [
        "Arad",
        "Mocrea",
        "SPITALUL DE PSIHIATRIE MOCREA"
    ],
    [
        "Arad",
        "Sebiș",
        "SPITALUL DE BOLI CRONICE SEBIS"
    ],
    [
        "Caraș-Severin",
        "Caransebeș",
        "SPITALUL MUNICIPAL DE URGENȚĂ CARANSEBEȘ"
    ],
    [
        "Caraș-Severin",
        "Moldova Nouă",
        "SPITAL ORASENESC MOLDOVA NOUA"
    ],
    [
        "Caraș-Severin",
        "Oravița",
        "UNITATE SANITARA PUBLICA SPITALUL ORĂȘENESC ORAVIȚA"
    ],
    [
        "Caraș-Severin",
        "Oțelu Roșu",
        "SPITAL ORASENESC OTELU-ROSU"
    ],
    [
        "Caraș-Severin",
        "Reșița",
        "CENTRUL DE RECUPERARE NEUROMOTORIE PRO VITAM - PUNCT DE LUCRU"
    ],
    [
        "Caraș-Severin",
        "Reșița",
        "SPITALUL JUDEȚEAN DE URGENȚĂ REȘIȚA"
    ],
    [
        "Hunedoara",
        "Brad",
        "SANATORIUL DE PNEUMOFTIZIOLOGIE BRAD"
    ],
    [
        "Hunedoara",
        "Brad",
        "SPITAL MUNICIPAL BRAD"
    ],
    [
        "Hunedoara",
        "Deva",
        "SPITALUL JUDETEAN DE URGENTA DEVA"
    ],
    [
        "Hunedoara",
        "Geoagiu",
        "SANATORIUL DE PNEUMOFTIZIOLOGIE GEOAGIU"
    ],
    [
        "Hunedoara",
        "Hațeg",
        "SPITALUL ORĂȘENESC HAȚEG"
    ],
    [
        "Hunedoara",
        "Hunedoara",
        "SPITALUL MUNICIPAL \"DR. ALEXANDRU SIMIONESCU\" HUNEDOARA"
    ],
    [
        "Hunedoara",
        "Lupeni",
        "SPITALUL MUNICIPAL LUPENI"
    ],
    [
        "Hunedoara",
        "Orăștie",
        "SPITALUL MUNICIPAL ORĂȘTIE"
    ],
    [
        "Hunedoara",
        "Petroșani",
        "SPITAL DE URGENTA PETROSANI"
    ],
    [
        "Hunedoara",
        "Simeria",
        "SPITALUL GENERAL CF SIMERIA"
    ],
    [
        "Hunedoara",
        "Vulcan",
        "SPITALUL MUNICIPAL VULCAN"
    ],
    [
        "Hunedoara",
        "Zam",
        "SPITALUL DE PSIHIATRIE ZAM"
    ],
    [
        "Timiș",
        "Buziaș",
        "CENTRUL MEDICAL DE EVALUARE, TERAPIE, EDUCAŢIE MEDICALĂ SPECIFICĂ ȘI RECUPERARE PENTRU COPII ŞI TINERI \"CRISTIAN ŞERBAN\""
    ],
    [
        "Timiș",
        "Deta",
        "SPITALUL ORASENESC DETA"
    ],
    [
        "Timiș",
        "Făget",
        "SPITALUL ORASENESC FAGET"
    ],
    [
        "Timiș",
        "Gătaia",
        "SPITALUL DE PSIHIATRIE GĂTAIA"
    ],
    [
        "Timiș",
        "Giroc",
        "SC ULTRA PRAXIMED SRL"
    ],
    [
        "Timiș",
        "Jebel",
        "SPITALUL DE PSIHIATRIE ȘI PENTRU MĂSURI DE SIGURANȚĂ JEBEL"
    ],
    [
        "Timiș",
        "Jimbolia",
        "SPITALUL DR. KARL DIEL JIMBOLIA"
    ],
    [
        "Timiș",
        "Lugoj",
        "SPITALUL MUNICIPAL \"DR. TEODOR ANDREI\" LUGOJ"
    ],
    [
        "Timiș",
        "Sânandrei",
        "S.C. POLICLINICA DARIMEDIC S.R.L."
    ],
    [
        "Timiș",
        "Sânnicolau Mare",
        "SPITALUL ORASENESC SANNICOLAU MARE"
    ],
    [
        "Timiș",
        "Timișoara",
        "ASOCIATIA ONCOHELP- CENTRUL DE ONCOLOGIE ONCOHELP"
    ],
    [
        "Timiș",
        "Timișoara",
        "FEDERAŢIA CARITAS A DIECEZEI TIMIŞOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "INSTITUTUL DE BOLI CARDIOVASCULARE TIMISOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "MEDLIFE SA BUCURESTI SUCURSALA TIMISOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "ONCOCENTER - ONCOLOGIE CLINICĂ S.R.L"
    ],
    [
        "Timiș",
        "Timișoara",
        "S.C. M-PROFILAXIS S.R.L."
    ],
    [
        "Timiș",
        "Timișoara",
        "S.C.CENTRUL MEDICAL SFANTA MARIA SRL"
    ],
    [
        "Timiș",
        "Timișoara",
        "SC CABINET PARTICULAR POLICLINIC ALGOMED SRL"
    ],
    [
        "Timiș",
        "Timișoara",
        "SC CENTRUL MEDICAL \"SF. STEFAN\" SRL"
    ],
    [
        "Timiș",
        "Timișoara",
        "SC CORDISMED SRL"
    ],
    [
        "Timiș",
        "Timișoara",
        "SC MATERNA CARE SRL"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC C.F. TIMISOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC DE BOLI INFECTOASE SI PNEUMOFTIZIOLOGIE DR. VICTOR BABES TIMISOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC DE URGENŢĂ PENTRU COPII \"LOUIS ŢURCANU\" TIMIŞOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ PIUS BRÎNZEU TIMIȘOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC MILITAR DE URGENŢĂ \"DR. VICTOR POPESCU\" TIMIŞOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SPITALUL CLINIC MUNICIPAL DE URGENTA TIMISOARA"
    ],
    [
        "Timiș",
        "Timișoara",
        "SC SELFMED CLINIQUE SRL"
    ]
]