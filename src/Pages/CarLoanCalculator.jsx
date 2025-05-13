import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import DesWithImg from "../Components/DesWithImg";
import HeaderImage from "../Components/HeaderImage";
import HeaderTopic from "../Components/HeaderTopic";
import Description from "../Components/Description";
import TheFooter from "../Components/TheFooter";
import NormalButton from "../Components/NormalButton";
import InputArea from "../Components/Calculating File Components/InputArea";
import '../styles/CalculationStyles.css'

const CarLoanCalculator = () => {

    // Measure Loan Payment
    const [presentValue, setPresentValue] = useState("");
    const [rate, setRate] = useState("");
    const [periods, setPeriods] = useState("");
    const [payment, setPayment] = useState("");

    // Measure Total Cost of Ownership (TCO)
    const [carPrice, setCarPrice] = useState("");
    const [annualInsurance, setAnnualInsurance] = useState("");
    const [yearlyMaintenance, setYearlyMaintenance] = useState("");
    const [totalFuelCost, setTotalFuelCost] = useState("");
    const [yearsOfOwnership, setYearsOfOwnership] = useState("");
    const [tco, setTco] = useState("");

    const formatCurrency = (value) => {
    if (!value) return "";
        return "$" + parseFloat(value.replace(/[^0-9.-]+/g, "")).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const parseCurrency = (value) => {
        return value.replace(/[^0-9.-]+/g, ""); // Remove $ and commas for calculation
      };

    const handleCalculate = () => {
    try {
        const PV = parseFloat(parseCurrency(presentValue));
        const r = parseFloat(rate) / 100; 
        const n = parseInt(periods);

    if (isNaN(PV) || isNaN(r) || isNaN(n) || n <= 0) {
        setPayment("Invalid input");
        return;
    }

    const P = (r * PV) / (1 - Math.pow(1 + r, -n));
    setPayment(formatCurrency(P.toString()));
  } catch (error) {
    setPayment("Error in calculation");
  }
};

const handleTcoCalculate = () => {
    try {
      const price = parseFloat(parseCurrency(carPrice));
      const insurance = parseFloat(parseCurrency(annualInsurance));
      const maintenance = parseFloat(parseCurrency(yearlyMaintenance));
      const fuel = parseFloat(parseCurrency(totalFuelCost));
      const years = parseInt(yearsOfOwnership);

      if (isNaN(price) || isNaN(insurance) || isNaN(maintenance) || isNaN(fuel) || isNaN(years) || years <= 0) {
        setTco("Invalid input");
        return;
      }

      const totalCost = price + (insurance + maintenance + fuel) * years;
      setTco(formatCurrency(totalCost.toString()));
    } catch (error) {
      setTco("Error in calculation");
    }
  };

  const handlePresentValueChange = (e) => {
    const value = e.target.value;
    setPresentValue(formatCurrency(value));
  };

  const handleCarPriceChange = (e) => {
    const value = e.target.value;
    setCarPrice(formatCurrency(value));
  };

  const handleAnnualInsuranceChange = (e) => {
    const value = e.target.value;
    setAnnualInsurance(formatCurrency(value));
  };

  const handleYearlyMaintenanceChange = (e) => {
    const value = e.target.value;
    setYearlyMaintenance(formatCurrency(value));
  };

  const handleTotalFuelCostChange = (e) => {
    const value = e.target.value;
    setTotalFuelCost(formatCurrency(value));
  };  
    
    return(
        <>
        <NavBar/>

        <div className="pages">
        <HeaderImage 
          backgroundImage="https://www.leaderreunion.fr/wp-content/uploads/2022/09/AdobeStock_327076637-.jpg"
          heading="Calculate Your Car Loan in Minutes"
          paragraph="Easily estimate your monthly payments and find the loan that fits your budget. Use our simple loan calculator to get started and take the first step toward owning your dream car."
          buttonText="Explore Our Inventory"
          path="/CarsForSale"/>

        <div className="container-fluid" style={{textAlign: "center"}}>
            <HeaderTopic text="Loan Calculator: Simplify Your Financial Decisions"/>
            <Description paragraph="Planning a loan? Our Loan Calculator helps you estimate monthly payments, interest rates, and total repayment amounts quickly and easily. Whether you're buying a car, planning a home purchase, or managing personal finances, this tool empowers you to make informed decisions with confidence. Simply enter your loan amount, interest rate, and repayment term to get started!"/>
        </div>

        <div className="row d-flex justify-content-center mb-5">
            <div id="math-space" className="col-12 col-12 col-md-4 col-lg-3" style={{border: "3px solid #003dc0", borderRadius: "20px", margin: "10px", display: "grid", placeItems: "center", backgroundColor: "rgba(241, 241, 241, 0.81)"}}>
                <h4 id="header-topic"><strong>Measure Loan Payment</strong></h4>
                <div id="math-container" className="container mt-4"> 
                  <InputArea statement="The Present Value" value={presentValue} onChange={handlePresentValueChange}/>
                  <InputArea statement="The Rate per Period" value={rate} onChange={(e) =>  setRate(e.target.value)}/>
                  <InputArea statement="The Number of Period" value={periods} onChange={(e) => setPeriods(e.target.value)}/>
                </div>

                <div className="container-fluid d-flex justify-content-center flex-col gap-4 mt-4" style={{display: "grid", placeItems: "center"}}>
                    <button id="normal-button" onClick={handleCalculate} style={{margin: "0px"}}>Calculate</button>
                    <div><input type="text" placeholder="Amount" value={payment} readOnly style={{width: "200px", border: "3px solid #003dc0", borderRadius: "40px", textAlign: "center", fontFamily: "Tilt Neon", color: "#003dc0", fontSize: "20px"}}/></div>
                </div>
            </div>

            <div id="math-space" className="col-12 col-12 col-md-4 col-lg-3"  style={{border: "3px solid #003dc0", borderRadius: "20px", margin: "10px", display: "grid", placeItems: "center", backgroundColor: "rgba(241, 241, 241, 0.81)"}}>
                <h4 id="header-topic"><strong>Total Cost of Ownership</strong></h4>
                <div className="container" style={{marginTop: "40px"}}>
                    <InputArea statement="The Price of The Car" value={carPrice} onChange={handleCarPriceChange}/>
                    <InputArea statement="The Annual Insurance Cost"  value={annualInsurance} onChange={handleAnnualInsuranceChange}/>
                    <InputArea statement="The Estimated Yearly Maintenance" value={yearlyMaintenance} onChange={handleYearlyMaintenanceChange}/>
                    <InputArea statement="The Total Fuel Cost" value={totalFuelCost} onChange={handleTotalFuelCostChange}/>
                    <InputArea statement="The Years of Ownership" value={yearsOfOwnership} onChange={(e) => setYearsOfOwnership(e.target.value)}/>

                <div className="container-fluid d-flex justify-content-center flex-col gap-4 mt-4" style={{display: "grid", placeItems: "center"}}>
                    <button id="normal-button" onClick={handleTcoCalculate} style={{margin: "0px"}}>Calculate</button>
                    <div><input type="text" placeholder="Amount" value={tco} readOnly style={{width: "200px", border: "3px solid #003dc0", borderRadius: "40px", textAlign: "center", fontSize: "22px", fontFamily: "Tilt Neon", color: "#003dc0", fontSize: "20px"}}/></div>
                </div>
            </div>
            </div>
          </div>

          <div className="container d-flex justify-content-center align-items-center mb-4 p-3 note-message" style={{textAlign: "left", border: "3px solid red", borderRadius: "10px"}}>
            <h5 style={{fontSize: "18px", fontWeight: "400"}}><strong>Note:</strong> This car loan calculator is part of a showcase project and is intended for demonstration purposes only. The calculations provided may not reflect real-world loan offers, interest rates, or financial terms. For actual car financing, please consult with a certified financial advisor or an official dealership representative.</h5>
          </div>

          </div>

        <TheFooter/>
        </>
    );
};
export default CarLoanCalculator;