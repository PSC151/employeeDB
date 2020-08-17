import React,{useState, useEffect} from "react";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable.js"
import SearchInput from "./components/SearchInput.js"

function App() {
  const [employees, setEmployees]=useState([])
  const [searchValue, setSearchValue]=useState("")
  const handleChange= (event) => {
      setSearchValue(event.target.value)
  }
  useEffect(() => {
      axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
            setEmployees(response.data.results)
      })
  }, [] )
  return <div> 
            <SearchInput handleSearchChange={handleChange} />
            <EmployeeTable employeeList={employees.filter((employee) => {
            return employee.name.last.toLowerCase().startsWith(searchValue.toLowerCase())
      })} />
          </div>
}

export default App;
