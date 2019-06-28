import React from 'react';
function Brand(props) {
    return (
        <a className="navbar-item" href={props.link}>
            {props.img ? (
                <img src={props.img.src} alt={props.img.alt} />
            ) : (
                <h1>{props.name}</h1>
            )}
        </a>
    );
}
export default Brand;
