import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./map.module.css";

function Map() {
  return (
    <div className={styles.mapContainer}>
      <TransformWrapper
        defaultScale={1}
        minScale={0.5}
        maxScale={5}
        wheel={{ step: 0.1 }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <div className={styles.mapWrapper}>
            <TransformComponent>
              <div className={styles.mapContent}>
                {/* Background Image */}
                <img
                  src="/images/map-background.jpg" // Make sure to use a valid image path here
                  alt="Map Background"
                  className={styles.mapImage}
                />
                {/* Text and Location Icon */}
                <div className={styles.location}>
                  <span className={styles.locationText}>New York</span>
                  <img
                    src="/images/location-icon.png" // Make sure to use a valid icon path here
                    alt="Location Icon"
                    className={styles.locationIcon}
                  />
                </div>
              </div>
            </TransformComponent>
            {/* Zoom Controls */}
            <div className={styles.zoomControls}>
              <button onClick={() => zoomIn()} className={styles.zoomButton}>
                Zoom In
              </button>
              <button onClick={() => zoomOut()} className={styles.zoomButton}>
                Zoom Out
              </button>
              <button
                onClick={() => resetTransform()}
                className={styles.zoomButton}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
}

export default Map;
