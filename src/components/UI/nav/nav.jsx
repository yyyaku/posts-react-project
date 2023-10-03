import React from "react";
import { Link } from "react-router-dom";

function nav() {
    return (
        <div className="nav">
            <div className="nav__links">
                <Link className="nav__link" to="/about">
                    О сайте
                </Link>
                <Link className="nav__link" to="/posts">
                    Посты
                </Link>
            </div>
        </div>
    );
}

export default nav;
