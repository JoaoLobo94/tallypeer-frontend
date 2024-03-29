import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setContribution } from "../../store/actions/index";
import { Card } from "react-bootstrap";

const CompanyContributionsTable = () => {
  const [contributions, setContributions] = useState([]);
  const [failed, setFailed] = useState(false);
  const credentials = useSelector((state) => state.credentials);
  const user = useSelector((state) => state.user);
  const company = useSelector((state) => state.company);
  const history = useNavigate();
  const dispatch = useDispatch();

  const auth = {
    headers: {
      "access-token": credentials.token,
      client: credentials.client,
      uid: user.uid,
    },
  };
  useEffect(() => {
    const contributions = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_BACKEND_LOCATION}/${process.env.REACT_APP_API}/companies/${company.id}/contributions`,
          auth
        )
        .then((response) => {
          setContributions(response.data);
        })
        .catch(() => {
          setFailed(true);
        });
    };
    contributions();
  }, [failed]);

  const viewContribution = (contribution) => {
    dispatch(setContribution(contribution));
    history("/contributions/" + contribution.id);
  };
  if (contributions.length > 0) {
    return (
      <div>
        <Card>
          <Card.Header>
            <h2 className="mt-3">Contributions</h2>
          </Card.Header>
        </Card>
        <Table striped bordered responsive="xl">
          <thead>
            <tr>
              <th>Title</th>
              <th>Pull request</th>
              <th>Merged</th>
              <th>Work started</th>
              <th>Value for distribution</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((contribution) => (
              <tr>
                <td>{contribution.title}</td>
                <td>{contribution.pull_request}</td>
                <td>{contribution.merged ? "Yes" : "No"}</td>
                <td>{contribution.accepted_for_start ? "Yes" : "No"}</td>
                <td>{contribution.current_value ? contribution.current_value : 0} SAT</td>
                <td>
                  <Nav.Link onClick={() => viewContribution(contribution)}>View</Nav.Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CompanyContributionsTable;
