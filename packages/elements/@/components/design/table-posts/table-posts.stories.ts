import type { Meta, StoryObj } from "@storybook/vue3";
import { TablePosts } from "./mod";

const meta: Meta<typeof TablePosts> = {
  title: "Components/Design/Tables/TablePosts",
  component: TablePosts,
};

export default meta;
const posts = [
  {
    id: "1",
    title: "Exploring the Benefits of Remote Work in the Tech Industry",
    body: "Remote work has transformed the tech industry, offering flexibility, increased productivity, and access to a global talent pool. Discover how companies are adapting.",
    email: "admin@test.it",
    createdAt: 1654016400, // Example: June 1, 2022
    updatedAt: 1656608400, // Example: July 1, 2022
  },
  {
    id: "2",
    title: "The Rise of Artificial Intelligence: Opportunities and Challenges",
    body: "AI is revolutionizing various sectors, from healthcare to finance. While it presents numerous opportunities, it also poses significant challenges regarding ethics and employment.",
    email: "lello.arena@example.com",
    createdAt: 1654102800, // Example: June 2, 2022
    updatedAt: 1656694800, // Example: July 2, 2022
  },
  {
    id: "3",
    title: "Sustainable Living: Simple Steps to Reduce Your Carbon Footprint",
    body: "Embrace sustainable living by making small changes like reducing waste, conserving energy, and supporting eco-friendly products. These steps can significantly impact the environment.",
    email: "admin@test.it",
    createdAt: 1654189200, // Example: June 3, 2022
    updatedAt: 1656781200, // Example: July 3, 2022
  },
  {
    id: "4",
    title: "The Future of Electric Vehicles: Trends and Innovations",
    body: "Electric vehicles are the future of transportation, with advancements in battery technology and charging infrastructure. Explore the latest trends and innovations in the EV market.",
    email: "lello.arena@example.com",
    createdAt: 1654275600, // Example: June 4, 2022
    updatedAt: 1656867600, // Example: July 4, 2022
  },
  {
    id: "5",
    title: "Mastering the Art of Mindfulness: Techniques for Everyday Life",
    body: "Mindfulness practices, such as meditation and deep breathing, can improve mental health and well-being. Learn effective techniques to incorporate mindfulness into your daily routine.",
    email: "lello.arena@example.com",
    createdAt: 1654362000, // Example: June 5, 2022
    updatedAt: 1656954000, // Example: July 5, 2022
  },
  {
    id: "6",
    title: "The Impact of Blockchain Technology Beyond Cryptocurrency",
    body: "Blockchain technology extends beyond cryptocurrency, offering applications in supply chain management, voting systems, and digital identity verification. Understand its broader implications.",
    email: "luca.giurato@example.com",
    createdAt: 1654448400, // Example: June 6, 2022
    updatedAt: 1657040400, // Example: July 6, 2022
  },
  {
    id: "7",
    title: "Essential Skills for Thriving in a Digital Economy",
    body: "In a rapidly evolving digital economy, skills such as data analysis, coding, and digital marketing are crucial. Discover essential skills to stay competitive in today's job market.",
    email: "corriere.amazon@example.com",
    createdAt: 1654534800, // Example: June 7, 2022
    updatedAt: 1657126800, // Example: July 7, 2022
  },
  {
    id: "8",
    title: "Balancing Work and Life: Strategies for Modern Professionals",
    body: "Achieving work-life balance is challenging but crucial for mental health. Implement strategies such as time management, setting boundaries, and prioritizing self-care to improve your balance.",
    email: "corriere.amazon@example.com",
    createdAt: 1654621200, // Example: June 8, 2022
    updatedAt: 1657213200, // Example: July 8, 2022
  },
  {
    id: "9",
    title: "The Importance of Cybersecurity in a Connected World",
    body: "With the rise of cyber threats, cybersecurity is more critical than ever. Learn about essential practices and technologies to protect your personal and professional digital assets.",
    email: "corriere.amazon@example.com",
    createdAt: 1654707600, // Example: June 9, 2022
    updatedAt: 1657299600, // Example: July 9, 2022
  },
  {
    id: "10",
    title: "Healthy Eating Habits: Tips for a Balanced Diet",
    body: "Maintaining a balanced diet is vital for overall health. Incorporate a variety of nutrients, practice portion control, and make mindful food choices to develop healthy eating habits.",
    email: "corco.puzzone@example.com",
    createdAt: 1654794000, // Example: June 10, 2022
    updatedAt: 1657386000, // Example: July 10, 2022
  },
];

type Story = StoryObj<typeof TablePosts>;

export const Default: Story = {
  args: {
    data: posts,
  },
};
