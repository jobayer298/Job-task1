
import img from '../../../assets/images/Banner/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.jpg'
import './Schedule.css'
import SingleSchedule from '../../../components/SingleSchedule';

const Schedule = () => {
    return (
      <div className="my-11 container mx-auto p-6 md:p-0">
        <div className="md:grid grid-cols-2 gap-28 place-items-center">
          <div>
            <SingleSchedule
              time={"8.50"}
              name={"General Practitioner"}
              doctorName={"Dr. Robbert Algazali"}
            ></SingleSchedule>
            <SingleSchedule
              time={"8.50"}
              name={"General Practitioner"}
              doctorName={"Dr. Robbert Algazali"}
            ></SingleSchedule>
            <SingleSchedule
              time={"8.50"}
              name={"General Practitioner"}
              doctorName={"Dr. Robbert Algazali"}
            ></SingleSchedule>
          </div>
          <div className="">
              <img src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Schedule;


 