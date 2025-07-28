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
    await fetch("http://localhost:8080/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    });

    return await getDataCards();

  } catch (e) {
    console.error("Post failed:", e);
    return null;
  }
}

export const putRedactCards = async (id, updatedCard) => {
  try {
    await fetch(`http://localhost:8080/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCard),
    });
    return await getDataCards();
  } catch (e) {
    console.error("Post failed:", e);
    return null;
  }
}

export const deleteCards = async (id) => {
  try {
    await fetch(`http://localhost:8080/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await getDataCards();
  } catch (e) {
    console.error("Post failed:", e);
    return null;
  }
}