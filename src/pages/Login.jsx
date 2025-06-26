import logo from "src/assets/logo.png";
import image2 from "src/assets/image2.png";
import styled from "styled-components";
import { Button, Card, CardBody, Input, Heading, Paragraph } from "src/components/neubruatalist/neubratalist";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border: 4px solid black;
  border-radius: 0.5rem;
  box-shadow: 8px 8px 0 black;
  overflow: hidden;
  max-width: 960px;
`;

const LeftSide = styled.div`
  background: linear-gradient(to bottom right, var(--color-main), #e0f0ff);
  clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
  padding: 2.5rem;
  color: white;
  font-family: monospace;
`;

const RightSide = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
`;

export default function Login() {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-main to-accent flex items-center justify-center">
            <Grid>
                {/* Left Side */}
                <LeftSide>
                    <Heading style={{ color: "#084268" }}>
                        Stay <span style={{ color: "white" }}>Ahead</span> of Threats.
                    </Heading>
                    <Paragraph style={{ color: "white", marginBottom: "1rem" }}>
                        <strong>Track</strong> Phishing in <strong>Real</strong> Time.
                    </Paragraph>
                    <div className="flex justify-center">
                        <img className="h-65 w-65" src={image2} alt="Illustration" />
                    </div>
                </LeftSide>

                {/* Right Side */}
                <RightSide>
                    <form className="w-full max-w-sm space-y-4">
                        <div className="flex justify-center mb-4">
                            <Logo src={logo} alt="Logo" />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-mono">Username</label>
                            <Input type="text" placeholder="Enter your username" />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-mono">Password</label>
                            <Input type="password" placeholder="Enter your password" />
                        </div>

                        <label className="flex items-center space-x-2 text-sm font-mono">
                            <input type="checkbox" className="accent-black" />
                            <span>Remember me</span>
                        </label>

                        <Button type="submit">Login</Button>

                        <a
                            href="#"
                            className="text-gray-600 font-mono text-sm text-center block hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </form>
                </RightSide>
            </Grid>
        </div>
    );
}
