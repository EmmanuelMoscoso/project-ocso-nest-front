import { Button, Input } from "@heroui/react";
 import { createLocation } from "@/actions/locations/create";
 import { API_URL } from "@/app/constants";
 import SelectManager from "./SelectManager";
 import { authHeaders } from "@/helpers/authHeaders";
 import { Location, Manager } from "@/app/entities";
export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
  if (store) return null;
  const responseManagers = await fetch(`${API_URL}/managers`, {
     headers: {
      ...authHeaders()
     },
     next: {
       tags: ["dashboard:managers"]
     }
   })
   const dataManagers: Manager[] = await responseManagers.json()
   const responseLocations = await fetch(`${API_URL}/locations`, {
     headers: {
      ...authHeaders()
    },
    next: {
      tags: ["dashboard:locations"]
     }
   })
   const dataLocations: Location[] = await responseLocations.json()
   return (
    <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
       <h1 className="text-3xl text-white text-center"> Crear Tienda </h1>
       <Input required={true} label="Nombre" placeholder="Ocso Jurikiya" name="locationName" />
       <Input required={true} label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" />
       <Input required={true} label="Latitud" placeholder="-120" name="locationLat" />
       <Input required={true} label="Longitud" placeholder="20" name="locationLng" />
       <SelectManager managers={dataManagers} locations={dataLocations} />
       <Button type="submit"> Subir </Button>


     </form>
   );
 }