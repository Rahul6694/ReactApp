
import React from "react";
import './Join.css';

const Join = () => {
    return(
        <>
        <h2>Join our Board</h2>
        <div class="container">
  <form>
  
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First Name" required/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last Name" required/>

    <select id="gender" name="gender" value="Male" required>
         <option value="Male">Male</option>
   <option value="Female">Female</option>
   <option value="Transgender">Transgender</option>
   </select>

    <label for="email">E-mail</label>
    <input type="email" id="email" name="mailadd" placeholder="Enter E-mail address" />

    <label for="pnumber">Phone Number</label>
    <input type="tel" id="pnumber" name="phonenum" placeholder="10 digits number" pattern="[0-9]{10}" required/>
    <label for="pnumber">Alternate Phone Number</label>
    <input type="tel" id="pnumber" name="phonenum" placeholder="10 digits number" pattern="[0-9]{10}"/>

    <label for="address">Address</label>
    <textarea id="address" name="subject" placeholder="Write your Address Here." style={{height:"200px"}}></textarea>

    <label for="city">City</label>
    <input type="text" id="city" name="city" placeholder="Enter City" required/>

    <label for="state">State</label>
    <input type="text" id="state" name="state" placeholder="Enter State" required/>

    <label for="pincode">Pincode</label>
    <input type="tel" id="pincode" name="pincode" placeholder="Enter Pincode" required/>

    <h4>Upload File (.PDF/.DOC/.DOCX):</h4>
    
    <input type="file" id="myFile" name="filename"></input>
    <br/><br/>
    <input type="submit" value="Submit" />
  </form>
  </div>
        </>
    );
}
export default Join;