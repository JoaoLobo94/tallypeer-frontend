import "./signIn.css";
import SignInCard from "../../components/cards/signInCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BitcoinDonation from "../../assets/images/address.png";
import { Card } from "react-bootstrap";

const SignIn = () => {
  return (
    <div>
      <Container className="mt-3 mb-3">
        <Card>
          <Card.Header>
            <h1>Welcome to decentralized working MVP</h1>
          </Card.Header>
          <Card.Body>
            The objective of this project is to enable Bitcoin earnings in a decentralized manner, without any company
            structure, bureaucracy, or KYC
          </Card.Body>
        </Card>
      </Container>
      <Row>
        <SignInCard />
      </Row>
      <Container className="justify-content-center mt-3">
        <h2 className="d-flex justify-content-center">Donate</h2>
        <Row className="justify-content-center">
          <img className="bitcoin-address" src={BitcoinDonation} alt="Single Addr" />
          <p className="d-flex justify-content-center">bc1qxugylzf53rapk39cpmfhwm8cxk4j2yn96j0ycn</p>
          <p className="d-flex justify-content-center">Contact all issues: deworkbtc@gmail.com </p>
        </Row>
      </Container>
      <div className="fade-in">
        <Container className="mt-3">
          <Card className="mb-2">
            <Card.Header>
              <h2>How do i register my company</h2>
            </Card.Header>
            <Card.Body>
              Simply create an account, link it to your github. We will generate a BTC wallet for you, that can receive
              contributions, or you can actually give your clients for payment. You will be able to withdraw funds if
              its your company
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Header>
              <h2>How do i contribute</h2>
            </Card.Header>
            <Card.Body>
              <p>
                Simply join the company. Push a commit to github and let the project owner know by adding your pull
                request link
              </p>
              <p>
                Very simply put, you will be able to contribute to github projects that sign up. Once the github project
                owner is happy with your contribution he will click pay, and you will get money.
              </p>
              <p>
                If there is interest for this a project, I will improve it until it becomes as seamless as pushing a
                commit in order to earn Bitcoin for your work. For now the owner of the project will have to know which
                user made the contribution of github, and pay them here.
              </p>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Header>
              <h2>How much will i get per contribution</h2>
            </Card.Header>
            <Card.Body>
              <p>
                I have designed a stock market like funcionality where you can estimate a merge request value. An
                algorithm will join all these up and return a fare estimate for the employer and employee
              </p>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Header>
              <h2>What lies in the future</h2>
            </Card.Header>
            <Card.Body>
              <p>
                First thing, i will make this project non custodial. At present time, its custodial, because its easier
                to develop. If people use this, it soon wont be.
              </p>
              <p>
                There are many improvements to be made. This is a simple version of my idea. Let me know if you like it
                by donating.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
