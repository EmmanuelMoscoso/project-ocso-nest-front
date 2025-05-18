import updateEmployee from "@/actions/employees/update";
import { Employee, Location } from "@/app/entities";
import { Button, Input } from "@heroui/react";
import SelectLocation from "../../../@locations/_components/SelectLocation"
import { API_URL } from "@/app/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateEmployee({employee}: {employee: Employee}) {
  const { employeeId } = employee;
  const updateEmployeeById = updateEmployee.bind(null, String(employeeId));
  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }
  })
  const locations = await responseLocations.json();
  return (
    <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
    <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
    <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName} />
    <Input label="Correo electrónico" name="employeeEmail" defaultValue={employee.employeeEmail} />
    <Input label="Num. de Teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber} />
    <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto} />
    <SelectLocation locations={locations} store={employee.location?.locationId !== undefined ? String(employee.location.locationId) : undefined}/>
    <Button type="submit" color="primary" >
      Actualizar datos
    </Button>
    </form>
  )
}