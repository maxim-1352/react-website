import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import photo4 from "../../assets/img/photo4.jpg";
import photo5 from "../../assets/img/photo5.jpg";
import photo6 from "../../assets/img/photo6.jpg";
import photo7 from "../../assets/img/photo7.jpg";
import photo8 from "../../assets/img/photo8.jpg";
import "./Made.scss";

const Made = () => {
  return (
    <div className="made">
      <div className="container">
        <div className="made-box">
          <h2>made with love</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="made-box-tabs">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Buildings</Tab>
              <Tab>Interior design</Tab>
              <Tab>isolation</Tab>
              <Tab>Plumbing</Tab>
            </TabList>

            <TabPanel>
              <div className="photos">
                <img src={photo4} alt="alt" className="photo img1" />
                <img src={photo5} alt="alt" className="photo img2" />
                <img src={photo6} alt="alt" className="photo img3" />
                <img src={photo7} alt="alt" className="photo img4" />
                <img src={photo8} alt="alt" className="photo img5" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="photos">
                <img
                  src={photo4}
                  alt="alt"
                  className="photo img1"
                  style={{
                    maxWidth: "288px",
                    height: "100%",
                    gridColumnStart: "3",
                    gridColumnend: "3",
                    gridRowStart: "1",
                    gridRowEnd: "3",
                  }}
                />
                <img
                  src={photo5}
                  alt="alt"
                  className="photo img2"
                  style={{
                    maxWidth: "565px",
                    height: "100%",
                    gridColumnStart: "1",
                    gridColumnend: "3",
                    gridRowStart: "1",
                    gridRowEnd: "5",
                  }}
                />
                <img src={photo6} alt="alt" className="photo img3" />
                <img src={photo7} alt="alt" className="photo img4" />
                <img src={photo8} alt="alt" className="photo img5" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="photos">
                <img src={photo4} alt="alt" className="photo img1" />
                <img src={photo5} alt="alt" className="photo img2" />
                <img src={photo6} alt="alt" className="photo img3" />
                <img src={photo7} alt="alt" className="photo img4" />
                <img src={photo8} alt="alt" className="photo img5" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="photos">
                <img
                  src={photo4}
                  alt="alt"
                  className="photo img1"
                  style={{
                    maxWidth: "288px",
                    height: "100%",
                    gridColumnStart: "3",
                    gridColumnend: "3",
                    gridRowStart: "1",
                    gridRowEnd: "3",
                  }}
                />
                <img
                  src={photo5}
                  alt="alt"
                  className="photo img2"
                  style={{
                    maxWidth: "565px",
                    height: "100%",
                    gridColumnStart: "1",
                    gridColumnend: "3",
                    gridRowStart: "1",
                    gridRowEnd: "5",
                  }}
                />
                <img src={photo6} alt="alt" className="photo img3" />
                <img src={photo7} alt="alt" className="photo img4" />
                <img src={photo8} alt="alt" className="photo img5" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="photos">
                <img src={photo4} alt="alt" className="photo img1" />
                <img src={photo5} alt="alt" className="photo img2" />
                <img src={photo6} alt="alt" className="photo img3" />
                <img src={photo7} alt="alt" className="photo img4" />
                <img src={photo8} alt="alt" className="photo img5" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Made;
