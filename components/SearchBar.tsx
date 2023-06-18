'use client';
import React from 'react';
import SearchManfucture from './SearchManfucture';
import { useState } from 'react';

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManfucture
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
