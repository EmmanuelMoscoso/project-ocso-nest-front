import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/app/constants";
import { Location } from "@/app/entities";
import SelectLocation from "./_components/SelectLocation";

const LocationsPage = async ({searchParams} : { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const userCookies = cookies()

    const token = userCookies.get(TOKEN_NAME)?.value
    const {data} = await axios.get<Location[]>("localhost:4000/locations", {
            headers: {
                Authorizations: `Bearer ${token}`
            }
        });
        
    return (
        <div className="w-8/12">
            <div className="w-full flex-col items-center h-[90vh} ">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store}/>
                </div>
            </div>
        </div>
    )
}

export default LocationsPage;