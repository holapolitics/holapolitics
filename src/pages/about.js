import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLoad } from "react-router-dom-animation";
import { motion } from "framer-motion";

const Body = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Page = (routerLocation, isAnimation) => {
  const [isLoad, setLoad] = useLoad();

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <Body
      style={{ background: "#1bbc9b", zIndex: 111 }}
      // initial={{ scale: isLoad ? 1 : 1 }}
      // animate={{ scale: isAnimation ? 1 : isLoad ? 1 : 1 }}
      // exit={{ scale: 1 }}
      // transition={{ duration: 0.3 }}
    >
      <div>
        <div>
          <Link style={{ textDecoration: "none" }} >
          {/* <Link style={{ textDecoration: "none" }} to="/2" animate="next"> */}
            <div
              style={{
                color: "#fff",
                height: "99vh",
                width: "95vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                paddingLeft: "2em",
                paddingRight: "2em",
                textAlign: "center",
              }}
            >
              <div>
                <h1>Senyores i senyors polítics,</h1>
                <h2>Senyores i senyors polítics,</h2>
                <h2>Sou tant bons que m'ho heu solucionat tot</h2>
                <h2>Gràcies</h2>
                <br />
                {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
                  <g id="XMLID_28_">
                    <g>
                      <path d="M346.154,52.5c-1.013,0-2.025,0.012-3.032,0.034c-57.867,1.293-106.209,46.105-112.447,104.238
			c-1.117,10.407,3.111,20.459,11.31,26.89l36.291,28.471c5.201,4.08,3.825,9.552,3.279,11.132c-0.546,1.58-2.841,6.735-9.452,6.735
			h-58.874c-12.621,0-23.644,7.635-28.083,19.449c-4.439,11.814-1.17,24.818,8.328,33.129l19.451,17.02
			C223.776,309.092,230,322.807,230,337.226V380c0,5.523,4.477,10,10,10c5.522,0,10-4.477,10-10v-42.774
			c0-20.187-8.713-39.388-23.905-52.68l-19.451-17.02c-4.836-4.231-3.347-9.522-2.776-11.043c0.571-1.521,2.935-6.483,9.361-6.483
			h58.874c12.985,0,24.116-7.931,28.356-20.205c4.239-12.273,0.377-25.383-9.839-33.398l-36.292-28.471
			c-2.736-2.146-4.144-5.518-3.768-9.02c5.169-48.174,45.155-85.308,93.009-86.377c0.859-0.02,1.721-0.029,2.585-0.029
			C408.929,72.5,460,123.752,460,186.75c0,30.872-13.555,59.91-37.19,79.669L264.87,398.465c-6.969,5.826-15.802,9.035-24.87,9.035
			c-9.069,0-17.901-3.209-24.87-9.035L57.189,266.419C33.555,246.66,20,217.622,20,186.75C20,123.752,71.071,72.5,133.846,72.5
			c26.294,0,50.986,8.739,71.408,25.272c4.292,3.474,10.589,2.812,14.064-1.48c3.476-4.292,2.813-10.589-1.479-14.064
			C194.16,63.057,164.331,52.5,133.846,52.5C60.043,52.5,0,112.724,0,186.75c0,36.812,16.169,71.443,44.361,95.013l157.941,132.046
			C212.862,422.638,226.25,427.5,240,427.5s27.138-4.862,37.699-13.691l157.94-132.046C463.831,258.193,480,223.562,480,186.75
			C480,112.724,419.957,52.5,346.154,52.5z"/>
                    </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg> */}
                {/* <h2>- declaraciones grandilocuentes</h2>
              <h2>+ solucionar problemas</h2> */}
                <br />
                <br />
                {/* <p>Desembre 2022</p> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Body>
  );
};

export default Page;