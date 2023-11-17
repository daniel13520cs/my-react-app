import React from 'react';
import { Table, Button, Timeline, FlexboxGrid, Divider } from 'rsuite';
import NavBar from '../components/NavBar';
import '../styles.css';
import '../timeline.less';
import "../grid.less";

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
    firstName: 'Daniel',
    lastName: 'Fake',
    gender: 'Male',
    age: 25,
    postcode: '321',
    email: 'Daniel@example.com',
  },
];
function AllUsers() {
  return (
    <div className="dashboard">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="table-container ">
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
            <HeaderCell>Username</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={150}>
            <HeaderCell>Password</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Created_Time</HeaderCell>
            <Cell dataKey="gender" />
          </Column>

          <Column width={100}>
            <HeaderCell>Modified_Time</HeaderCell>
            <Cell dataKey="age" />
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

export default AllUsers;
