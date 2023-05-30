import { createContext, useState} from "react";

export const myContext = createContext()  
// export const contextVakan = createContext()

export default function Context (props) {

   

   const [ FullName , setFullName ] = useState('')

   const [ PhoneNumber , setPhoneNumber ] = useState('')

   const [ data , setData ] = useState('')

   const [ city , setCity ] = useState('')

   const [ address , setAddress ] = useState('')

   const [ education , setEducation ] = useState('')

   const [ AddEducation , setAddEducation ] = useState('')

   const [ placeWork , setPlaceWork ] = useState('')

   const [ postwork , setPostwork ] = useState('')

   const [ DataStart , setDataStart ] = useState('')

   const [ DataEnd , setDataEnd ] = useState('')

   const [ About , setAbout ] = useState('')

   const [ skills , setSkills ] = useState('')

   const [ startSalary , setStartSalary ] = useState('')

   const [ endSalary , setEndSalary ] = useState('')

   const [foto, setFoto] = useState([]);

   const [recommendation, setRecommendation] = useState([]);

   const [certificate, setCertificate] = useState([]);



   


   return (
    <>

    <myContext.Provider value={[

FullName, setFullName,
PhoneNumber, setPhoneNumber,
data , setData,
city , setCity,
address , setAddress,
education , setEducation,
AddEducation , setAddEducation,
placeWork , setPlaceWork,
postwork , setPostwork,
DataStart , setDataStart,
DataEnd , setDataEnd,
About , setAbout,
skills , setSkills,
startSalary , setStartSalary,
endSalary , setEndSalary,

foto, setFoto,
recommendation, setRecommendation,
certificate, setCertificate


]} >

{props.children}

</myContext.Provider>

{/* <contextVakan.Provider value={[info, setInfo]}> 
    {props.children}
</contextVakan.Provider> */}

    
    </>

    
   )

}  


