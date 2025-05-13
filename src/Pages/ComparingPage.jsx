import { useState } from "react";
import NavBar from "../Components/NavBar";
import HeaderTopic from "../Components/HeaderTopic";
import Topics from "../Components/Topics";
import NormalButton from "../Components/NormalButton";
import CollapseDetail from "../Components/Car Comparing File/CollapseDetail";
import TheFooter from "../Components/TheFooter"; 
import DetailTag from "../Components/Car Comparing File/DetailTag";
import CarInfoCard from "../Components/Car Comparing File/CarInfoCard";
import CompareTable from "../Components/Car Comparing File/CompareTable";
import TableData from "../Components/Car Comparing File/TableData";
import '../styles/ComparingPageStyles.css'

import { ArrowDownToLine } from 'lucide-react';
import { Menu  } from 'lucide-react';
import { X } from 'lucide-react';

function ComparingPage (){

    const comparingCar = [
        {id: 1, url: "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", name: "BMW M4", year: "2008", transmission: "Manual", price: "$30,000"},
        {id: 2, url: "https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain", name: "CAMARO", year: "2010", transmission: "Manual", price: "$35,000"},
        {id: 3, url: "https://th.bing.com/th/id/OIP.YHxcrdneT3Lw3SthJ5NdbQHaFj?rs=1&pid=ImgDetMain", name: "PORSCHE GT3RS", year: "2018", transmission: "Manual", price: "$40,000"}
    ]

    // The Error Message
    const [isWarningBox, setIsWarningBox] = useState(false)

    return(
        <>
        <NavBar/>
        
        <div className="pages">
        <div className="container-fluid" style={{backgroundColor: "rgb(240, 240, 240)"}}>
        
        <div className="container" style={{textAlign: "left", marginBottom: "40px"}}>
            <div style={{paddingTop: "80px"}}><HeaderTopic text="Compare Your Dream Cars"/></div>
        </div>

        <div id="menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <button><Menu/> Menu</button>
        </div>

        {/* The Offcanvas content */}
        <div  onClick={() => setIsWarningBox(true)}  className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div style={{marginTop: "79px"}}>
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <strong>Menu Bar</strong> </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <p>Use the menu to manage your comparison list — add or remove cars, clear all, or return to car selection. Focus on the details that matter most to you.</p>
                </div>
                <div>
                    <h6>The maximum amount of cars that you can compare is 03.</h6>
                </div>
                <div id="button-list" className="d-flex mt-5 gap-3" style={{flexDirection: "column"}}>
                    <button>Delte the Comparisons</button>
                    <button>Add Another Car</button>
                    <button>Back to Car Selection</button>
                </div>

                <div className="d-grid text-center mt-4" style={{fontFamily: "Poppins"}}>
                    <h5>Download as a Pdf</h5>
                    <button className="download-button">Download <ArrowDownToLine/></button>
                </div>
            </div>
            </div>
        </div>

        {/* Showing the cars added for the comparison */}
       <div className="contianer-fluid d-flex justify-content-center">
        <div className="d-flex gap-2 justify-content-flex-start overflow-x-auto w-full" style={{position: "relative"}}>
            {comparingCar.map((comparedCar) => (
                <CarInfoCard key={comparedCar.id} comparedCar={comparedCar}/>
            ))}
        </div>
        </div>

        <CompareTable
            car1="Bmw M4" car2="Camaro" car3="Porsche GT3RS"
            data={
                <>
                <TableData specification="Engine"
                            car1Info="Dual electric motors (AWD), 593 hp, 605 lb-ft torque, 0–62 mph in 3.8s"
                            car2Info="6.2L Supercharged V8, 650 hp, 650 lb-ft torque, 0–60 mph in 3.5s"
                            car3Info="4.0L Naturally Aspirated Flat-6, 518 hp @ 8,500 rpm, 342 lb-ft @ 6,300 rpm, 0–62 mph in 3.2s"/>

                <TableData specification="Tires & Wheels"
                            car1Info="Front: 20&quot; wheels with 275/35 R20 tires; Rear: 21&quot; wheels with 285/35 R21 tires"
                            car2Info="Front: 20&quot; wheels with 285/30 R20 tires; Rear: 20&quot; wheels with 305/30 R20 tires"
                            car3Info="Front: 20&quot; wheels with 275/30 R20 tires; Rear: 21&quot; wheels with 335/30 R21 tires"/>
                
                <TableData specification="Suspension"
                            car1Info="Adaptive suspension with electronically controlled dampers; optional active anti-roll bars"
                            car2Info="Magnetic Ride Control with performance-tuned suspension"
                            car3Info="Front: Double Wishbone; Rear: Multi-Link; Active Suspension System"/>

                <TableData specification="Steering"
                            car1Info="Electric power steering with optional rear-axle steering (up to 2.5°)"
                            car2Info="Electric power steering with variable ratio"
                            car3Info="Electric Power-Assist Speed-Sensing Steering"/>

                <TableData specification="Brakes"
                            car1Info="Regenerative braking with integrated traction control; optional M Sport brakes"
                            car2Info="Brembo® performance brakes with 6-piston front and 4-piston rear calipers"
                            car3Info="Front: 408mm ventilated and cross-drilled discs with 6-piston calipers; Rear: 380mm ventilated and cross-drilled discs with 4-piston calipers"/>                                                        
                </>
            }/>

        </div>
        </div>

        {/* The LightBox Comopnent */}
      { isWarningBox && (
          <div className="coming-soon-box" style={{maxWidth: "400px", width: "100%", zIndex: "2000"}}>
              <div className="d-flex justify-content-center align-items-center" style={{width: "100%"}}>
                  <div className='heading'> Coming Soon!</div>
              </div>
              <button className='close-button' onClick={() => setIsWarningBox(false)}><X/></button>
              <div className='hrzntl-line'></div>
              
              <p>Oops! 🔧 Comparings are part of this UI demo and not connected to a real database</p>
              <button className='gotcha-btn' onClick={() => setIsWarningBox(false)}>Gotcha!</button>
          </div>
          
      ) }

        <TheFooter/>
        </>
    );
}
export default ComparingPage;



