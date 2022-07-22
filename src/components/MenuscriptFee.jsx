import React from "react";
import pic from "../index.png";
import './MenuscriptFee.css';

const Manuscript = () => {
  return (
    <>
      <h2 className="heading">Manuscript Publication Fees</h2>
      <div className="wholeContent">
        <div>
          <div className="topContent">
            Publication Charges
            <br />
            The Publication charges are to be paid for qualitative manuscript
            and normal publication process. Publishing charges for online
            publication:
          </div>
          <br />
          <div className="containTable">
          <table>
            <tr>
              <th>Author Category</th>
              <th>
                Publication Fee For Single Research Paper / Review Paper /
                Article / Case Study....etc.
              </th>
            </tr>
            <tr>
              <td>Indian Author</td>
              <td>1500 INR</td>
            </tr>
            <tr>
              <td>International Author</td>
              <td>80 USD</td>
            </tr>
          </table>
          </div>
        </div>
        <hr />

        <div>
          <div className="middleContent">
            Annual Publication / Subscription for Indian Authors and
            International Authors:
          </div>
          <br />
          <div className="containTable">
          <table>
            <tr>
              <th>Author Category</th>
              <th>Annual Fee</th>
              <th>Research Paper / Review Paper / Article / Case Study….etc</th>
            </tr>
            <tr>
              <td>Indian Author</td>
              <td>10000 INR</td>
              <td>10</td>
            </tr>
            <tr>
              <td>International Author</td>
              <td>1000 USD</td>
              <td>15</td>
            </tr>
          </table>
          </div>
        </div>
        <hr />

        <div className="lowerContent">
          Account Details:
          <br />
          <br/>
          <div className="containTable">
          <table>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
            <tr>
              
                 <td>Account Holder Name</td>
                 <td>Ajay saini</td>
              
            </tr>
            <tr>
             
                 <td>Account Number</td>
                 <td>031501504230</td>
              
            </tr>
            <tr>
             
                 <td>IFC Code</td>
                 <td>Icic0000315</td>
            
            </tr>
            <tr>
                 <td>Branch</td>
                 <td> ICIC Bank,Rajapark</td>
              
            </tr>
          </table>
          </div>
          <div className="container">
              <img style={{width:"100%" ,height:"700px"} } alt="#" src="/Img/49d8136f-b876-492b-a724-53c4f1734615.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manuscript;