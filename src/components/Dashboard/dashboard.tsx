import { Link } from "@material-ui/core";
import React, { useState } from "react";
import "./dashboard.css";
import { useHistory } from "react-router";

export const Dashboard: React.FC = () => {
  const userName = localStorage.getItem("userAuthenticated") || "";
  const history = useHistory();
  const [url1Text, setUrl1Text] = useState<string>("");
  const [url2Text, setUrl2Text] = useState<string>("");
  const [url1, setUrl1] = useState<string>("");
  const [url2, setUrl2] = useState<string>("");

  const handleLogout = () => {
    localStorage.removeItem("userAuthenticated");
    history.push("/login");
  };

  const handleUrlChange = (
    event: React.FocusEvent<HTMLInputElement>,
    urlNumber: number
  ) => {
    if (urlNumber === 1) {
      setUrl1(event.target.value);
    } else {
      setUrl2(event.target.value);
    }
  };

  const renderEmptyDiv = () => {
    return (
      <div className="emptyMessage">
        Enter some website address to start rendering..
      </div>
    );
  };

  return (
    <>
      <div className="dashboardWrapper">
        <div className="headerRow">
          <div className="headerLHS">
            <label>{userName}</label>
            <input
              type="text"
              value={url1Text}
              placeholder="Enter Site Name"
              onChange={(e) => setUrl1Text(e.target.value)}
              onBlur={(e) => handleUrlChange(e, 1)}
            />
          </div>
          <div className="headerRHS">
            <input
              type="text"
              value={url2Text}
              placeholder="Enter Site Name"
              onChange={(e) => setUrl2Text(e.target.value)}
              onBlur={(e) => handleUrlChange(e, 2)}
            />
            <Link onClick={handleLogout}>Logout</Link>
          </div>
        </div>
        <div className="content">
          <div className="contentLHS">
            <div className="siteContainer">
              {url1?.length > 0 ? (
                <iframe
                  src={`https://${url1}`}
                  name="targetframe"
                  frameBorder="0"
                  className="viewFrame"
                />
              ) : (
                renderEmptyDiv()
              )}
            </div>
          </div>
          <div className="contentRHS">
            <div className="siteContainer">
              {url1?.length > 0 ? (
                <iframe
                  src={`https://${url2}`}
                  name="targetframe"
                  frameBorder="0"
                  className="viewFrame"
                />
              ) : (
                renderEmptyDiv()
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
