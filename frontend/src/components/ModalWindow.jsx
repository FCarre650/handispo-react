import Modal from 'react-modal';


export default function ModalWindow({isOpen, isClose}) {
    return (
        <>
            <Modal isOpen = {isOpen}>
                <input
                    placeholder='Rechercher par code postal'
                ></input>
                <select >
                    <option value="">
                        Sports
                    </option>
                </select>
                <select >
                    <option value="">
                        Type de handicap
                    </option>
                </select>

                <button onClick={isClose}>Close</button>
            </Modal>
        </>
    );
}
    