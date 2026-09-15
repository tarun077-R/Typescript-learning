// Axios aur AxiosResponse type import kar rahe hain
import axios, { AxiosResponse } from "axios";

// API se aane wale Todo data ka structure
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    // Axios GET request bhej raha hai
    // AxiosResponse<Todo> = response ka data Todo type ka hoga
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // response.data mein actual Todo object milega
    console.log("Todo", response.data);

  } catch (error: any) {

    // Check karta hai ki error Axios ka hai ya nahi
    if (axios.isAxiosError(error)) {

      // Axios error ka message
      console.log("Axios Error", error.message);

      // Agar server se response mila hai
      if (error.response) {

        // HTTP status code print karega
        console.log(error.response.status);
      }
    }
  }
};