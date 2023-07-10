let language = 'te'; // Default language is Telugu

// JSON object containing translations
const translations = {
    en: {
        name: 'Politician Name',
        party: 'Party',
        changeLanguage: 'Change Language'
    },
    te: {
        name: 'పోలిటిషియన్ పేరు',
        party: 'పార్టీ',
        changeLanguage: 'భాషా మార్చు'
    }
};

// Function to change language
function changeLanguage() {
    if (language === 'te') {
        language = 'en';
    } else {
        language = 'te';
    }

    // Update the text content based on the selected language
    document.getElementById('politician-name').textContent = translations[language].name;
    document.getElementById('party').textContent = translations[language].party;
    document.getElementById('change-language').textContent = translations[language].changeLanguage;
}

// Event listener for the language change button
document.getElementById('change-language').addEventListener('click', changeLanguage);
