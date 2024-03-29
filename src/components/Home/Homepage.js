import React from "react";
import gearGif from "../../assets/images/gear.gif";
import "./style.css";
import Navbar from "../navbar/Navbar";
import manLift from "../../assets/images/manLift.jpg";

function Homepage(props) {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        {/* <div style={styles.padding}>
        <div className="bg-container">
        <div style={styles.gearContainer}>
        <img alt="gear" src={gearGif} style={styles.gear} />
        </div>
        <div style={styles.titleContainer}>
        <img alt="logo" src={JopsonLogo} style={styles.logo} />
        <Typography variant="h2" style={styles.homeName}>
        {" "}
        Jop-Son Enterprises{" "}
        </Typography>
        <Button size="large" variant="outlined" style={styles.homeButton}>
        Get Started
        </Button>
        </div>
        </div>
        <img alt="bg" src={BgImage} className="bg" />
      </div> */}
        <div className="gpt3__header section_padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">
              We Build Your Dreams Come True. Let's Make Something Amazing!
            </h1>
            <p className="gradient__text">
              Building Your Dreams Will be our Goal. We want you to just dream
              and we will make it Come True. We Plan. Design. Propose. And
              Construct. Let us Build Your Dreams! Reach us on CONTACT US or
              send your email!
            </p>
            <div className="gpt3__header-content__input">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" />
              <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
              <img src={gearGif} alt="people" />
              <p>
                500+ Projects We Have Built In The Past 12 years of Experience
              </p>
            </div>
          </div>
          <div className="gpt3__header-image">
            <img src={manLift} alt="Man-Lift" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

// const styles = {
//   container: {
//     padding: 0,
//   },
//   homeName: {
//     padding: 2,
//     fontWeight: "350",
//   },
//   homeButton: {
//     margin: 10,
//     fontSize: "30px",
//     borderRadius: "10px",
//   },
//   gearContainer: {
//     position: "absolute",
//     marginTop: "5%",
//     alignItems: "right",
//     // border: '1px solid green',
//     width: "100%",
//     paddingLeft: "70%",
//   },
//   gear: {
//     height: "100%",
//     width: "15%",
//   },
//   logo: {
//     height: "30%",
//     width: "30%",
//   },
//   titleContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     border: "1px solid green",
//     height: "100%",
//   },
// };
