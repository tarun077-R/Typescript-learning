// API se aane wale Todo data ka structure
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    // Fetch API request bhej raha hai
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // Check kar rahe hain ki request successful hui ya nahi
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    // JSON response ko Todo type mein store kar rahe hain
    const data: Todo = await response.json();

  } catch (error: any) {

    // Error ka message print karega
    console.log(error.message);
  }
};