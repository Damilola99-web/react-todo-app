import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import Events from './components/Events';
import EventForm from './components/EventForm';

function App() {
	const [ showModal, setShowModal ] = useState(false);
	const [ showEvents, setshowEvents ] = useState(true);
	const [ events, setevents ] = useState([]);
	const handleClose = () => {
		setShowModal(false);
	};
	const handleClick = (id) => {
		setevents((prevEvent) => prevEvent.filter((evento) => id !== evento.id));
	};
	return (
		<div className="App">
			<Title />
			{!showEvents && <button onClick={() => setshowEvents(true)}>show events</button>}
			{showEvents && <button onClick={() => setshowEvents(false)}>hide events</button>}

			{showEvents && <Events events={events} handleClick={handleClick} />}
			<button onClick={() => setShowModal(true)}>Add new event</button>
			{showModal && (
				<Modal handleClose={handleClose}>
					<EventForm events={events} setShowModal={setShowModal} />
				</Modal>
			)}
		</div>
	);
}

export default App;
