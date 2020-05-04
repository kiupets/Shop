import React from 'react';
import data from './data';
import './directory.styles.scss';
import MenuItem from '../menuItems/menu-item';

const Directory = () => {
  const sections = data.map (({id, title, imageUrl, size}) => {
    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
  });
  return (
    <div className="directory-menu">
      {sections}
    </div>
  );
};
export default Directory;
