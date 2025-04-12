import { API_URL } from "@/app/constants";
 import { Manager } from "@/app/entities";
 import { authHeaders } from "@/helpers/authHeaders";
 import ManagerCard from "../_components/ManagerCard";
 export default async function ManagerPage({
   params,
 }: {
   params: {
     id: string;
   };
 }) {
   const response = await fetch(`${API_URL}/managers/${params.id}`, {
     headers: {
       ...authHeaders(),
     },
     next: {
       tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
     },
   });
   const data: Manager = await response.json();
   return (
      <div >
        <ManagerCard manager={data} />
      </div>
       
   );
 }