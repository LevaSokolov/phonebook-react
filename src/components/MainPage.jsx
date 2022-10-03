/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/MainPage.css';
import Input from './UI/Input/Input';

function MainPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="header">
          <h1 className="main-title">Phone book</h1>
          <button className="log-out-button" id="log-out-button">Log Out</button>
        </div>
        <div className="search-block">
          <input
            className="search-input"
            id="search-input"
            placeholder="Search contact"
          />
          <button className="header-button" id="clear-button">Clear</button>
          <button className="header-button" id="add-contact">Add contact</button>
        </div>
        <div className="contacts-grid" id="contacts" />
      </div>
    </>
  );
}

export default MainPage;
