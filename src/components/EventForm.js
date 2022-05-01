import React from 'react';
import './EventForm.css';
import { useState } from 'react';

export default function EventForm({events, setShowModal}) {
  const [EventTitle, setEventTitle] = useState('');
  const [EventDate, setEventDate] = useState('');
  return (
    <form className='eventform' 
    onSubmit={ (e) => {
      e.preventDefault();
      events.unshift({name : EventTitle, date : EventDate, id : events.length+1})
      setShowModal(false)
      

    }}>
        <label htmlFor="title">
            <span>Event Title: </span> 
            <input type="text" onChange={ (e)=> {
              setEventTitle(e.target.value)
            }} />
        </label>
        <label>
            <span>Event Date: </span> 
            <input type="date"  onChange={ (e)=> {
              setEventDate(e.target.value)
            }}/>
        </label>
        <button >submit</button>
    </form>
  );
}
