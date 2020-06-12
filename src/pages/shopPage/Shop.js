import React, {useState} from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/colection-preview/CollectionPreview';

const Shop = () => {
  const [shopData] = useState (SHOP_DATA);
  return (
    <div>
      {shopData.map(({id, ...other}) => {
      return  <CollectionPreview key={id} {...other} />
      })}

    </div>
  );
};

export default Shop;
