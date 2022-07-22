import React from 'react'

const Publication = () => {
  return (
    <div>
        <div className='card'>
            <h6>Manuscript Publication Fees</h6>
            <hr></hr>
            <p style={{fontSize:"10"}}><strong>Publication Charges</strong></p>
            <hr></hr>
            <p>The Publication charges are to be paid for qualitative manuscript and normal publication process. Publishing charges for online publication:</p>
            <table>
                <tr>
                    <th>Author Category</th>
                    <th>Publication Fee For Single Research Paper / Review Paper / Article / Case Study....etc.</th>
                </tr>
                <tr>
                    <td>Indian Author</td>
                    <td> 1500  INR</td>
                </tr>
                <tr>
                    <td>International Author</td>
                    <td> 80 USD</td>
                </tr>
            </table>
            <br/>
            <hr></hr>
            <p><strong>Annual Publication / Subscription for Indian Authors and International Authors:</strong></p>
            <hr></hr>
            <table>
                <tr>
                    <th>Author Category</th>
                    <th>Annual Fee</th>
                    <th>Research Paper / Review Paper / Article / Case Study….etc</th>
                </tr>
                <tr>
                    <td>Indian Author</td>
                    <td>10000  INR</td>
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
  )
};

export default Publication;