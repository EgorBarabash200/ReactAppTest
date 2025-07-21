export const getDataCards = async () => {
    try {
        const responce = await fetch("http://localhost:8080/task/all");
        return await responce.json();
    } catch (e) {
        console.error(e);
        return null
    }
}

export const postCreateCards = async (newCard) => {
  try {
    const response = await fetch("http://localhost:8080/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    });
    
    return await response.json(); 
    
  } catch (e) {
    console.error("Post failed:", e);
    return null;
  }
}