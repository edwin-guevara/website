 import ResumeItem from "../components/ResumeItem";

 export default function Website() {
   return (
     <>
        <h1>Vapor</h1>
        <ResumeItem
          name = "athenahealth"
          dept = "Healthcare IT"
          position = "Member of Technical Staff"
          startDate = {2017}
          endDate = {2019}
        >
          <li>
            Developed widgets using React and Less to display patient information.
         </li>
       </ResumeItem>
       <ul></ul>
     </>
   );
 }
