// File: src/components/ProductSearch.js
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import useDebounce from '../hooks/useDebounce';

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { isDarkTheme } = useContext(ThemeContext);
    const { t } = useContext(LanguageContext);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return (
        <div className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t("search_placeholder") || "Rechercher un produit..."}
                className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
                style={isDarkTheme ? { color: 'white' } : {}}
            />
        </div>
    );
};

export default ProductSearch;
