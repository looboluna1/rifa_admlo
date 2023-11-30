import { AiOutlineHome, AiOutlineCloseCircle, AiFillDelete, AiOutlineOrderedList, AiFillEdit, AiOutlineMenuUnfold} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function TestComponent (){
    const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="app">
      <div className="content">
        <h1>Sua Página</h1>
        <p>Conteúdo da página.</p>
      </div>
      <nav className="navigation-menu">
        <div
          className={`menu-item ${activeItem === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          Item 1
        </div>
        <div
          className={`menu-item ${activeItem === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          Item 2
        </div>
        <div
          className={`menu-item ${activeItem === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          Item 3
        </div>
        <div className="menu-indicator" style={{ left: `${(activeItem - 1) * 33.33}%` }} />
      </nav>
    </div>
  );
}