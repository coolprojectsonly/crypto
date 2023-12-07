import Image from "next/image";
import React from "react";

import {
  faNewspaper,
  faHome,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

function SideBar() {
  const navItem = [
    { icon: "faHome", name: "Home" },
    { icon: "faBitcoin", name: "Crypto" },
    { icon: "faExchangeAlt", name: "Exchanges" },
    { icon: "faNewspaper", name: "News" },
  ];

  const iconMapping = {
    faExchangeAlt,
    faHome,
    faBitcoin,
    faNewspaper,
  };

  return (
    <div
      style={{
        backgroundColor: "#33006F",
        width: "20vw",
        height: "120vh",
        position: "fixed",
        top: 0,
        // top: "0",
        // left: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10vh",
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          //   backgroundColor: "pink",
        }}
      >
        <Image
          src="/logo.png"
          width="50"
          height="50"
          alt="logo"
          style={{ marginTop: "10px", marginLeft: "5px" }}
        ></Image>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "whitesmoke",
          }}
        >
          CryptoVerse
        </h2>
      </div>
      <div style={{ width: "200px", height: "350px" }}>
        {/* <FontAwesomeIcon icon={faCheckSquare} /> */}
        {navItem.map((item) => (
          //   <FontAwesomeIcon icon={item.icon} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              marginTop: "20px",
              cursor: "pointer",
            }}
            className="sideItems"
          >
            <FontAwesomeIcon
              icon={iconMapping[item.icon]}
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "20px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />

            <div style={{ marginLeft: "15px" }}>
              <h4
                style={{
                  // marginBottom: "60px",
                  textAlign: "left",

                  cursor: "pointer",
                }}
              >
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
