import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.loadChildren = this.loadChildren.bind(this);
  }

  loadChildren () {
    let childElements = this.props.elements.map( el => {
      return (
        <li className="image-element-class">
          <img src={el.src} />
        </li>
      );
    });
  }

  render() {
    let masonryOptions = {
      transitionDuration: 0
    };

    return (
      <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                { this.loadChildren() }
            </Masonry>
    );
  }
}
