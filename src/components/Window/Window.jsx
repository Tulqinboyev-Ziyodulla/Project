import React, { useState } from "react";
import './window.css'

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ image, info });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ma'lumot kiriting</h2>
        <input
          type="text"
          placeholder="Rasm URL manzili"
          value={image}
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Matn"
          value={info}
          onChange={handleInfoChange}
        />
        <button onClick={handleSubmit}>Saqlash</button>
        <button onClick={onClose}>Yopish</button>
      </div>
    </div>
  );
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleOpenModal}>Add</button>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddItem}
      />

      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt="Kiritilgan rasm" />
            <p>{item.info}</p>
            <button onClick={() => handleDeleteItem(index)}>O'chirish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
