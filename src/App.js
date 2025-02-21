// File: src/App.js
import React, { useContext } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ProductSearch from './components/ProductSearch';
import ProductList from './components/ProductList';

const ThemeToggleButton = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="btn btn-outline-primary my-3" onClick={toggleTheme}>
            {isDarkTheme ? "Mode Clair" : "Mode Sombre"}
        </button>
    );
};

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <div className="container">
                    <ThemeToggleButton />
                    <ProductSearch />
                    <ProductList />
                </div>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;
