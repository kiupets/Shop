import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, inx) => inx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />
          })}
      </div>
    </div>
  )
}

export default CollectionPreview
