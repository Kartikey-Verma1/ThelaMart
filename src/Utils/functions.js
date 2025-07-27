import { providerget, providerpost, vendorget, vendorpost } from "./urls";

export const adduser = async ({name, phone, email, passwordinit, fssainum, role, navigate, setuser})=>{
    const payload = { name: name, phone: phone, email: email, password: passwordinit, fssai: fssainum, items: [] };
    if (role === "Provider") payload.fssai = fssainum;

    const url = (role === "Provider") ? providerpost : vendorpost;

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(res => {
        if(res.ok){
            alert("You are registered!")
            setuser(payload);
            navigate("/");
        }
        else alert("Registration failed");
    });
}

export const fetchDataByRole = async ({role})=>{
    const url = (role === "Provider") ? providerget : vendorget;
    const res = await fetch(url);
    if (!res.ok) {
        alert("Failed to fetch user list");
        return;
    }
    const userList = await res.json();
    return userList;
}
