pragma solidity 0.5.6;
contract Pandemic_Recovery_System
{
    // PATIENT Module
    struct Patient{
        string Pname;
        uint16 age;
        string  symptom;
                  }
    mapping(address => Patient) public patients;
    event PatientDetails(string  Pname, uint16 age, string  symptom);
    
    // SetPatient
    function FillPatientDetails( string memory _Pname, uint16 _age, string memory _symptom ) public {
    // get each instances of Patient struct
    Patient memory eachpatient = Patient(_Pname, _age,_symptom);
    patients[msg.sender]=eachpatient;  
    }
     
    function PatientAddressIs(address _patientaddress)  external  returns (bool)
    {      
    // return patient details stored at patient address
    Patient storage patient1 = patients[_patientaddress];
    //Gives the patient details when input the address
    emit PatientDetails(patient1.Pname, patient1.age,patient1.symptom);
    return true;
    }
     
    // RECOVERER Module
    struct Recoverer{
        string Rname;
        string Symptoms;
        string HospitalName;
        string HospitalLocation;
        uint16 DaysForRecovery;
        string TestUndergone;
        uint16 AmtSpent;
        string MedicationsTaken;
                    }    
    mapping(address => Recoverer) public recoverers;
    event RecovererDetails(string  Rname,  string Symptoms, string HospitalName,  string HospitalLocation,  uint DaysForRecovery,  string TestUndergone,
    uint16 AmtSpent, string MedicationsTaken);
        
    // SetRecoverer
    function FillRecovererDetails( string memory _Rname, string memory _Symptom, string memory _HospitalName, string memory _HospitalLocation, uint16 _DaysForRecovery, 
    string memory _TestUndergone, uint16 _AmtSpent, string memory _MedicationsTaken) public
    {
    // Get each instances of Recoverer struct
    Recoverer memory EachRecoverer = Recoverer (_Rname, _Symptom , _HospitalName, _HospitalLocation, _DaysForRecovery, _TestUndergone,  _AmtSpent,_MedicationsTaken );
    recoverers[msg.sender]=EachRecoverer;
    }   
    function RecovererAddressIs(address  _RecovererAddress)  external  returns (bool)
    {      
    // return Recoverer details stored at Recoverer address
    Recoverer storage Recoverer1 =  recoverers[_RecovererAddress];
    //Gives the recoverer details when input the address
    emit RecovererDetails ( Recoverer1.Rname,  Recoverer1.Symptoms,   Recoverer1.HospitalName,   Recoverer1.HospitalLocation    ,Recoverer1.DaysForRecovery,
    Recoverer1.TestUndergone  ,Recoverer1.AmtSpent   ,Recoverer1.MedicationsTaken);
    return true;
    }
}