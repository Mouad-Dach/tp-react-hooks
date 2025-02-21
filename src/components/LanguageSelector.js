import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Correct import

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <select value={language} onChange={handleChange} className="form-select">
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
};

export default LanguageSelector;