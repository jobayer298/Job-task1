import React from 'react';

const SingleSchedule = ({time, name, doctorName}) => {
    return (
      <div>
        <h2 className="text-black">Doctor's schedule today</h2>
        <div className="my-7">
          <div className="flex items center gap-8 border-b-2 border-black pb-4">
            <h4 className="text-red-500 font-bold">{time}</h4>
            <div>
              <p className="font-bold">{name}</p>
              <p>{doctorName}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleSchedule;