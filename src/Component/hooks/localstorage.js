export const setUser =(user) =>{
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocal =()=>{
    const user = localStorage.getItem('user');
    return user? JSON.parse(user):null;
}

export const removeUserFromLocal = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem("token");
}