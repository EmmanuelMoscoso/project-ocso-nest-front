import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/app/constants";

const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocations = await axios.get("localhost:4000/locations", {
            headers: {
                Authorizations: `Bearer ${token}`
            }
        });
        
    const cantidad = countLocations?.data?.lenght
    return `Hay: ${cantidad} tiendas${cantidad > 1 ? "s" : ""}`
}

export default CountPage;