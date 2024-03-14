'use client'
import React, { useRef, useState } from 'react';

const Dropdown = (props) => {

    const {className, children} = props;
  const [show, setShow] = useState(null);

  const toggleDropdown = (id) => {
    setShow(show === id ? null : id);
  };

  return (
    <div className={className}>
        {React.Children.map(children, (anak, id) =>
            React.cloneElement(anak, {
                isOpen: show === anak.props.id,
                onToggle: toggleDropdown,
            })
        )}
    </div>
  );
};


export const DropdownItem = (props) => {

    const { id, title, children, isOpen, onToggle } = props;

    const contentRef = useRef(null);
    const height = contentRef.current && contentRef.current.scrollHeight;

  return (
    <div>
        <button onClick={() => onToggle(id)} className="px-4 py-3 my-1 text-zinc-400 hover:text-white border-b border-zinc-800 flex justify-between items-center w-full duration-200">
          <p className={`${isOpen ? 'text-primary' : 'text-zinc-400'} duration-200`}>{title}</p><i className={`${isOpen && 'rotate-90'} fa fa-xs fa-fw fa-chevron-right duration-200`}/>
        </button>
        <div ref={contentRef} style={{maxHeight: isOpen ? `${height}px` : '0px'}} className={`${isOpen ? 'opacity-100' : 'opacity-50'} overflow-hidden transition-[max-height, opacity] duration-500`}>
          <div className="text-zinc-400 p-4">
            {children}
          </div>
        </div>
    </div>
  );
};

export default Dropdown;
