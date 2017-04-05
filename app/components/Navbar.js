import React from 'react';
import { Link, browserHistory } from 'react-router';

export default () => {
  return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/students" activeClassName="active">Students</Link>
              </li>
              <li>
                <Link to="/campuses" activeClassName="active">Campuses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}