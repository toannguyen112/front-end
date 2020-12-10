import { resConnector } from "../services/index";
const accessToken = localStorage.getItem("userLogin")
    ? JSON.parse(localStorage.getItem("userLogin")).accessToken
    : "";

class CostomerService {
    CostomerSignUp(costomer) {
        return resConnector({
            url: "/costomer/dangky",
            method: "POST",
            data: costomer,
        });
    }
    CostomerLogin(costomer) {
        return resConnector({
            url: "/costomer/dnagnhap",
            method: "POST",
            data: costomer,
        });
    }
    CostomerLogout(costomer) {
        return resConnector({
            url: "/costomer/dangxuat",
            method: "POST",
        });
    }
}

export default CostomerService;
