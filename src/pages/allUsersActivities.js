import React from 'react';
import { Table, Button, Timeline, FlexboxGrid, Divider } from 'rsuite';
import NavBar from '../components/NavBar';
import '../styles.css';
import '../timeline.less';
import "../grid.less";

const { Column, HeaderCell, Cell } = Table;

function AllUsersActivities() {
  return (
    <div className="dashboard">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="timeline ">
        <Timeline>
          <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
          <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
          <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
          <Timeline.Item>02:34:41 Send to Shanghai Hongkou Company</Timeline.Item>
          <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default AllUsersActivities;
