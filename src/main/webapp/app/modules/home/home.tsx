import './home.scss';
import HomeGrid from 'app/shared/components/HomeGrid';
import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import SearchBar from './SearchBar/searchbar';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <div>
        <SearchBar />
        <h1>NetClips</h1>
        <HomeGrid />
      </div>
    </>
  );
};

export default Home;
