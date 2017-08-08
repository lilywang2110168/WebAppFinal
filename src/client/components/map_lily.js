import React from 'react';
import { withGoogleMap, GoogleMap,  Marker} from "react-google-maps";
import {default as MarkerClusterer} from 'react-google-maps/lib/addons/MarkerClusterer';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.reviewers={};
        this.onMouseOver = this.onMouseOver.bind(this);
        this.markerMouse = this.markerMouse.bind(this);


    }

    shouldComponentUpdate(nextProps, nextState){
       return false;
    }

    markerMouse(ev){
        this.props.callback("");
    }

    onMouseOver(ev){
        //console.log(ev);
        let markers=ev.getMarkers();
        if(markers.length<200){
        let ids=[];
        for(let i=0; i<markers.length; i++){
           ids[i]=this.reviewers[markers[i].getZIndex()];
        }

        $.ajax({
             url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/geo/laptops/"+ids.join(",")+"?CacheUserName=SuperUser&CachePassword=SYS",
             dataType:'json',
             method: "get",
             success: data => {
                this.props.callback(data.mostLikedFeature);
                }});
    }else{
            this.props.callback("");
        }
    }

  render() {

       let markers= this.props.markers.map((marker) => {
            this.reviewers[marker.index]=marker.reviewerID;
         return <Marker
              position={{ lat: marker.location.lat, lng: marker.location.lng}}
              key={marker.index}  zIndex={marker.index} onMouseOver={this.markerMouse}
          />}
      );

      const GettingStartedGoogleMap = withGoogleMap(props => (
          <GoogleMap
              defaultZoom={4}
              defaultCenter={{ lat: 39, lng: -98.5 }}>
              <MarkerClusterer
                  averageCenter
                  enableRetinaIcons
                  gridSize={60} onMouseOver={this.onMouseOver}>
                  {markers}
              </MarkerClusterer>
          </GoogleMap>
              ));

      return<div>
        <GettingStartedGoogleMap
        containerElement={
            <div style={{ height:`80%`}} />}
        mapElement={
            <div style={{ height: `80%`}} />}/>
      </div>;
  }}

export default Map;