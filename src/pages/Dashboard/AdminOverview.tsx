import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetUsersQuery } from "@/redux/features/User/userManagementApi";
import { useGetOrdersQuery } from "@/redux/features/order/order";

type Order = {
  _id: string;
  userEmail: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    photo?: string;
  };
  products: { productId: string; quantity: number }[]; // Adjust as per actual structure
  transaction: {
    id: string;
    transactionStatus: string;
  };
  totalPrice: number;
  status: "Pending" | "Shipped" | "Delivered";
  createdAt: string;
  updatedAt: string;
};

const chartConfig: ChartConfig = {
  visitors: { label: "Total" },
  user: { label: "Users", color: "var(--color-chrome)" },
  order: { label: "Orders", color: "var(--color-safari)" },
  delivered: { label: "Delivered", color: "var(--color-firefox)" },
  pending: { label: "Pending", color: "var(--color-edge)" },
  shipped: { label: "Shipped", color: "var(--color-opera)" },
};

const AdminOverview = () => {
  const { data: userRes, isLoading: loadingUsers } = useGetUsersQuery(undefined);
  const { data: orderRes, isLoading: loadingOrders } = useGetOrdersQuery(undefined);

  if (loadingUsers || loadingOrders) return <p>Loading...</p>;

  const users = userRes?.data || [];
  const orders: Order[] = orderRes?.data || [];

  const totalUsers = users.length;
  const totalOrders = orders.length;

  const statusCount = {
    delivered: 0,
    pending: 0,
    shipped: 0,
  };

  orders.forEach((order) => {
    if (order.status === "Delivered") statusCount.delivered++;
    else if (order.status === "Pending") statusCount.pending++;
    else if (order.status === "Shipped") statusCount.shipped++;
  });

  const chartData = [
    { key: "user", visitors: totalUsers, fill: chartConfig.user.color },
    { key: "order", visitors: totalOrders, fill: chartConfig.order.color },
    { key: "delivered", visitors: statusCount.delivered, fill: chartConfig.delivered.color },
    { key: "pending", visitors: statusCount.pending, fill: chartConfig.pending.color },
    { key: "shipped", visitors: statusCount.shipped, fill: chartConfig.shipped.color },
  ];

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
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="key">
              <LabelList
                dataKey="key"
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
  );
};

export default AdminOverview;
