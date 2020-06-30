import React from 'react'
import Model from 'react-model';
import styles from './Popup.module.css'

const Popup = ({ open }) => {
    return (
        <Model isOpen={open}>
            <h2>Hello</h2>
        </Model>
    );
}

export default Popup;