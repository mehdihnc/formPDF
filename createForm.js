// Importation des bibliothèques nécessaires
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

async function createInteractivePdf() {
    // Création d'un document PDF, ajout d'une page et initialisation d'un formulaire
    const pdfDoc = await PDFDocument.create();
    const form = pdfDoc.getForm();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Configuration du texte pour le titre et la description du formulaire
    // Utilisation d'une police standard Helvetica pour le texte
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.drawText('Titre du Formulaire', {
        x: 50,
        y: height - 100,
        size: 25,
        font: font,
        color: rgb(0, 0, 0),
    });
    page.drawText('Description du formulaire...', {
        x: 50,
        y: height - 130,
        size: 12,
        font: font,
        color: rgb(0, 0, 0),
    });

    // Ajout de champs interactifs au formulaire
    // Inclut un champ de texte, une case à cocher et une liste déroulante
    const textField = form.createTextField('nameField');
    textField.setText(' ');
    textField.addToPage(page, {
        x: 50,
        y: height - 200,
        width: 300,
        height: 15,
    });

    const checkBox = form.createCheckBox('checkBoxField');
    checkBox.addToPage(page, {
        x: 50,
        y: height - 230,
        width: 15,
        height: 15,
    });

    const dropdown = form.createDropdown('dropdownField');
    dropdown.addOptions(['Option 1', 'Option 2', 'Option 3']);
    dropdown.addToPage(page, {
        x: 50,
        y: height - 260,
        width: 150,
        height: 15,
    });

    // Enregistrement et écriture du PDF interactif dans un fichier
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('formulaire_interactif.pdf', pdfBytes);
}

// Exécution de la fonction pour créer le formulaire
createInteractivePdf().then(() => console.log('Formulaire PDF interactif créé avec succès.'));
