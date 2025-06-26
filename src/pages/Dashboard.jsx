import {Card, CardFooter, CardHeader, ChartContainer, Heading4, Title} from "src/components/neubruatalist/neubratalist";
import {Button} from "src/components/Button.jsx";
import {Plus} from "lucide-react";
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis,} from "recharts";
import MetricsCard from "src/components/MetricsCard.jsx";
import Campaigns from "src/components/Campaigns.jsx";
import {  useNavigate } from "react-router-dom";


export const description = "A stacked area chart"

const data = [
    { time: "Jun 19", success: 0 },
    { time: "Jun 20", success: 30 },
    { time: "Jun 21", success: 70 },
    { time: "Jun 22", success: 50 },
    { time: "Jun 23", success: 90 },
];


export default function Dashboard() {

    const navigate = useNavigate();

    const handleNewCampaign = () => {
        navigate("/campaigns/new")
    }

    return (
        <div className="mt-8 mx-4">
            <Title className="mb-4 border-b-2 border-black">Dashboard</Title>
            <div className="grid grid-cols-2 gap-4 m-8">
                <Card className="bg-white p-4 rounded-md">
                    <CardHeader className="bg-white">
                        <Heading4>Phishing Success Overview</Heading4>
                    </CardHeader>
                    <ChartContainer className="w-full h-60">
                        <AreaChart accessibilityLayer margin={{
                            left: 12,
                            right: 12,
                        }} data={data}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="time"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8} />
                            <YAxis stroke="#000" tickLine={false} />
                            <Tooltip contentStyle={{ border: "2px solid black", backgroundColor: "#fff", fontFamily: "monospace" }} />
                            <Area
                                dataKey="success"
                                type="natural"
                                fill="#ff4d50"
                                stroke="#000"
                                strokeWidth={2}
                                activeDot={{
                                    fill: "#000",
                                    stroke: "#000",
                                }}
                            />
                        </AreaChart>
                    </ChartContainer>
                    <CardFooter className="bg-white">

                    </CardFooter>
                </Card>
                <MetricsCard />
            </div>
            <div className="mt-6">
                <div  className="flex flex-row justify-between items-center">
                    <Heading4>Recent Activity</Heading4>
                    <Button onClick={handleNewCampaign} variant="ghost" size="sm" className="p-4 flex border-primary-600 items-center hover:bg-gray-100 rounded-full">
                        <Plus className="w-5 h-5 text-gray-600" />
                        New
                    </Button>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
                <Campaigns />
            </div>
        </div>
    )
}