import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.409538,
      lng: 16.931992,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className='rounded-lg overflow-hidden'
        style={{ height: '180px', width: '100%' }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA2CyPnVLi2D9uporpuTlm17m-cY7-FDa4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={52.409538} lng={16.931992} text='Poznań' />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
