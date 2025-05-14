import DetailTag from "./DetailTag";
import { X } from 'lucide-react';

function CarInfoCard({comparedCar}) {
    return (
        <>
        <div className="col-lg-4 col-xl-4" id="car-info-card">
            <div style={{position: "absolute", right: "5px", top: "3px"}}>
                <X className="closing-icon"/>
            </div>
            <div className="image-section text-center p-2">
                <img src={comparedCar.url} alt="" />
            </div>
            <div className="ps-2">
                <div className="d-flex gap-2 mb-3" style={{flexDirection: "column"}}>
                    <h5 style={{fontSize: "25px"}}><strong>{comparedCar.name}</strong></h5>
                    <h5 style={{color: "rgb(48, 48, 48)"}}><strong>{comparedCar.year}</strong></h5>
                    <h6 className="card-text" style={{fontSize: "16px", color: "rgb(43, 43, 43)"}}>{comparedCar.transmission}</h6>
                </div>
                <h4 id="price">{comparedCar.price}</h4>
                <h5 className="text-center mt-3">DETAILS</h5>
                <hr />
                <div className="p-2" style={{backgroundColor: "rgb(218, 218, 218)"}}>
                    <DetailTag quality="Engine" type="2.0L TwinPower"/>
                    <DetailTag quality="Horsepower" type="255"/>
                    <DetailTag quality="Torque" type="295 lb-ft"/>
                    <DetailTag quality="Transmission" type="Manual shift modes"/>
                    <DetailTag quality="Drivetrain" type="xDrive"/>
                    <DetailTag quality="0-60 mph" type="5.6 s"/>
                    <DetailTag quality="Fuel Type" type="Gasoline"/>
                    <DetailTag quality="Seating" type="5"/>
                    <DetailTag quality="Trunk" type="17 cubic feet"/>
                    <DetailTag quality="Length" type="185.7 inches"/>
                    <DetailTag quality="Width" type="71.9 inches"/>
                    <DetailTag quality="Height" type="56.8 inches"/>
                    <DetailTag quality="Wheelbase" type="112.2 inches"/>
                    <DetailTag quality="Ground Clearance" type="5.4 inches"/>
                </div>
                <div className="d-flex justify-content-center">
                    <button id="switch-car" className="m-3 text-center">Swith Car</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default CarInfoCard;
