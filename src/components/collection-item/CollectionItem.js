import React, { useContext } from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { Context } from '../../context/renderToogleContext'

const CollectionItem = ({ item }) => {
  const {  name, price, imageUrl } = item
  const {state, addItems } = useContext(Context)


  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItems(item)}
      >
        Add To Cart{' '}
      </CustomButton>
    </div>
  )
}

export default CollectionItem
