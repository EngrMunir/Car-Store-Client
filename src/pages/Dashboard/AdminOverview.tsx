import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useGetUsersQuery } from "@/redux/features/User/userManagementApi"
import { useGetOrdersQuery } from "@/redux/features/order/order"


const chartConfig = {
  visitors: {
    label: "Total",
  },
  user: {
    label: "User",
    color: "hsl(var(--chart-1))",
  },
  order: {
    label: "Order",
    color: "hsl(var(--chart-2))",
  },
  delivered: {
    label: "Delivered",
    color: "hsl(var(--chart-3))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-4))",
  },
  shipped: {
    label: "Shipped",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

 const AdminOverview=()=> {
    const {data:responseData, isLoading } =  useGetUsersQuery(undefined);
    const { data: ordersResponse } = useGetOrdersQuery(undefined);    

    const users = responseData?.data || [];
    const orders = ordersResponse?.data || [];

    console.log(orders);
    
    const totalUsers = users.length;
    const totalOrders = orders.length;
    let totalDelivered = 0;
    let totalPending = 0;
    let totalShipped =0;

    orders.forEach((order) => {
        if (order.status === "Pending") totalPending++;
        else if (order.status === "Shipped") totalShipped++;
        else if (order.status === "Delivered") totalDelivered++;
      });

const chartData = [
  { browser: "user", visitors: totalUsers, fill: "var(--color-chrome)" },
  { browser: "order", visitors: totalOrders, fill: "var(--color-safari)" },
  { browser: "delivered", visitors: totalDelivered, fill: "var(--color-firefox)" },
  { browser: "pending", visitors: totalPending, fill: "var(--color-edge)" },
  { browser: "shipped", visitors: totalShipped, fill: "var(--color-firefox)" },
];

if(isLoading){
    return <p>Loading...</p>
}
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Report Analytics</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default AdminOverview;