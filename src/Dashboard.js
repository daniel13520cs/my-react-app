import React from 'react';
import { Table, Button, Timeline} from 'rsuite';
import NavBar from './NavBar';
import './styles.css';
import './timeline.less'
const { Column, HeaderCell, Cell } = Table;

// Define a placeholder data array
const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    age: 30,
    postcode: '12345',
    email: 'john@example.com',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'Female',
    age: 25,
    postcode: '54321',
    email: 'jane@example.com',
  },
  {
    id: 3,
    firstName: 'Daneil',
    lastName: 'Fake',
    gender: 'Male',
    age: 25,
    postcode: '321',
    email: 'Daneil@example.com',
  },
  // Add more data as needed
];

function Dashboard() {
  return (
    <div className="dashboard">
        <NavBar></NavBar>
        <div className="timeline dashboard"> {/* Apply the 'timeline' class */}
        <Timeline>
            <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
            <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
            <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
            <Timeline.Item>02:34:41 Send to Shanghai Hongkou Company</Timeline.Item>
            <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
        </Timeline>
        </div>
        <div className="table-container dashboard">
            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                console.log(rowData);
                }}
            >
                <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
                </Column>

                <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
                </Column>

                <Column width={150}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
                </Column>

                <Column width={100}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
                </Column>

                <Column width={100}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
                </Column>

                <Column width={150}>
                <HeaderCell>Postcode</HeaderCell>
                <Cell dataKey="postcode" />
                </Column>

                <Column width={300}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
                </Column>

                <Column width={80} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                    {rowData => (
                    <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                        Edit
                    </Button>
                    )}
                </Cell>
                </Column>
            </Table>
        </div>
    </div>
  );
}

export default Dashboard;