import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="container mx-auto p-4">
        {/* Navigation */}
        <Tabs defaultValue="dashboard" className="mb-8">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="markåets">Markets</TabsTrigger>
            <TabsTrigger value="file">File</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Market Selector */}
        <div className="mb-8 flex justify-center">
          <Select>
            <SelectTrigger className="w-[200px]">
              <div className="flex items-center gap-2">
                <SelectValue placeholder="Select a market" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eth">Ethereum</SelectItem>
              <SelectItem value="btc">Bitcoin</SelectItem>
              <SelectItem value="usdt">USDT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Your Supplies */}
            <Card>
              <CardHeader>
                <CardTitle>Your supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>APY</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ETH</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>2%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Withdraw
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Assets to Supply */}
            <Card>
              <CardHeader>
                <CardTitle>Assets to supply</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>APY</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ETH</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>2%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Supply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>WBTC</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>2%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Supply
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Your Borrows */}
            <Card>
              <CardHeader>
                <CardTitle>Your borrows</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>APY</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>bnUSD</TableCell>
                      <TableCell>10000</TableCell>
                      <TableCell>7%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Repay
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Assets to Borrow */}
            <Card>
              <CardHeader>
                <CardTitle>Assets to borrow</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>APY</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ETH</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>3.5%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Borrow
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>WBTC</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>4.2%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Borrow
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>USDC</TableCell>
                      <TableCell>1000000</TableCell>
                      <TableCell>5.8%</TableCell>
                      <TableCell>
                        <Button variant="secondary" size="sm">
                          Borrow
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

