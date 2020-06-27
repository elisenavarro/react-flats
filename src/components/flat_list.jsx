import React from 'react';

// return list of flats

const FlatList = (props) => {
  const renderList = () => {
      return props.flats.map((flat, index) => {
        return (
          // Flat is child component 
          <Flat />
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
