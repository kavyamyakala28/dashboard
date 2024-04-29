import React from 'react'
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import PageContent from './Components/Pagecontent';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Sidebar />
        <PageContent />
      </div>
    </div>
  )
}
