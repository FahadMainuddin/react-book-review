
import { BarChart as BChart, Bar, ResponsiveContainer,  XAxis, YAxis, Tooltip, Legend } from 'recharts';

const bookData = [
    { bookId: 1, name: "The Silent Patient", totalPages: 336 },
    { bookId: 2, name: "The Great Gatsby", totalPages: 180 },
    { bookId: 3, name: "1984", totalPages: 328 },
    { bookId: 4, name: "The Alchemist", totalPages: 208 },
    { bookId: 5, name: "Sapiens: A Brief History of Humankind", totalPages: 498 },
    { bookId: 6, name: "Where the Crawdads Sing", totalPages: 384 },
    { bookId: 7, name: "Educated", totalPages: 352 },
    { bookId: 8, name: "Becoming", totalPages: 448 },
  ];
   
  
  

const BarChart = () => {
    console.log("Book Data:", bookData)
    return (
        <div style={{ width: "80%", height: 400, margin: "auto", textAlign: "center"}}>
            <h2 className="text-4xl font-bold mb-4 p-4">Read List _ BookPages</h2>
            <ResponsiveContainer width="100%" height={500}>
            <BChart width={600} height={400}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}data={bookData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                 <Bar dataKey="totalPages" fill="#8884d8" ></Bar>
                 
            </BChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;