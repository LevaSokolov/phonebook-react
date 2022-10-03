/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/MainPage.css';
import Input from './UI/Input/Input';


let contacts = [];

const contactListElement = document.getElementById("contacts");

document.getElementById("log-out-button").onclick = function () {
  window.location.href = "./login.html";
};

document.getElementById("search-input").onkeyup = function () {
  getContacts();
};

document.getElementById("add-contact").onclick = function () {
  addNewContact();
};

document.getElementById("clear-button").onclick = function () {
  const searchInput = document.getElementById("search-input");
  searchInput.value = "";
  getContacts();
};

function checkToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "./login.html";
  }
}

function getContacts() {
  try {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:5432/contacts", {
      method: "GET",
      headers: { Authorization: token },
    }).then((response) => {
      response.json().then((data) => {
        contacts = data;
        renderContacts();
      });
    });
  } catch (err) {
    console.error("error :", err);
  }
}

checkToken();

getContacts();

function renderContacts() {
  contactListElement.innerHTML = "";
  let searchInput = document.getElementById("search-input");
  let searchResult = contacts.filter(
    (contact) =>
      contact.first_name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase()) ||
      contact.last_name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase()) ||
      contact.phone_number.toString().includes(searchInput.value)
  );
  const displayebleContacts = searchResult;
  for (let i = 0; i <= displayebleContacts.length - 1; i++) {
    contactListElement.innerHTML = `${contactListElement.innerHTML} 
          <div class="contactsUnderline ">${displayebleContacts[i].first_name}</div> 
          <div class="contactsUnderline ">${displayebleContacts[i].last_name}</div> 
          <div class="contactsUnderline ">${displayebleContacts[i].phone_number}
          </div> <button class="deleteButton">Delete</button>`;
  }
  const deleteButtons = document.getElementsByClassName("deleteButton");
  for (let i = 0; i <= deleteButtons.length - 1; i++) {
    deleteButtons[i].onclick = function () {
      contactDelete(contacts[i].id);
    };
  }
}

function contactDelete(id) {
  try {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:5432/contacts", {
      method: "DELETE",
      headers: { Authorization: token },
      body: JSON.stringify({
        contactId: id,
      }),
    }).then((response) => {
      getContacts();
    });
  } catch (err) {
    console.error(err);
  }
}

function addNewContact() {
  const first_name = prompt("Введите имя");
  const last_name = prompt("Введите фамилию");
  const phone_number = prompt("Введите номер мобилки");
  const token = localStorage.getItem("token");
  fetch("http://127.0.0.1:5432/contacts-add", {
    method: "POST",
    headers: { Authorization: token },
    body: JSON.stringify({
      first_name,
      last_name,
      phone_number,
    }),
  }).then((response) => {
    response
      .json()
      .then((data) => {
        if (response.status === 400) {
          throw new Error(data.message);
        }
        getContacts();
      })
      .catch((e) => {
        alert(e.message);
      });
  });
}

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
