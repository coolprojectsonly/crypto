import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./action";

function App() {
  const { data, error, status } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, []);

  console.log(data);

  return (
    <div
      style={{
        // backgroundColor: "green",
        marginLeft: "20vw",
      }}
    >
      <div
        style={{
          // backgroundColor: "whitesmoke",
          width: "80vw",
          height: "8vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "purple",
            textDecoration: "underline",
          }}
        >
          Cryptocurrency Coins{" "}
          <span style={{ color: "black" }}>Ranking App</span>{" "}
        </h1>
      </div>
      <div
        style={{
          width: "80vw",
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        <div>
          <h1 style={{ marginLeft: "20px", color: "blue" }}>
            Global Crypto Stats
          </h1>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total Cryptocurrencies</h4>
            <h4 style={{ margin: "10px" }}>{data?.data?.stats?.total}</h4>
          </div>

          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "antiquewhite",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total Exchanges</h4>
            <h4 style={{ margin: "10px" }}>
              {data?.data?.stats?.totalExchanges}
            </h4>
          </div>

          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "aliceblue",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total Market Cap</h4>
            <h4 style={{ margin: "10px" }}>
              {data?.data?.stats?.totalMarketCap}
            </h4>
          </div>

          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total 24h Volume</h4>
            <h4 style={{ margin: "10px" }}>
              {data?.data?.stats?.total24hVolume}
            </h4>
          </div>
          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "beige",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total Cryptocurrencies</h4>
            <h4 style={{ margin: "10px" }}>{data?.data?.stats?.totalCoins}</h4>
          </div>

          <div
            style={{
              marginLeft: "50px",
              height: "100px",
              background: "aliceblue",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: "10px" }}>Total Markets</h4>
            <h4 style={{ margin: "10px" }}>
              {data?.data?.stats?.totalMarkets}
            </h4>
          </div>
        </div>

        <div>
          <h1 style={{ marginLeft: "20px" }}>Top 10 Cryptos in the World</h1>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {data?.data?.coins?.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 1fr",
                  border: "5px solid beige", // Pink border color
                  borderRadius: "8px", // Add border radius for a softer look
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle box shadow
                }}
              >
                <div style={{ backgroundColor: "transparent" }}>
                  <h3 style={{ marginLeft: "20px", color: "#333" }}>
                    {item.rank} {item.name}
                  </h3>
                </div>

                <div>
                  <img
                    src={item.iconUrl}
                    alt="Bitcoin Logo"
                    style={{
                      backgroundColor: "#FF0000", // Red background for the logo
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%", // Make the logo circular
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add subtle box shadow
                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                  />
                </div>

                <div
                  style={{
                    margin: "10px",
                    display: "grid",
                    borderTop: "1px solid #FF69B4", // Pink border color for the top border
                    paddingTop: "10px", // Add padding for space
                  }}
                >
                  <div>
                    <h4 style={{ color: "#333" }}>Price</h4>
                    <h4 style={{ color: "#333" }}>Market Cap</h4>
                    <h4 style={{ color: "#333" }}>Daily Changes</h4>
                  </div>
                </div>

                <div
                  style={{
                    margin: "10px",
                    display: "grid",
                    borderTop: "1px solid #FF69B4", // Pink border color for the top border
                    paddingTop: "10px", // Add padding for space
                  }}
                >
                  <div>
                    <h4 style={{ color: "#333" }}>{Math.round(item.price)}</h4>
                    <h4 style={{ color: "#333" }}>
                      {Math.round(item.marketCap / 1000000)}M
                    </h4>
                    <h4 style={{ color: "#333" }}>{item.change}</h4>
                  </div>
                </div>
              </div>
              ;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
