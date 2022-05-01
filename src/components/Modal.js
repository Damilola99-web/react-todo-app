import root from 'react-dom';
import './Modal.css';
export default function Modal({ children, handleClose }) {
	return root.createPortal(
		<div className="modal-backdrop">
			<div className="modal" style={{ border: 'solid 4px orangered', textAlign: 'center' }}>
				{children}
				<button onClick={handleClose}>close</button>
			</div>
		</div>,
		document.body
	);
}
