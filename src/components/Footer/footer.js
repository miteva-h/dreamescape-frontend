import React from "react";

const footer = (props) => {
    let currentDate = new Date().getFullYear();
    return (
        <footer className="text-center"
                style={{height: "30px", bottom: "-20px", width: "100%", background: "#4593b0", opacity: "0.7"}}>
            &copy; {currentDate} - DreamEscape
        </footer>
    );
}

export default footer;