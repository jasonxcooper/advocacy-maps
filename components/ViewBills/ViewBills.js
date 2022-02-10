import React from "react";
import { useRouter } from "next/router"
import { bills } from "../MockAPIResponse"
import { Table, Container, NavLink, Button } from 'react-bootstrap'
import ViewBill from "../ViewBill/ViewBill"

const ViewBills = (props) => {
  const router = useRouter()
  
  const billsComponent = !bills ? "" :
    bills.map((bill, index) => {
      const billNumForURL = bill.billNumber.replace('.', '')
      const url = `/bill/${billNumForURL}`
      return (
      <tr key={index}>
        <td><NavLink href={url}>{bill.billNumber}</NavLink></td>
        <td>{bill.title}</td>
        <td>{bill.primarySponsor.name}</td>
        <td>0</td>
        <td>
          <Button variant="primary" onClick={() => router.push(`/bill/${billNumForURL}`)}>
            View Bill
          </Button>
          {/* <ViewBill
            bill={bill}
          /> */}
        </td>
      </tr>
      )
    }
  )
  
  return (
    <Container>
      <h1>Most Active Bills </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bill #</th>
            <th>Bill Name</th>
            <th>Lead</th>
            <th># Testimony</th>
          </tr>
        </thead>
        <tbody>
          {billsComponent}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewBills;

