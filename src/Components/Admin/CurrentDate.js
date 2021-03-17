import React from "react";

 export default class CurrentDate extends React.Component{

  render()
  {
  let month = []  ;
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

  let date = new Date();
  let today = month[date.getMonth()]
  return (
          <div className="mr-date">
            <span className="m-subheader__daterange m_date">
              <span className="m-subheader__daterange-label">
                <span className="m-subheader__daterange-title">Today  </span>
                <span className="m-subheader__daterange-date m--font-brand"> &nbsp; {today} {date.getDate()}</span>
              </span>
            </span>
          </div>
  )
}
 }