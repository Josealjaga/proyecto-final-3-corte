import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import UsersTable from  "../components/UsersTable"

function UsersPage() {
  return (
    <div className="flex">
      <div className=" w-1/4 bg-cyan-100">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-cyan-500">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              ZTechnology
            </Typography>
          </div>
          <List>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/home">Dashboard</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/users">Usuarios</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/clients">Clientes</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/products">Productos</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <ShoppingCartIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/quotes">Cotizaciones</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a>Log Out</a>
            </ListItem>
          </List>
        </Card>
      </div>

      <div className="w-3/4 p-4 bg-cyan-100">
        <UsersTable />
      </div>
    </div>
  );
}


export default UsersPage;