import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function() {
    return (
    <div className="content-page-wrapper">
        <div 
        className="left-column">
            <h1>Picture</h1>
        </div>
        <div className="right-column">
        <div className="contact-bullet-points">
            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="phone" />

                </div>
                    <div className="text">
                        555-555-5555
                    </div></div>

                    <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="envelope" />

                </div>
                    <div className="text">
                        email
                    </div></div>

                    <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />

                </div>
                    <div className="text">
                        Address
                    </div>
            </div>
        </div>
        </div>
        </div>
    );
}

