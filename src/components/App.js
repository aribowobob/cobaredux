import React from 'react';
import AddMember from '../containers/AddMember';
import VisibleMemberList from '../containers/VisibleMemberList';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Aplikasi Daftar Anggota</h1>
    </div>
    <AddMember />
    <VisibleMemberList />
  </div>
);

export default App;
