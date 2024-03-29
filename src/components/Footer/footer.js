import React from "react";

const footer = (props) => {
    let currentDate = new Date().getFullYear();
    return (
        <footer className="text-center"
                style={{
                    background: "black",
                    color: "white",
                    height: "auto",
                    width: "100%",
                }}>
            &copy; {currentDate} - DreamEscape
        </footer>
    );
}

export default footer;