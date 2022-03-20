import React from "react";
import s from "./Searchbar.module.css";

const Searchbar = ({ query, handleSetQuery, handleSubmitForm }) => {
    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSubmitForm}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    onChange={handleSetQuery}
                    value={query}
                    name="query"
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

export default Searchbar;