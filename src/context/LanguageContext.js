// File: src/context/LanguageContext.js
import React, { createContext, useState } from 'react';

// Création du LanguageContext avec des valeurs par défaut
export const LanguageContext = createContext({
    language: 'fr',
    setLanguage: () => {},
    t: (key) => key,
});

// Création du Provider pour gérer l'état de la langue et les traductions
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');

    const translations = {
        fr: {
            search_placeholder: "Rechercher un produit...",
            reload: "Recharger",
            previous: "Précédent",
            next: "Suivant",
            page: "Page",
            of: "sur",
            loading: "Chargement...",
            error: "Erreur",
            price: "Prix"
        },
        en: {
            search_placeholder: "Search for a product...",
            reload: "Reload",
            previous: "Previous",
            next: "Next",
            page: "Page",
            of: "of",
            loading: "Loading...",
            error: "Error",
            price: "Price"
        }
    };

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

