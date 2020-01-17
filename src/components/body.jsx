import React from "react";
import ShadedBoxes from "./shadedBox";

import { connect } from "react-redux";
import { AddAction, MinuAction } from "../redux/action";

import "./body.css";

const BodyContainer = ({ count, add, minus }) => {
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        <div className='upperBoxes' />
        <div className='upperBoxes' />

        <div
          className='circleBox'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className='circle'></div>
        </div>

        <div className='upperBoxes' />
        <div className='upperBoxes' />
        <div className='upperBoxes' />
        <div className='upperBoxes' />
        <div className='upperBoxes' />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        <div className='flexible' style={{ flexShrink: "0" }} />
        <div
          className='flexible'
          style={{ flexShrink: "0", background: "#9E00FF" }}
        />
        <div className='flexible' style={{ flexShrink: "0" }}></div>
        <div
          className='flexible'
          style={{ flexShrink: "0", background: "#00FF66" }}
        />
        <div className='flexible' style={{ flexShrink: "0" }} />
        <div
          className='flexible'
          style={{ flexShrink: "0", background: "#BD00FF" }}
        />
      </div>
      <div className='detailBox'>
        <div className='detailCont'>
          <div
            className='textBlock'
            style={{ margin: 0, marginRight: "20px", width: "70%" }}
          >
            <h1
              style={{
                fontSize: "70px",
                color: "white",
                padding: 0,
                margin: 0
              }}
            >
              This is a sample project test
            </h1>
            <p
              style={{
                fontSize: "50px",
                color: "white",
                padding: 0,
                margin: 0
              }}
            >
              This is a sample project test
            </p>
            <div style={{ margin: 0, color: "white", marginRight: "150px" }}>
              <p style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                egestas pretium tincidunt tellus massa pharetra nulla. Rhoncus
                morbi dui, enim vulputate feugiat vitae amet pellentesque.
              </p>
            </div>
          </div>
          <div className='counterCont'>
            <div
              style={{
                display: "flex",
                padding: "10px",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h1
                className='displayCount'
                style={{ fontSize: "10em", padding: 0, margin: 0 }}
              >
                {" "}
                {count}{" "}
              </h1>
              <button className='btnStyle' onClick={() => add()}>
                Add
              </button>
              <button className='btnStyle' onClick={() => minus()}>
                Minus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ CounterReducer: { counter } }) => ({
  count: counter
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(AddAction()),
  minus: () => dispatch(MinuAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
