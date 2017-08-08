import React from 'react';
import { withGoogleMap, GoogleMap,  Marker} from "react-google-maps";
import {default as MarkerClusterer} from 'react-google-maps/lib/addons/MarkerClusterer';


class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:''
        };

        this.onMouseOver = this.onMouseOver.bind(this);

    }

    onMouseOver(ev){
        //console.log(ev);
        let markers=ev.getMarkers();
        let data={lat:ev.center_.lat(), lng:ev.center_.lng()};
        console.log(this.state.data);
        if(markers.length>10){

            for(let i=0; i<markers.length; i++){
                let lat=markers[i].position.lat();
                let lng=markers[i].position.lng();
                console.log(markers[i].getZIndex());

            }
        }
    }

    render() {

        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={4}
                defaultCenter={{ lat: 39, lng: -98.5 }}>
            </GoogleMap>
        ));

        return <GettingStartedGoogleMap
            containerElement={
                <div style={{ height:`80%`}} />}
            mapElement={
                <div style={{ height: `80%`}} />}/>
    }
}

export default Map;