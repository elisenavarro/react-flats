import React from 'react';
import Flat from './flat';
// return list of flats

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        // Flat is child component
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };
  // return the FlatList
  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
