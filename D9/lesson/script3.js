const displayUserData = async () => {
  const userContainer = document.getElementById("userContainer");

  try {
    // Fetch user data from the JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    // Extract JSON data from the response
    const data = await response.json();
    console.log(data)
    let html = ''
    data.forEach(element => {
        
    });
  } catch (error) {
    // Display an error message if fetching data fails
    userContainer.innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
};
