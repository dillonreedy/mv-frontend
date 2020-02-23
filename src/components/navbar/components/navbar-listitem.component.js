import React from 'react';

import './navbar-listitem.css';

const ListItem = (props) => {
    return (
      <li className="nav-item border-b-4 py-2 px-2">
        <a className="link-decoration" href={props.link}>
          <div className="link-text">{props.text}</div>
        </a>
      </li>
    );
  }

export default ListItem;